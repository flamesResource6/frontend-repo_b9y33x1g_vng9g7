import React from 'react'
import Hero from './components/Hero'
import Scenes from './components/Scenes'
import Reel from './components/Reel'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* subtle animated gradient background layer */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_300px_at_10%_110%,rgba(236,72,153,0.12),transparent)]" />

      <Hero />
      <Reel />
      <Scenes />

      {/* footer */}
      <footer className="relative z-20 border-t border-white/10 bg-black/40 py-10">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/60">High-tech creative energy • Neon purple, electric blue, and warm glow</p>
          <div className="flex items-center gap-3 text-white/50">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Live</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
