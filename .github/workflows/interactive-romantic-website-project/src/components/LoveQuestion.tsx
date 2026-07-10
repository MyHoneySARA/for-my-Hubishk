import { useState, useRef } from 'react';

export default function LoveQuestion() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [saidYes, setSaidYes] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const noMessages = [
    "Nope! 💨",
    "Can't catch me! 🏃‍♀️",
    "Try again~ 😜",
    "You can't say no! 💕",
    "Hehe~ 💖",
    "Just click YES! 🥰",
    "I knew it! 💝",
    "YES is right there! 👉",
  ];

  const moveNoButton = () => {
    if (!containerRef.current || !btnRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const btnW = btnRef.current.offsetWidth;
    const btnH = btnRef.current.offsetHeight;
    const maxX = rect.width - btnW - 20;
    const maxY = rect.height - btnH - 20;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setPosition({ x: newX, y: newY });
    setNoAttempts((a) => a + 1);
    setYesScale((s) => Math.min(s + 0.15, 2.2));
  };

  const handleYes = () => {
    setSaidYes(true);
    window.dispatchEvent(new Event('sara-said-yes'));
  };

  if (saidYes) {
    return (
      <div className="glass mx-auto max-w-2xl rounded-3xl p-12 text-center shadow-2xl">
        <div className="text-8xl heartbeat">💖</div>
        <h2 className="script-font mt-6 text-5xl font-bold gradient-text">
          I knew it, my love!
        </h2>
        <p className="mt-4 text-2xl text-pink-700">
          You just made me the happiest person in the whole world 🥹💕
        </p>
        <p className="script-font mt-6 text-3xl text-pink-600">
          Forever yours, Zana ❤️
        </p>
        <div className="mt-6 flex justify-center gap-3 text-4xl">
          <span className="pulse-heart">💋</span>
          <span className="pulse-heart" style={{ animationDelay: '0.2s' }}>🌹</span>
          <span className="pulse-heart" style={{ animationDelay: '0.4s' }}>💍</span>
          <span className="pulse-heart" style={{ animationDelay: '0.6s' }}>🌹</span>
          <span className="pulse-heart" style={{ animationDelay: '0.8s' }}>💋</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="glass relative mx-auto flex h-80 max-w-2xl items-center justify-center rounded-3xl p-8 shadow-2xl"
    >
      <div className="text-center">
        <div className="mb-4 text-7xl heartbeat">💖</div>
        <h2 className="script-font mb-2 text-4xl font-bold text-pink-700 md:text-5xl">
          Sara, my love...
        </h2>
        <h3 className="mb-8 text-2xl font-semibold text-pink-600 md:text-3xl">
          Do you love your boyfriend Zana? 🥺
        </h3>

        <div className="relative flex items-center justify-center gap-6">
          <button
            onClick={handleYes}
            style={{ transform: `scale(${yesScale})` }}
            className="love-button rounded-full px-12 py-4 text-2xl font-bold text-white transition-transform"
          >
            YES! 💕
          </button>

          {noAttempts < 15 && (
            <button
              ref={btnRef}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              onTouchStart={moveNoButton}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className="btn-no rounded-full bg-gray-300 px-8 py-3 text-lg font-bold text-gray-600 shadow-lg"
            >
              {noMessages[Math.min(noAttempts, noMessages.length - 1)]}
            </button>
          )}
        </div>

        {noAttempts > 0 && noAttempts < 15 && (
          <p className="mt-8 text-pink-500 italic">
            (the "no" button seems to be running away from you 😏)
          </p>
        )}
        {noAttempts >= 15 && (
          <p className="mt-8 text-xl font-semibold text-pink-600">
            Okay okay, the "no" is gone now. Click YES, my love! 💖
          </p>
        )}
      </div>
    </div>
  );
}
