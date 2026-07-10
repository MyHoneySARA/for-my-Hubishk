import { useEffect, useRef, useState } from 'react';

type Item = {
  id: number;
  x: number;
  y: number;
  type: 'love' | 'cold';
  emoji: string;
};

const LOVE_EMOJIS = ['💖', '💕', '💋', '🤗', '🌹', '💝', '✨', '💗'];
const COLD_EMOJIS = ['🤧', '🥶', '❄️', '🤒', '🌡️', '💊'];

export default function WhackABad() {
  const [items, setItems] = useState<Item[]>([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [time, setTime] = useState(20);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const idRef = useRef(0);

  const start = () => {
    setItems([]);
    setScore(0);
    setMissed(0);
    setTime(20);
    setRunning(true);
    setFinished(false);
    idRef.current = 0;
  };

  useEffect(() => {
    if (!running) return;
    const spawn = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        // Remove items that have been around too long
        for (let i = next.length - 1; i >= 0; i--) {
          if (next[i].id < idRef.current - 8) {
            if (next[i].type === 'cold') setMissed((m) => m + 1);
            next.splice(i, 1);
          }
        }
        const numToSpawn = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < numToSpawn; i++) {
          const isLove = Math.random() > 0.4;
          next.push({
            id: idRef.current++,
            x: Math.random() * 85 + 5,
            y: Math.random() * 80 + 5,
            type: isLove ? 'love' : 'cold',
            emoji: isLove
              ? LOVE_EMOJIS[Math.floor(Math.random() * LOVE_EMOJIS.length)]
              : COLD_EMOJIS[Math.floor(Math.random() * COLD_EMOJIS.length)],
          });
        }
        return next;
      });
    }, 600);
    const tick = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setRunning(false);
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      clearInterval(spawn);
      clearInterval(tick);
    };
  }, [running]);

  const whack = (item: Item) => {
    if (item.type === 'love') {
      setScore((s) => s + 2);
    } else {
      setScore((s) => Math.max(0, s - 1));
    }
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="glass mx-auto max-w-2xl overflow-hidden rounded-3xl p-6 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💖 Whack-a-Cold Game 💖
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Click the loves! Avoid the colds! (Even in summer 😤)
      </p>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/60 p-3 text-pink-700">
        <div className="text-lg font-semibold">⏱️ {time}s</div>
        <div className="text-lg font-semibold">💖 {score}</div>
        <div className="text-lg font-semibold">💔 {missed}</div>
      </div>

      <div className="relative mt-3 h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => whack(it)}
            className="absolute transition-transform hover:scale-125 wiggle"
            style={{
              left: `${it.x}%`,
              top: `${it.y}%`,
              fontSize: '44px',
            }}
          >
            {it.emoji}
          </button>
        ))}

        {finished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur">
            <div className="text-7xl heartbeat">🏆</div>
            <h4 className="script-font mt-3 text-4xl font-bold text-pink-700">
              Time's up, my love!
            </h4>
            <p className="mt-2 text-2xl text-pink-600">
              You scored <span className="text-4xl font-bold text-rose-500">{score}</span> points 💕
            </p>
            <p className="mt-2 text-pink-500">
              {score >= 20
                ? "You're a love-defending queen! 👑"
                : "Cute try, my Sara! You tried your best 💖"}
            </p>
            <button
              onClick={start}
              className="love-button mt-4 rounded-full px-6 py-2 text-lg font-bold text-white"
            >
              Play Again 💖
            </button>
          </div>
        )}

        {!running && !finished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur">
            <div className="text-6xl">🤧💖</div>
            <h4 className="script-font mt-3 text-3xl font-bold text-pink-700">
              Save Sara from the colds!
            </h4>
            <p className="mt-2 px-6 text-center text-pink-600">
              Click hearts to collect +2 points. Avoid the cold & flu emojis!
            </p>
            <button
              onClick={start}
              className="love-button mt-4 rounded-full px-6 py-3 text-xl font-bold text-white"
            >
              Start Game 💖
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
