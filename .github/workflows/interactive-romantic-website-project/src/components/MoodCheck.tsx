import { useState } from 'react';

const ZANA_RESPONSES = [
  "Sending you the biggest, warmest hug right now 🤗💖",
  "Take a deep breath, my love. I'm here, always 💕",
  "A cup of hot coffee is on its way to you ☕💝",
  "Close your eyes — imagine my arms around you 🥰",
  "It's okay to be tired, Sara. Rest, my queen 👑",
  "Text me when you read this. I want to hear you say hi 💗",
  "Watch a cozy show, eat a croissant, and forget the world 🥐✨",
  "If I could, I'd carry you home right now 🏠💖",
  "You're doing amazing, my biology girl 🧬💕",
  "One kiss on the forehead coming up... 💋",
];

export default function MoodCheck() {
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { emoji: '🥰', label: 'Happy', color: 'from-yellow-100 to-pink-200' },
    { emoji: '😴', label: 'Sleepy', color: 'from-indigo-100 to-purple-200' },
    { emoji: '😢', label: 'Sad', color: 'from-blue-100 to-cyan-200' },
    { emoji: '🤒', label: 'Sick', color: 'from-green-100 to-emerald-200' },
    { emoji: '😤', label: 'Stressed', color: 'from-red-100 to-orange-200' },
    { emoji: '🥐', label: 'Hungry', color: 'from-amber-100 to-yellow-200' },
    { emoji: '😍', label: 'In love', color: 'from-pink-100 to-rose-200' },
    { emoji: '🧠', label: 'Studying', color: 'from-violet-100 to-indigo-200' },
  ];

  const handleMood = (label: string) => {
    setMood(label);
  };

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        🌸 How is Sara Today? 🌸
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Tell Zana how you're feeling 💕
      </p>

      <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-4">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => handleMood(m.label)}
            className={`hover-grow rounded-2xl bg-gradient-to-br ${m.color} p-3 text-center shadow-md transition-all ${
              mood === m.label ? "ring-4 ring-rose-400" : ""
            }`}
          >
            <div className="text-4xl">{m.emoji}</div>
            <div className="mt-1 text-xs font-bold text-pink-700">{m.label}</div>
          </button>
        ))}
      </div>

      {mood && (
        <div className="mt-6 rounded-2xl bg-white/80 p-5 shadow-inner">
          <p className="text-center text-lg font-semibold text-pink-700">
            You picked: <span className="text-2xl">{mood}</span>
          </p>
          <div className="mt-3 rounded-xl bg-gradient-to-r from-pink-50 to-rose-100 p-4 text-pink-700">
            <p className="text-lg font-semibold">💖 Zana says:</p>
            <p className="script-font mt-1 text-xl text-rose-600">
              {ZANA_RESPONSES[Math.floor(Math.random() * ZANA_RESPONSES.length)]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
