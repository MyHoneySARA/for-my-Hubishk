import { useState } from 'react';

export default function HugCounter() {
  const [hugs, setHugs] = useState(0);
  const [kisses, setKisses] = useState(0);
  const [showBigHug, setShowBigHug] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string; x: number }[]>([]);

  const sendHug = () => {
    setHugs((h) => h + 1);
    spawnEmoji('🤗');
  };

  const sendKiss = () => {
    setKisses((k) => k + 1);
    spawnEmoji('💋');
  };

  const sendMegaLove = () => {
    setShowBigHug(true);
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const emojis = ['💖', '💕', '💗', '💋', '🤗', '💝', '✨'];
        spawnEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
      }, i * 80);
    }
    setTimeout(() => setShowBigHug(false), 3500);
  };

  const spawnEmoji = (emoji: string) => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 80 + 10;
    setFloatingEmojis((prev) => [...prev, { id, emoji, x }]);
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== id));
    }, 2000);
  };

  return (
    <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 shadow-2xl">
      {showBigHug && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-pink-100/80 backdrop-blur">
          <div className="text-center">
            <div className="text-9xl heartbeat">🤗💖</div>
            <p className="script-font mt-4 text-5xl font-bold gradient-text">
              MEGA HUG & KISS!
            </p>
            <p className="mt-2 text-2xl text-pink-700">
              Squeeze! Squeeze! Squeeze! 💕
            </p>
          </div>
        </div>
      )}

      {floatingEmojis.map((e) => (
        <div
          key={e.id}
          className="heart-float pointer-events-none absolute bottom-0 z-20 text-4xl"
          style={{
            left: `${e.x}%`,
            animationDuration: '2s',
            ['--drift' as any]: '0px',
          }}
        >
          {e.emoji}
        </div>
      ))}

      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        🤗 Virtual Love Station 💋
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Send me hugs and kisses, my love! 💕
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/70 p-6 text-center">
          <div className="text-6xl pulse-heart">🤗</div>
          <p className="mt-2 text-3xl font-bold text-pink-700">{hugs}</p>
          <p className="text-pink-500">hugs sent</p>
          <button
            onClick={sendHug}
            className="love-button mt-3 w-full rounded-full px-4 py-2 text-lg font-bold text-white"
          >
            Send a Hug 💕
          </button>
        </div>
        <div className="rounded-2xl bg-white/70 p-6 text-center">
          <div className="text-6xl pulse-heart">💋</div>
          <p className="mt-2 text-3xl font-bold text-pink-700">{kisses}</p>
          <p className="text-pink-500">kisses sent</p>
          <button
            onClick={sendKiss}
            className="love-button mt-3 w-full rounded-full px-4 py-2 text-lg font-bold text-white"
          >
            Send a Kiss 💖
          </button>
        </div>
      </div>

      <button
        onClick={sendMegaLove}
        className="love-button mt-4 w-full rounded-full px-6 py-4 text-2xl font-bold text-white"
      >
        🌟 SEND MEGA LOVE 🌟
      </button>

      <p className="mt-4 text-center text-sm text-pink-500 italic">
        Every click = a real hug & kiss from Zana to Sara 💖
      </p>
    </div>
  );
}
