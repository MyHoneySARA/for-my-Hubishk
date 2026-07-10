import { useEffect, useRef, useState } from 'react';

type FallingHeart = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  caught: boolean;
  emoji: string;
};

const EMOJIS = ['💖', '💕', '💗', '💝', '💘', '🌸', '✨'];

export default function HeartCatcher() {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [time, setTime] = useState(30);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const idRef = useRef(0);
  const tickRef = useRef(0);

  const start = () => {
    setHearts([]);
    setScore(0);
    setMissed(0);
    setTime(30);
    setRunning(true);
    setFinished(false);
    idRef.current = 0;
  };

  useEffect(() => {
    if (!running) return;
    const spawn = setInterval(() => {
      setHearts((prev) => {
        const newHearts = [...prev];
        if (newHearts.length < 8) {
          newHearts.push({
            id: idRef.current++,
            x: Math.random() * 90 + 5,
            y: 0,
            size: 30 + Math.random() * 24,
            speed: 0.5 + Math.random() * 0.8,
            caught: false,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          });
        }
        return newHearts.map((h) =>
          h.caught ? h : { ...h, y: h.y + h.speed }
        ).filter((h) => {
          if (h.y >= 95 && !h.caught) {
            setMissed((m) => m + 1);
            return false;
          }
          return true;
        });
      });
    }, 400);
    const tick = setInterval(() => {
      setTime((t) => {
        tickRef.current += 1;
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

  const catchHeart = (id: number) => {
    setHearts((prev) =>
      prev.map((h) => (h.id === id ? { ...h, caught: true } : h))
    );
    setScore((s) => s + 1);
  };

  return (
    <div className="glass mx-auto max-w-2xl overflow-hidden rounded-3xl p-6 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💖 Catch My Love 💖
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Click the falling hearts to catch my love! 💕
      </p>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/60 p-3 text-pink-700">
        <div className="text-lg font-semibold">⏱️ {time}s</div>
        <div className="text-lg font-semibold">💖 {score}</div>
        <div className="text-lg font-semibold">💔 {missed}</div>
      </div>

      <div className="relative mt-3 h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-pink-50 to-rose-100">
        {hearts.map((h) =>
          h.caught ? (
            <div
              key={h.id}
              className="absolute heart-float"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                fontSize: `${h.size}px`,
                animationDuration: '0.8s',
                ['--drift' as any]: '0px',
              }}
            >
              ✨
            </div>
          ) : (
            <button
              key={h.id}
              onClick={() => catchHeart(h.id)}
              className="absolute transition-transform hover:scale-110"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                fontSize: `${h.size}px`,
              }}
            >
              {h.emoji}
            </button>
          )
        )}
        {finished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur">
            <div className="text-7xl heartbeat">🏆</div>
            <h4 className="script-font mt-3 text-4xl font-bold text-pink-700">
              Time's up, my love!
            </h4>
            <p className="mt-2 text-2xl text-pink-600">
              You caught <span className="text-4xl font-bold text-rose-500">{score}</span> hearts 💕
            </p>
            <p className="mt-2 text-pink-500">
              {score >= 15 ? "You're a love-catching queen! 👑" : "Cute try, my Sara! 💖"}
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
            <div className="text-6xl">💝</div>
            <h4 className="script-font mt-3 text-3xl font-bold text-pink-700">
              Ready to catch my love?
            </h4>
            <p className="mt-2 px-4 text-center text-pink-600">
              Click as many falling hearts as you can in 30 seconds!
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
