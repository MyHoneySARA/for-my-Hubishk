import { useState } from 'react';

type Option = { text: string; runs?: boolean; answer?: string };

type Question = {
  q: string;
  options: Option[];
  witty: string;
};

const QUESTIONS: Question[] = [
  {
    q: "If I could teleport to you right now, what would we do first? 🥰",
    options: [
      { text: "A long, long hug 🤗", answer: "Yes! Hours of hugging! 💕" },
      { text: "A kiss 💋", answer: "And a thousand more! 😘" },
      { text: "Coffee together ☕", answer: "My favorite girl & my favorite drink 💖" },
      { text: "I don't want you here 🙄", runs: true },
    ],
    witty: "Hehe, you picked the sweetest option! 💖",
  },
  {
    q: "If you could have one thing from me right now, what would it be? 💝",
    options: [
      { text: "Your voice 🎤", answer: "I'd sing to you forever 🎶" },
      { text: "A warm hug 🤗", answer: "Comin' right up, my love!" },
      { text: "A kiss 💋", answer: "Mwah! 💕" },
      { text: "Nothing 🚫", runs: true },
    ],
    witty: "Hugs it is! Sending one through the screen 🤗💕",
  },
  {
    q: "How much do you love Zana? 💖",
    options: [
      { text: "More than coffee ☕" },
      { text: "More than croissants 🥐" },
      { text: "More than biology 🧬" },
      { text: "All of the above + infinity ♾️" },
    ],
    witty: "That's my Sara! Loving me more than ALL the things 💕",
  },
  {
    q: "Pick your perfect date with Zana 💕",
    options: [
      { text: "Café hopping ☕" },
      { text: "Stargazing 🌌" },
      { text: "Cuddling at home 🛋️" },
      { text: "I don't want to date you 😤", runs: true },
    ],
    witty: "Cuddles at home? My love language! 🛋️💗",
  },
  {
    q: "What's the best thing about us? 💑",
    options: [
      { text: "Our deep talks 🗣️" },
      { text: "Our silly laughs 😂" },
      { text: "Our kisses & hugs 💋🤗" },
      { text: "There is no 'us' 🙄", runs: true },
    ],
    witty: "All of it! That's what makes us, us 💕",
  },
];

export default function WouldYouRather() {
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number, runs?: boolean) => {
    if (runs) {
      setFeedback("Hehe, that option ran away! Try again 😏");
      return;
    }
    const q = QUESTIONS[step];
    const opt = q.options[idx];
    setFeedback(opt.answer || q.witty);
    setTimeout(() => {
      if (step + 1 < QUESTIONS.length) {
        setStep((s) => s + 1);
        setFeedback(null);
      } else {
        setFinished(true);
      }
    }, 1800);
  };

  const restart = () => {
    setStep(0);
    setFeedback(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="glass mx-auto max-w-xl rounded-3xl p-10 text-center shadow-2xl">
        <div className="text-8xl heartbeat">💖</div>
        <h3 className="script-font mt-3 text-4xl font-bold gradient-text">
          You completed it, my love!
        </h3>
        <p className="mt-3 text-xl text-pink-700">
          Every answer was perfect because it came from you 💕
        </p>
        <button
          onClick={restart}
          className="love-button mt-5 rounded-full px-6 py-2 text-lg font-bold text-white"
        >
          Play Again 💖
        </button>
      </div>
    );
  }

  const current = QUESTIONS[step];

  return (
    <div className="glass mx-auto max-w-xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💕 Would You Rather 💕
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Sara & Zana edition! Pick what your heart says 💖
      </p>

      <div className="mt-4 rounded-full bg-pink-200 px-3 py-1 text-center text-sm font-semibold text-pink-700">
        Question {step + 1} / {QUESTIONS.length}
      </div>

      <h4 className="mt-4 text-center text-2xl font-bold text-pink-800">
        {current.q}
      </h4>

      <div className="mt-6 grid grid-cols-1 gap-3">
        {current.options.map((o, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i, o.runs)}
            className="rounded-2xl border-2 border-pink-200 bg-white/80 px-4 py-3 text-left text-lg font-semibold text-pink-700 transition-all hover:scale-105 hover:bg-pink-50"
          >
            {o.text}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 p-4 text-center text-xl font-semibold text-pink-700">
          {feedback}
        </div>
      )}
    </div>
  );
}
