import { useEffect, useState } from 'react';

type Piece = { id: number; left: number; color: string; duration: number; delay: number; size: number; rotate: number };

const COLORS = ['#ff4d8d', '#ff7eb3', '#ffb3c6', '#ffd700', '#ff6b9d', '#fff5f7', '#ff9eb5'];

export default function Confetti({ active, count = 80 }: { active: boolean; count?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!active) return;
    const arr: Piece[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
      size: 6 + Math.random() * 10,
      rotate: Math.random() * 360,
    }));
    setPieces(arr);
    const timer = setTimeout(() => setPieces([]), 8000);
    return () => clearTimeout(timer);
  }, [active, count]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotate}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}
