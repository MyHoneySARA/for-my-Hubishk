import { useEffect, useState } from 'react';

function timeUntilBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  // 14 September of current year
  let target = new Date(year, 8, 14, 0, 0, 0);
  if (now > target) {
    target = new Date(year + 1, 8, 14, 0, 0, 0);
  }
  const diff = target.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, total: diff };
}

export default function Countdown() {
  const [time, setTime] = useState(timeUntilBirthday());

  useEffect(() => {
    const id = setInterval(() => setTime(timeUntilBirthday()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass mx-auto max-w-3xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        🎂 Countdown to Sara's Birthday 🎂
      </h3>
      <p className="mt-2 text-center text-pink-600">
        September 14 — the most magical day of the year 💖
      </p>

      <div className="mt-6 grid grid-cols-4 gap-3">
        {[
          { label: 'Days', value: time.days },
          { label: 'Hours', value: time.hours },
          { label: 'Minutes', value: time.minutes },
          { label: 'Seconds', value: time.seconds },
        ].map((u, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 p-4 text-center shadow-md"
          >
            <div className="text-4xl font-bold text-pink-700 md:text-5xl">
              {String(u.value).padStart(2, '0')}
            </div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-pink-500">
              {u.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-pink-600">
        ✨ My Sara, born in 2003 — every year you grow more beautiful ✨
      </p>
    </div>
  );
}
