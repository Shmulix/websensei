/**
 * Playwright Skill - Helper Utilities
 * Utility functions for common browser automation tasks.
 */

const net = require('net');

/**
 * Detect running dev servers on common ports
 * @returns {Promise<Array>} List of detected servers
 */
async function detectDevServers() {
  const commonPorts = [3000, 3001, 3002, 4000, 4200, 5000, 5173, 8000, 8080, 8888];
  const servers = [];

  await Promise.all(
    commonPorts.map(port =>
      new Promise(resolve => {
        const socket = new net.Socket();
        socket.setTimeout(300);
        socket.on('connect', () => {
          servers.push({ port, url: `http://localhost:${port}` });
          socket.destroy();
          resolve();
        });
        socket.on('timeout', () => { socket.destroy(); resolve(); });
        socket.on('error', () => { socket.destroy(); resolve(); });
        socket.connect(port, 'localhost');
      })
    )
  );

  return servers.sort((a, b) => a.port - b.port);
}

/**
 * Read extra HTTP headers from environment variables
 * Supports:
 *   PW_HEADER_NAME + PW_HEADER_VALUE  (single header)
 *   PW_EXTRA_HEADERS                  (JSON object with multiple headers)
 * @returns {Object|null} Headers object or null if none configured
 */
function getExtraHeadersFromEnv() {
  const headers = {};
  let hasHeaders = false;

  // Single header via PW_HEADER_NAME / PW_HEADER_VALUE
  if (process.env.PW_HEADER_NAME && process.env.PW_HEADER_VALUE) {
    headers[process.env.PW_HEADER_NAME] = process.env.PW_HEADER_VALUE;
    hasHeaders = true;
  }

  // Multiple headers via PW_EXTRA_HEADERS (JSON)
  if (process.env.PW_EXTRA_HEADERS) {
    try {
      const extra = JSON.parse(process.env.PW_EXTRA_HEADERS);
      Object.assign(headers, extra);
      hasHeaders = true;
    } catch (e) {
      console.warn('⚠️  PW_EXTRA_HEADERS is not valid JSON, ignoring.');
    }
  }

  return hasHeaders ? headers : null;
}

/**
 * Create a new browser context with optional extra HTTP headers from env
 * @param {import('playwright').Browser} browser
 * @param {Object} [options] - Additional context options
 * @returns {Promise<import('playwright').BrowserContext>}
 */
async function createContext(browser, options = {}) {
  const extraHeaders = getExtraHeadersFromEnv();
  const contextOptions = {
    ...options,
    extraHTTPHeaders: {
      ...(extraHeaders || {}),
      ...(options.extraHTTPHeaders || {}),
    },
  };
  return browser.newContext(contextOptions);
}

/**
 * Safe click with retry
 * @param {import('playwright').Page} page
 * @param {string} selector
 * @param {Object} [options]
 * @param {number} [options.retries=3]
 * @param {number} [options.timeout=5000]
 */
async function safeClick(page, selector, { retries = 3, timeout = 5000 } = {}) {
  for (let i = 0; i < retries; i++) {
    try {
      await page.locator(selector).waitFor({ state: 'visible', timeout });
      await page.locator(selector).click();
      return;
    } catch (e) {
      if (i === retries - 1) throw e;
      await page.waitForTimeout(500);
    }
  }
}

/**
 * Safe type — clears field first, then types
 * @param {import('playwright').Page} page
 * @param {string} selector
 * @param {string} text
 * @param {Object} [options]
 * @param {number} [options.delay=0]
 */
async function safeType(page, selector, text, { delay = 0 } = {}) {
  await page.locator(selector).waitFor({ state: 'visible' });
  await page.locator(selector).clear();
  await page.locator(selector).type(text, { delay });
}

/**
 * Take a timestamped screenshot saved to /tmp
 * @param {import('playwright').Page} page
 * @param {string} name - Base name for the file
 * @param {boolean} [fullPage=true]
 * @returns {Promise<string>} Path to the saved screenshot
 */
async function takeScreenshot(page, name, fullPage = true) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const path = `/tmp/${name}-${timestamp}.png`;
  await page.screenshot({ path, fullPage });
  console.log(`📸 Screenshot saved: ${path}`);
  return path;
}

/**
 * Attempt to dismiss common cookie consent banners
 * @param {import('playwright').Page} page
 */
async function handleCookieBanner(page) {
  const selectors = [
    'button[id*="accept"]',
    'button[class*="accept"]',
    'button[aria-label*="Accept"]',
    '[data-testid*="cookie"] button',
    '#onetrust-accept-btn-handler',
    '.cc-accept',
    'button:has-text("Accept")',
    'button:has-text("Accept all")',
    'button:has-text("I agree")',
    'button:has-text("OK")',
  ];

  for (const selector of selectors) {
    try {
      const el = page.locator(selector).first();
      if (await el.isVisible({ timeout: 500 })) {
        await el.click();
        console.log(`🍪 Cookie banner dismissed via: ${selector}`);
        return;
      }
    } catch {
      // Continue trying
    }
  }
}

/**
 * Extract data from an HTML table
 * @param {import('playwright').Page} page
 * @param {string} selector - CSS selector for the table
 * @returns {Promise<Array<Object>>} Array of row objects keyed by column headers
 */
async function extractTableData(page, selector) {
  return page.evaluate(sel => {
    const table = document.querySelector(sel);
    if (!table) return [];

    const headers = Array.from(table.querySelectorAll('thead th, thead td')).map(
      th => th.textContent.trim()
    );

    const rows = Array.from(table.querySelectorAll('tbody tr'));
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td, th'));
      const obj = {};
      cells.forEach((cell, i) => {
        const key = headers[i] || `col${i}`;
        obj[key] = cell.textContent.trim();
      });
      return obj;
    });
  }, selector);
}

module.exports = {
  detectDevServers,
  getExtraHeadersFromEnv,
  createContext,
  safeClick,
  safeType,
  takeScreenshot,
  handleCookieBanner,
  extractTableData,
};
