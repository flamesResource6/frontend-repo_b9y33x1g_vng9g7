import React from 'react'
import { motion } from 'framer-motion'
import { PenTool, Keyboard, Scissors, Cube, Sparkles } from 'lucide-react'

const FloatingCard = ({ icon: Icon, title, lines, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay, duration: 0.8, ease: 'easeOut' }}
    className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5 md:p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
  >
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />
    <div className="relative z-10 flex items-start gap-4">
      <div className="rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 p-3 text-indigo-100">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-white font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-indigo-100/80">{lines}</p>
      </div>
    </div>
  </motion.div>
)

const Scenes = () => {
  return (
    <section id="capabilities" className="relative bg-gradient-to-b from-black via-[#060612] to-black py-24">
      {/* grid backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.04)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.04)_25px)] bg-[size:25px_25px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Open-space studio energy, rendered in motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-indigo-100/90 text-lg"
          >
            Neon reflections, holographic UI, and seamless collaboration between diverse creatives.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FloatingCard icon={Cube} title="3D Designers" lines="Drag glowing meshes through mid-air. Real-time GI and reflections animate with every gesture." delay={0.05} />
          <FloatingCard icon={Keyboard} title="Growth Marketers" lines="Type on floating keyboards. KPI dashboards ripple with parallax and particle bursts." delay={0.1} />
          <FloatingCard icon={Scissors} title="Video Editors" lines="Trim holographic timelines. Keyframes bloom into trails and lens flares." delay={0.15} />
          <FloatingCard icon={PenTool} title="Art Directors" lines="Sketch on glass walls. Strokes extrude into neon paths with soft noise." delay={0.2} />
          <FloatingCard icon={Sparkles} title="Motion Team" lines="Animated grids, shifting gradients, and ambient particles—constant, seamless transitions." delay={0.25} />
        </div>
      </div>

      {/* drifting particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-fuchsia-400/60 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 4}s infinite`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: .6; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          50% { transform: translateY(0) translateX(0); opacity: .7; }
          75% { transform: translateY(20px) translateX(-10px); opacity: 1; }
          100% { transform: translateY(0) translateX(0); opacity: .6; }
        }
      `}</style>
    </section>
  )
}

export default Scenes
