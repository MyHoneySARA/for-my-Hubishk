import { useState } from 'react';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="pulse-heart text-6xl md:text-7xl">💖</span>
          <span className="pulse-heart text-7xl md:text-8xl" style={{ animationDelay: '0.3s' }}>
            💕
          </span>
          <span className="pulse-heart text-6xl md:text-7xl" style={{ animationDelay: '0.6s' }}>
            💖
          </span>
        </div>

        <h1 className="script-font text-6xl font-bold leading-tight gradient-text md:text-8xl">
          For My Beautiful Sara
        </h1>

        <p className="script-font mt-3 text-3xl text-pink-700 md:text-4xl">
          with all my love, always
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-3xl">
          <span className="wiggle">🌀</span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-pink-700 shadow">
            Curly hair
          </span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-pink-700 shadow">
            ☕ Coffee lover
          </span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-pink-700 shadow">
            🧬 Biology girl
          </span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-pink-700 shadow">
            🥐 Croissant queen
          </span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-pink-700 shadow">
            🎂 Born 14/9/2003
          </span>
        </div>

        <p className="script-font mx-auto mt-8 max-w-2xl text-2xl text-pink-700 md:text-3xl">
          Sara, my love — I made this whole world for you, just to say...
        </p>

        <button
          onClick={() => setRevealed(true)}
          className={`love-button mt-8 rounded-full px-10 py-4 text-2xl font-bold text-white ${revealed ? "opacity-0" : "opacity-100"}`}
        >
          Tap to feel my heart 💝
        </button>

        {revealed && (
          <div className="mt-4">
            <p className="script-font text-5xl font-bold text-rose-600 md:text-6xl">
              I LOVE YOU SO MUCH 💗
            </p>
            <p className="mt-2 text-2xl text-pink-600">and I miss you every second 🥺</p>
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-2 text-pink-500">
          <span className="text-sm">scroll down for more love ↓</span>
          <span className="pulse-heart text-2xl">💖</span>
        </div>
      </div>
    </section>
  );
}
