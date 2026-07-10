import { useState } from 'react';

const FORTUNES = [
  "Zana is thinking about you right now 💭💖",
  "A hug from Zana is on its way to you 🤗",
  "You will smile very soon — it will be about him 😊",
  "Sara, you are the most beautiful girl in the world 💕",
  "He misses you more than words can say 🥺",
  "Today is a perfect day for a kiss 💋",
  "Your smile just made Zana's whole day better ✨",
  "He counted his love for you — it has no end ♾️💖",
  "Sara is loved. Sara is cherished. Sara is everything 🌸",
  "A surprise coffee date is in your future ☕💝",
  "The next time you sleep, dream of him 💫",
  "He will tell you he loves you 1000 more times before the year ends 💗",
];

export default function FortuneCookie() {
  const [fortune, setFortune] = useState<string | null>(null);
  const [cracking, setCracking] = useState(false);

  const crack = () => {
    setCracking(true);
    setTimeout(() => {
      setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
      setCracking(false);
    }, 800);
  };

  const reset = () => {
    setFortune(null);
  };

  return (
    <div className="glass mx-auto max-w-xl rounded-3xl p-8 text-center shadow-2xl">
      <h3 className="script-font text-4xl font-bold gradient-text">
        🥠 Love Fortune Cookie
      </h3>
      <p className="mt-2 text-pink-600">Crack open a love message from Zana 💕</p>

      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={fortune ? reset : crack}
          disabled={cracking}
          className={`text-8xl transition-transform ${cracking ? "shake-it" : "hover:scale-110"}`}
        >
          🥠
        </button>
        {!fortune && !cracking && (
          <p className="mt-3 script-font text-xl text-pink-700">Tap the cookie 💖</p>
        )}
        {cracking && <p className="mt-3 text-xl text-pink-600">Cracking love... 💕</p>}
      </div>

      {fortune && (
        <div className="mt-6 rounded-2xl bg-white/80 p-6 text-2xl font-semibold text-pink-700 shadow-inner">
          ✨ {fortune} ✨
          <div className="mt-4 text-3xl">💖</div>
          <button
            onClick={reset}
            className="love-button mt-3 rounded-full px-5 py-2 text-base font-bold text-white"
          >
            Crack Another 💕
          </button>
        </div>
      )}
    </div>
  );
}
