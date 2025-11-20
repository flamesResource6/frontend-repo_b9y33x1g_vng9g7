import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useTransform(my, [ -100, 100 ], [ 8, -8 ])
  const rotateY = useTransform(mx, [ -100, 100 ], [ -8, 8 ])
  const glowOpacity = useTransform(my, [-120, 0, 120], [0.25, 0.6, 0.25])

  const onMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2) * 100
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2) * 100
    mx.set(x)
    my.set(y)
  }

  // SVG noise data URI (properly quoted)
  const noiseDataUri = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>\")"

  return (
    <section className="relative min-h-screen overflow-hidden bg-black" onMouseMove={onMouseMove}>
      {/* Spline 3D scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-screen">
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      </div>

      {/* Animated noise / vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(transparent 60%, rgba(0,0,0,0.6))' }} />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.06]" style={{ backgroundImage: noiseDataUri }} />

      {/* Headline content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div style={{ rotateX, rotateY }} className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              Creative Agency of the Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
              className="mt-6 text-lg md:text-2xl text-indigo-100/90"
            >
              Ultra-real environments. Holographic workflows. Everything in motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#reel" className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-white">
                <span className="relative z-10 text-base md:text-lg font-semibold">Play Showreel</span>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-indigo-100 backdrop-blur-md hover:bg-white/10">
                Explore Capabilities
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Neon glow following motion */}
      <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute -inset-16 z-10 blur-3xl">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.25),transparent_35%)]" />
      </motion.div>
    </section>
  )
}

export default Hero
