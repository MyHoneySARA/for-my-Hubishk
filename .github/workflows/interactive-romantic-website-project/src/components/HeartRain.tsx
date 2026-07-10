import { useEffect, useState } from 'react';

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  emoji: string;
};

const EMOJIS = ['💖', '💕', '💗', '💝', '🌸', '✨', '💘', '🥐', '☕', '🧬'];

export default function HeartRain({ count = 30, active = true }: { count?: number; active?: boolean }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (!active) return;
    const arr: Heart[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 200,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setHearts(arr);
  }, [count, active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-float absolute"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            ['--drift' as any]: `${h.drift}px`,
            bottom: 0,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </div>
  );
}
