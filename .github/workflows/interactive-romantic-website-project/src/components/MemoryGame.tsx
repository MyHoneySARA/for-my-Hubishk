import { useEffect, useState } from 'react';

const EMOJIS = ['💖', '☕', '🧬', '🥐', '🌀', '🌸', '✨', '💋'];

type Card = {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [picked, setPicked] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [started, setStarted] = useState(false);

  const init = () => {
    const doubled = [...EMOJIS, ...EMOJIS];
    const shuffled = shuffle(doubled).map((e, i) => ({
      id: i,
      emoji: e,
      flipped: false,
      matched: false,
    }));
    setCards(shuffled);
    setPicked([]);
    setMoves(0);
    setMatched(0);
    setStarted(true);
  };

  useEffect(() => {
    if (picked.length === 2) {
      const [a, b] = picked;
      setMoves((m) => m + 1);
      if (cards[a].emoji === cards[b].emoji) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === a || c.id === b ? { ...c, matched: true } : c
            )
          );
          setMatched((m) => m + 1);
          setPicked([]);
        }, 600);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === a || c.id === b ? { ...c, flipped: false } : c
            )
          );
          setPicked([]);
        }, 900);
      }
    }
  }, [picked, cards]);

  const flip = (id: number) => {
    if (picked.length >= 2) return;
    if (cards[id].flipped || cards[id].matched) return;
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, flipped: true } : c))
    );
    setPicked((p) => [...p, id]);
  };

  const won = matched === EMOJIS.length;

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-6 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💕 Memory of Us 💕
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Find all the matching pairs of our love! 💖
      </p>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/60 p-3 text-pink-700">
        <div className="text-lg font-semibold">🎯 Moves: {moves}</div>
        <div className="text-lg font-semibold">💕 Pairs: {matched}/{EMOJIS.length}</div>
      </div>

      {!started ? (
        <div className="mt-4 flex h-80 flex-col items-center justify-center rounded-2xl bg-white/60">
          <div className="text-7xl drift">💝</div>
          <p className="script-font mt-4 text-3xl text-pink-700">Match our love</p>
          <button
            onClick={init}
            className="love-button mt-4 rounded-full px-6 py-3 text-xl font-bold text-white"
          >
            Start Game 💖
          </button>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {cards.map((c) => (
            <button
              key={c.id}
              onClick={() => flip(c.id)}
              className={`flex aspect-square items-center justify-center rounded-2xl text-4xl font-bold transition-all duration-300 ${
                c.flipped || c.matched
                  ? "bg-white shadow-inner"
                  : "bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-lg hover:scale-105"
              } ${c.matched ? "ring-4 ring-pink-300" : ""}`}
            >
              {c.flipped || c.matched ? c.emoji : "💖"}
            </button>
          ))}
        </div>
      )}

      {won && (
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 p-4 text-center">
          <div className="text-5xl heartbeat">🎉</div>
          <p className="script-font mt-2 text-2xl font-bold text-pink-700">
            You matched them all in {moves} moves!
          </p>
          <p className="mt-1 text-pink-600">
            Just like we matched perfectly, my love 💖
          </p>
          <button
            onClick={init}
            className="love-button mt-3 rounded-full px-6 py-2 text-lg font-bold text-white"
          >
            Play Again 💕
          </button>
        </div>
      )}
    </div>
  );
}
