'use client'

import { useGSAPAnimations } from '@/hooks/useGSAP'

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useGSAPAnimations()
  return <>{children}</>
}
