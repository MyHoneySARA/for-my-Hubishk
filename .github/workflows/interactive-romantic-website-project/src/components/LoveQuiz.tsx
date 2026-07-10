import { useState } from 'react';

type Question = {
  q: string;
  options: string[];
  correct: number;
  emoji: string;
};

const QUESTIONS: Question[] = [
  {
    q: "What does Sara love to drink the most? ☕",
    options: ["Tea 🍵", "Coffee ☕", "Juice 🧃", "Water 💧"],
    correct: 1,
    emoji: "☕",
  },
  {
    q: "What is Sara studying? 🧬",
    options: ["Physics ⚛️", "Chemistry 🧪", "Biology 🧬", "Math 📐"],
    correct: 2,
    emoji: "🧬",
  },
  {
    q: "What's Sara's favorite sweet? 🥐",
    options: ["Donut 🍩", "Croissant 🥐", "Cake 🍰", "Chocolate 🍫"],
    correct: 1,
    emoji: "🥐",
  },
  {
    q: "How is Sara's beautiful hair? 💁‍♀️",
    options: ["Straight", "Curly 🌀", "Wavy", "Bald"],
    correct: 1,
    emoji: "💁‍♀️",
  },
  {
    q: "When does Sara catch a cold? 🤧",
    options: ["In winter", "In summer (yes, every month!)", "Never", "Only autumn"],
    correct: 1,
    emoji: "🤧",
  },
  {
    q: "When is Sara's birthday? 🎂",
    options: ["14/9 💖", "25/12 🎄", "1/1 🎉", "20/8 🌸"],
    correct: 0,
    emoji: "🎂",
  },
  {
    q: "What does Zana want to do with Sara every moment? 🥰",
    options: ["Fight 😤", "Hug, kiss & be together 💕", "Sleep alone", "Ignore her"],
    correct: 1,
    emoji: "💕",
  },
];

export default function LoveQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === QUESTIONS[step].correct;
    if (correct) {
      setScore((s) => s + 1);
      setFeedback("Correct! You know me so well 💖");
    } else {
      setFeedback("Hehe, close one! 💕");
    }
    setTimeout(() => {
      if (step + 1 < QUESTIONS.length) {
        setStep((s) => s + 1);
        setSelected(null);
        setFeedback(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const restart = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setShowResult(false);
  };

  if (showResult) {
    const percent = Math.round((score / QUESTIONS.length) * 100);
    const message =
      percent === 100
        ? "PERFECT SCORE! You are literally the love of my life 💯💖"
        : percent >= 70
        ? "My amazing Sara! You know us so well 💕"
        : "Hehe, no worries — we have forever to learn each other 🥰";
    return (
      <div className="glass mx-auto max-w-xl rounded-3xl p-10 text-center shadow-2xl">
        <div className="text-7xl heartbeat">🏆</div>
        <h3 className="script-font mt-4 text-4xl font-bold gradient-text">
          Quiz Complete!
        </h3>
        <p className="mt-4 text-2xl text-pink-700">
          You scored <span className="text-4xl font-bold text-rose-500">{score}/{QUESTIONS.length}</span>
        </p>
        <p className="mt-4 text-xl text-pink-600">{message}</p>
        <button
          onClick={restart}
          className="love-button mt-6 rounded-full px-8 py-3 text-lg font-bold text-white"
        >
          Play Again 💖
        </button>
      </div>
    );
  }

  const current = QUESTIONS[step];

  return (
    <div className="glass mx-auto max-w-xl rounded-3xl p-8 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-pink-200 px-4 py-1 text-sm font-semibold text-pink-700">
          Question {step + 1} / {QUESTIONS.length}
        </span>
        <span className="text-2xl">{current.emoji}</span>
      </div>
      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-pink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-500"
          style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <h3 className="mt-6 text-center text-2xl font-bold text-pink-800">
        {current.q}
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {current.options.map((opt, i) => {
          const isCorrect = i === current.correct;
          const isSelected = i === selected;
          let cls =
            "rounded-2xl border-2 border-pink-200 bg-white/80 px-4 py-3 text-lg font-semibold text-pink-700 transition-all hover:scale-105 hover:bg-pink-50";
          if (selected !== null) {
            if (isCorrect) cls = "rounded-2xl border-2 border-green-400 bg-green-100 px-4 py-3 text-lg font-semibold text-green-700";
            else if (isSelected) cls = "rounded-2xl border-2 border-red-400 bg-red-100 px-4 py-3 text-lg font-semibold text-red-700 shake-it";
            else cls = "rounded-2xl border-2 border-pink-100 bg-white/50 px-4 py-3 text-lg font-semibold text-pink-400 opacity-50";
          }
          return (
            <button
              key={i}
              disabled={selected !== null}
              onClick={() => handleAnswer(i)}
              className={cls}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {feedback && (
        <p className="mt-4 text-center text-xl font-semibold text-pink-600">
          {feedback}
        </p>
      )}
    </div>
  );
}
