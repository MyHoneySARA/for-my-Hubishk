import { useState } from 'react';

export default function CarePackage() {
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(0);

  const careItems = [
    { emoji: '🧣', label: 'A warm scarf', message: 'So your neck never gets cold, my love' },
    { emoji: '☕', label: 'Hot coffee', message: 'Your favorite — to warm your hands and soul' },
    { emoji: '🌡️', label: 'Cozy blanket', message: 'To wrap you up while I am not there' },
    { emoji: '💊', label: 'Vitamin C', message: 'Because Sara catches cold every month, even in summer 🥺' },
    { emoji: '🍵', label: 'Honey & lemon tea', message: 'For when your throat feels scratchy' },
    { emoji: '🤗', label: 'My arms', message: 'The warmest place in the whole world' },
  ];

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💝 Zana's Care Package 💝
      </h3>
      <p className="mt-2 text-center text-pink-600">
        For my Sara who always gets cold (even in summer!) 🥺
      </p>

      {!opened ? (
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setOpened(true)}
            className="drift text-9xl transition-transform hover:scale-110"
          >
            🎁
          </button>
          <p className="mt-4 script-font text-2xl text-pink-700">Tap to open your gift 💖</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {careItems.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setStep(i)}
              className="hover-grow cursor-pointer rounded-2xl bg-white/80 p-4 text-center shadow-md"
            >
              <div className="text-5xl">{item.emoji}</div>
              <p className="mt-2 font-bold text-pink-700">{item.label}</p>
              {step === i && (
                <p className="mt-1 text-sm text-pink-500 italic">
                  {item.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {opened && (
        <p className="mt-6 text-center text-lg text-pink-600">
          💕 Whenever you feel cold, just remember: I am hugging you from far away 💕
        </p>
      )}
    </div>
  );
}
