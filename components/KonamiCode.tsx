'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const KONAMI_CODES = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
] as const

export function KonamiCode({ children }: { children: React.ReactNode }) {
  const indexRef = useRef(0)
  const [barrelRoll, setBarrelRoll] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const trigger = useCallback(() => {
    indexRef.current = 0
    setBarrelRoll(true)
    setToastOpen(true)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastOpen(false), 4200)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const expected = KONAMI_CODES[indexRef.current]
      if (e.code === expected) {
        indexRef.current += 1
        if (indexRef.current >= KONAMI_CODES.length) {
          trigger()
        }
      } else {
        indexRef.current = e.code === KONAMI_CODES[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [trigger])

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [])

  return (
    <>
      <motion.div
        className="flex min-h-screen flex-col"
        animate={{ rotate: barrelRoll ? 360 : 0 }}
        transition={{
          duration: barrelRoll ? 1 : 0,
          ease: [0.45, 0, 0.55, 1],
        }}
        style={{ transformOrigin: '50% 50%' }}
        onAnimationComplete={() => {
          if (barrelRoll) setBarrelRoll(false)
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {toastOpen && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="pointer-events-none fixed bottom-24 left-1/2 z-[100] w-[min(90vw,22rem)] -translate-x-1/2 rounded-xl border border-indigo-500/40 bg-slate-900/95 px-4 py-3 text-center text-sm font-medium text-slate-100 shadow-xl shadow-indigo-500/20 backdrop-blur-md dark:border-indigo-400/30 dark:bg-slate-950/95"
          >
            Developer Mode Unlocked! 🚀
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
