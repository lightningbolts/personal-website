'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

type Bullet = { x: number; y: number }
type Enemy = { x: number; y: number; w: number; h: number; vy: number; kind: 'asteroid' | 'alien' }

const PLAYER_SIZE = 44
/** Horizontal movement, pixels per second */
const PLAYER_MOVE_SPEED = 620
const BULLET_SPEED = 520
const BASE_ENEMY_SPEED = 90
const SPAWN_INTERVAL = 1.1

export function SpaceShooter404() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const keysRef = useRef({ left: false, right: false, fire: false })
  const lastShotRef = useRef(0)
  const gameRef = useRef({
    playing: false,
    playerX: 0,
    bullets: [] as Bullet[],
    enemies: [] as Enemy[],
    spawnTimer: 0,
    score: 0,
    width: 320,
    height: 400,
  })

  const [playing, setPlaying] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)

  const endGame = useCallback(() => {
    const g = gameRef.current
    if (!g.playing) return
    g.playing = false
    g.bullets = []
    g.enemies = []
    setFinalScore(g.score)
    setGameOver(true)
    setPlaying(false)
  }, [])

  const resetGame = useCallback(() => {
    const g = gameRef.current
    g.bullets = []
    g.enemies = []
    g.spawnTimer = 0
    g.score = 0
    g.playing = true
    g.playerX = g.width / 2
    setScore(0)
    setGameOver(false)
    setPlaying(true)
  }, [])

  const syncCanvasSize = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
    const w = Math.max(280, Math.floor(rect.width))
    const h = Math.min(520, Math.max(320, Math.floor(rect.height * 0.55)))
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    gameRef.current.width = w
    gameRef.current.height = h
    gameRef.current.playerX = Math.min(Math.max(PLAYER_SIZE / 2, gameRef.current.playerX), w - PLAYER_SIZE / 2)
  }, [])

  useEffect(() => {
    syncCanvasSize()
    const ro = new ResizeObserver(() => syncCanvasSize())
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [syncCanvasSize])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        e.preventDefault()
        keysRef.current.left = true
      }
      if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        e.preventDefault()
        keysRef.current.right = true
      }
      if (e.code === 'Space') {
        e.preventDefault()
        keysRef.current.fire = true
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keysRef.current.left = false
      if (e.code === 'ArrowRight' || e.code === 'KeyD') keysRef.current.right = false
      if (e.code === 'Space') keysRef.current.fire = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let last = performance.now()

    const circleHit = (cx: number, cy: number, r: number, rx: number, ry: number, rw: number, rh: number) => {
      const nx = Math.max(rx, Math.min(cx, rx + rw))
      const ny = Math.max(ry, Math.min(cy, ry + rh))
      const dx = cx - nx
      const dy = cy - ny
      return dx * dx + dy * dy < r * r
    }

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const g = gameRef.current
      const keys = keysRef.current
      const w = g.width
      const h = g.height

      if (g.playing) {
        const speed = PLAYER_MOVE_SPEED * dt
        if (keys.left) g.playerX -= speed
        if (keys.right) g.playerX += speed
        g.playerX = Math.max(PLAYER_SIZE / 2, Math.min(w - PLAYER_SIZE / 2, g.playerX))

        if (keys.fire && now - lastShotRef.current > 180) {
          lastShotRef.current = now
          g.bullets.push({ x: g.playerX, y: h - 56 })
        }

        g.spawnTimer += dt
        if (g.spawnTimer >= SPAWN_INTERVAL) {
          g.spawnTimer = 0
          const roll = Math.random()
          const kind: Enemy['kind'] = roll > 0.55 ? 'alien' : 'asteroid'
          const ew = kind === 'asteroid' ? 36 + Math.random() * 22 : 40
          const eh = kind === 'asteroid' ? 36 + Math.random() * 18 : 28
          const ex = ew / 2 + Math.random() * (w - ew)
          const vy = BASE_ENEMY_SPEED + Math.random() * 110 + Math.min(80, g.score * 1.2)
          g.enemies.push({ x: ex, y: -eh, w: ew, h: eh, vy, kind })
        }

        for (const b of g.bullets) b.y -= BULLET_SPEED * dt
        g.bullets = g.bullets.filter((b) => b.y > -8)

        const playerTop = h - 72
        const playerBottom = h - 16
        const playerLeft = g.playerX - PLAYER_SIZE / 2
        const playerRight = g.playerX + PLAYER_SIZE / 2

        for (const e of g.enemies) {
          e.y += e.vy * dt
          if (e.y + e.h >= playerTop && e.y <= playerBottom) {
            const overlapX = e.x + e.w / 2 > playerLeft && e.x - e.w / 2 < playerRight
            if (overlapX) {
              endGame()
              break
            }
          }
          if (e.y + e.h >= h) {
            endGame()
            break
          }
        }

        outer: for (let i = g.bullets.length - 1; i >= 0; i--) {
          const b = g.bullets[i]
          for (let j = g.enemies.length - 1; j >= 0; j--) {
            const e = g.enemies[j]
            const cx = b.x
            const cy = b.y
            const hit =
              e.kind === 'asteroid'
                ? circleHit(cx, cy, 4, e.x - e.w / 2, e.y, e.w, e.h)
                : cx >= e.x - e.w / 2 && cx <= e.x + e.w / 2 && cy >= e.y && cy <= e.y + e.h
            if (hit) {
              g.bullets.splice(i, 1)
              g.enemies.splice(j, 1)
              g.score += e.kind === 'alien' ? 150 : 100
              setScore(g.score)
              break outer
            }
          }
        }
      }

      ctx.clearRect(0, 0, w, h)
      const grad = ctx.createLinearGradient(0, 0, 0, h)
      grad.addColorStop(0, '#020617')
      grad.addColorStop(1, '#0f172a')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < 48; i++) {
        const sx = ((i * 73) % w) + (i % 3)
        const sy = ((i * 47 + now * 0.02) % h)
        ctx.fillStyle = 'rgba(148, 163, 184, 0.35)'
        ctx.fillRect(sx, sy, 1.5, 1.5)
      }

      for (const e of g.enemies) {
        const x = e.x - e.w / 2
        if (e.kind === 'asteroid') {
          ctx.fillStyle = '#64748b'
          ctx.beginPath()
          ctx.moveTo(x, e.y + e.h * 0.35)
          ctx.lineTo(x + e.w * 0.85, e.y)
          ctx.lineTo(x + e.w, e.y + e.h * 0.65)
          ctx.lineTo(x + e.w * 0.25, e.y + e.h)
          ctx.closePath()
          ctx.fill()
          ctx.strokeStyle = '#94a3b8'
          ctx.lineWidth = 1
          ctx.stroke()
        } else {
          ctx.fillStyle = '#a855f7'
          ctx.beginPath()
          ctx.ellipse(e.x, e.y + e.h / 2, e.w / 2, e.h / 2, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#e9d5ff'
          ctx.fillRect(e.x - 6, e.y + 6, 12, 8)
        }
      }

      for (const b of g.bullets) {
        ctx.shadowColor = '#38bdf8'
        ctx.shadowBlur = 10
        ctx.fillStyle = '#7dd3fc'
        ctx.fillRect(b.x - 2, b.y, 4, 14)
        ctx.shadowBlur = 0
      }

      ctx.font = `${PLAYER_SIZE}px sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('🚀', g.playerX, h - 40)

      rafRef.current = requestAnimationFrame(tick)
    }

    let cancelled = false
    const tick = (now: number) => {
      if (cancelled) return
      loop(now)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelled = true
      cancelAnimationFrame(rafRef.current)
    }
  }, [endGame])

  const pressLeft = (v: boolean) => {
    keysRef.current.left = v
  }
  const pressRight = (v: boolean) => {
    keysRef.current.right = v
  }
  const pressFire = (v: boolean) => {
    keysRef.current.fire = v
  }

  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] flex-col bg-slate-950 text-slate-100 sm:min-h-[calc(100vh-9rem)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[60%] w-[70%] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 h-[50%] w-[60%] rounded-full bg-violet-600/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-6 text-center sm:mb-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/90">Error 404</p>
          <h1 className="mb-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Lost in Space
          </h1>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            This page drifted into a void. While you&apos;re here, defend the ship: use{' '}
            <kbd className="rounded border border-slate-600 bg-slate-900 px-1.5 py-0.5 font-mono text-xs text-slate-300">
              ←
            </kbd>{' '}
            <kbd className="rounded border border-slate-600 bg-slate-900 px-1.5 py-0.5 font-mono text-xs text-slate-300">
              →
            </kbd>{' '}
            or{' '}
            <kbd className="rounded border border-slate-600 bg-slate-900 px-1.5 py-0.5 font-mono text-xs text-slate-300">
              A
            </kbd>{' '}
            <kbd className="rounded border border-slate-600 bg-slate-900 px-1.5 py-0.5 font-mono text-xs text-slate-300">
              D
            </kbd>
            , and{' '}
            <kbd className="rounded border border-slate-600 bg-slate-900 px-1.5 py-0.5 font-mono text-xs text-slate-300">
              Space
            </kbd>{' '}
            to fire. On mobile, use the controls below the radar.
          </p>
        </header>

        <div ref={containerRef} className="relative mx-auto w-full max-w-2xl flex-1">
          <canvas
            ref={canvasRef}
            className="mx-auto block w-full max-w-2xl rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-950/50"
            aria-label="Space shooter mini-game"
          />

          {!playing && !gameOver && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-slate-950/55">
              <p className="rounded-lg border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-center text-sm text-slate-300">
                Press Start to launch
              </p>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-slate-950/80 backdrop-blur-sm">
              <p className="font-serif text-2xl text-white">Game Over</p>
              <p className="text-slate-400">
                Final score: <span className="font-mono text-cyan-400">{finalScore}</span>
              </p>
              <button
                type="button"
                onClick={resetGame}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Restart
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-6">
          {!playing && !gameOver ? (
            <button
              type="button"
              onClick={resetGame}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Game
            </button>
          ) : playing ? (
            <>
              <p className="w-full text-center font-mono text-sm text-slate-400 sm:w-auto sm:text-left">
                Score: <span className="text-cyan-400">{score}</span>
              </p>
              <div className="flex w-full max-w-md justify-center gap-3 sm:hidden">
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900 py-4 text-lg text-slate-200 active:bg-slate-800"
                  onPointerDown={(e) => {
                    e.preventDefault()
                    pressLeft(true)
                  }}
                  onPointerUp={() => pressLeft(false)}
                  onPointerLeave={() => pressLeft(false)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900 py-4 text-sm font-medium text-cyan-300 active:bg-slate-800"
                  onPointerDown={(e) => {
                    e.preventDefault()
                    pressFire(true)
                  }}
                  onPointerUp={() => pressFire(false)}
                  onPointerLeave={() => pressFire(false)}
                >
                  Fire
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900 py-4 text-lg text-slate-200 active:bg-slate-800"
                  onPointerDown={(e) => {
                    e.preventDefault()
                    pressRight(true)
                  }}
                  onPointerUp={() => pressRight(false)}
                  onPointerLeave={() => pressRight(false)}
                >
                  →
                </button>
              </div>
            </>
          ) : null}

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500/50 hover:text-white"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
}
