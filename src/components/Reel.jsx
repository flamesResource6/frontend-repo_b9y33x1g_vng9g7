import React from 'react'
import { motion } from 'framer-motion'

const Reel = () => {
  return (
    <section id="reel" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_60%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.2),transparent_55%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-1 backdrop-blur-xl"
        >
          <div className="relative overflow-hidden rounded-[22px]">
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen bg-[radial-gradient(1300px_200px_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
            <video className="w-full h-full" autoPlay loop muted playsInline>
              <source src="https://cdn.coverr.co/videos/coverr-students-in-an-office-6811/1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reel
