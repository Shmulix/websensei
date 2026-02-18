---
name: frontend-design
description: Creates and styles frontend components for the websensei portfolio. Use when building UI components, animations, sections, or layouts using Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.
argument-hint: [component-name or description]
user-invocable: true
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(npm run lint), Bash(npm run build)
model: sonnet
---

# Frontend Design Skill — websensei Portfolio

Tu es un expert frontend spécialisé dans ce portfolio Next.js 14. Tu crées des composants modernes, animés et accessibles.

## Stack technique du projet

- **Framework** : Next.js 14 (App Router, i18n avec `[locale]`)
- **Langage** : TypeScript strict
- **Styles** : Tailwind CSS (`tailwind.config.ts`)
- **Animations** : Framer Motion + GSAP (`gsap ^3.14`)
- **Icônes** : Lucide React
- **Utilitaires** : `clsx` pour les classes conditionnelles
- **i18n** : Dictionnaires JSON dans `src/i18n/dictionaries/` (en, fr, he)

## Conventions du projet

### Structure des composants

```
src/components/
├── NomComposant.tsx       ← Composant principal
└── index.ts               ← Export depuis index
```

### Template de composant

```tsx
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface NomComposantProps {
  // props ici
}

export default function NomComposant({ ...props }: NomComposantProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="..."
    >
      {/* contenu */}
    </motion.section>
  );
}
```

### Conventions Tailwind

- Mobile-first : `base → sm: → md: → lg: → xl:`
- Dark mode : classes `dark:` (ThemeProvider déjà configuré)
- Palette : reprendre les couleurs existantes dans `globals.css`
- Espacement : multiples de 4 (`p-4`, `gap-8`, `mt-16`, etc.)

### Animations Framer Motion (patterns existants)

```tsx
// Entrée depuis le bas
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.1 }}

// Hover card
whileHover={{ scale: 1.03 }}
transition={{ type: 'spring', stiffness: 300 }}
```

### i18n — Accès aux traductions

```tsx
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function MonComposant() {
  const dict = useDictionary();
  return <h2>{dict.section.title}</h2>;
}
```

Ajouter les clés dans les 3 fichiers : `en.json`, `fr.json`, `he.json`.

## Processus d'implémentation

1. **Lire** les composants existants similaires pour respecter les patterns
2. **Créer** le composant en TypeScript avec les bonnes interfaces
3. **Styliser** avec Tailwind, dark mode inclus
4. **Animer** avec Framer Motion (cohérent avec le reste du site)
5. **Exporter** depuis `src/components/index.ts`
6. **i18n** : ajouter les textes dans les 3 dictionnaires si nécessaire
7. **Valider** avec `npm run lint`

## Ce qu'il faut éviter

- Ne pas utiliser `any` en TypeScript
- Ne pas hardcoder les textes (passer par i18n)
- Ne pas mélanger GSAP et Framer Motion sur le même élément
- Ne pas oublier `'use client'` pour les composants avec hooks/animations

## Tâche actuelle

Implémenter : **$ARGUMENTS**

Commence par lire les composants existants pour t'aligner sur le style du projet.
