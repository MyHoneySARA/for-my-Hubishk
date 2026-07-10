import { useEffect, useState } from 'react';

export default function MissingMeter() {
  const [missingLevel, setMissingLevel] = useState(95);

  useEffect(() => {
    const id = setInterval(() => {
      setMissingLevel((m) => {
        const change = Math.random() * 4 - 1.5;
        const next = Math.max(60, Math.min(100, m + change));
        return next;
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass fixed bottom-4 right-4 z-40 max-w-xs rounded-2xl p-3 shadow-xl">
      <div className="flex items-center gap-2">
        <div className="text-3xl wiggle">🥺</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-pink-700">Zana misses Sara</span>
            <span className="text-xs font-bold text-rose-600">{Math.round(missingLevel)}%</span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-pink-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-1000"
              style={{ width: `${missingLevel}%` }}
            />
          </div>
        </div>
      </div>
      <p className="mt-1 text-center text-[10px] text-pink-500">always off the charts 💔</p>
    </div>
  );
}
