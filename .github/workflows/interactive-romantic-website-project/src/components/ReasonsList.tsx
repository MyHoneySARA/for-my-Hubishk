const REASONS = [
  { emoji: '☕', text: "Your smile when you hold a warm cup of coffee" },
  { emoji: '🧬', text: "The way your eyes light up talking about biology" },
  { emoji: '🌀', text: "Your beautiful curly hair bouncing when you laugh" },
  { emoji: '🥐', text: "How happy croissants make you" },
  { emoji: '💋', text: "The taste of your sweet kisses" },
  { emoji: '🤗', text: "Your hugs that make everything okay" },
  { emoji: '😘', text: "Your sleepy good morning messages" },
  { emoji: '🧠', text: "How smart and curious you are about life" },
  { emoji: '🌸', text: "The way you care for everyone around you" },
  { emoji: '💖', text: "That you are simply, wonderfully, mine" },
  { emoji: '🌹', text: "Your voice — my favorite sound in the world" },
  { emoji: '🫶', text: "Every single moment we share together" },
];

export default function ReasonsList() {
  return (
    <div className="glass mx-auto max-w-4xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💖 Why I Love You, Sara 💖
      </h3>
      <p className="mt-2 text-center text-pink-600">
        (Only a few of the million reasons, my love) 💕
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <div
            key={i}
            className="hover-grow flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-md"
          >
            <div className="text-3xl wiggle" style={{ animationDelay: `${i * 0.1}s` }}>
              {r.emoji}
            </div>
            <p className="text-pink-700">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
