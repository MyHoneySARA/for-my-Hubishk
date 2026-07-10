import { useEffect, useState } from 'react';

export default function ILoveYouCount() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(15);

  useEffect(() => {
    if (!running) return;
    const tick = setInterval(() => {
      setCount((c) => c + 1 + Math.floor(Math.random() * 3));
      setTime((t) => {
        if (t <= 1) {
          setRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 200);
    return () => clearInterval(tick);
  }, [running]);

  const start = () => {
    setCount(0);
    setTime(15);
    setRunning(true);
  };

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center shadow-2xl">
      <h3 className="script-font text-4xl font-bold gradient-text">
        💖 How Many Times I Love You
      </h3>
      <p className="mt-2 text-pink-600">
        Click the button to see how many times I love you in 15 seconds! 💕
      </p>

      <div className="my-6 rounded-3xl bg-gradient-to-br from-pink-100 to-rose-200 p-6 shadow-inner">
        <div className="text-6xl font-bold text-rose-600 md:text-7xl">
          {count.toLocaleString()}
        </div>
        <div className="mt-1 text-pink-500">times I love you</div>
      </div>

      {!running ? (
        <button
          onClick={start}
          className="love-button rounded-full px-8 py-4 text-2xl font-bold text-white"
        >
          💖 Start Counting 💖
        </button>
      ) : (
        <div>
          <div className="text-3xl font-bold text-pink-700">⏱️ {time}s</div>
          <p className="mt-2 text-pink-500 italic">
            Zana's heart is racing! 💓
          </p>
        </div>
      )}

      {!running && count > 0 && (
        <p className="mt-4 script-font text-2xl text-pink-700">
          And still, I love you infinitely more, Sara 💗
        </p>
      )}
    </div>
  );
}
