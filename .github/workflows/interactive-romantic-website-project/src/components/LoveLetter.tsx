import { useState } from 'react';

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💌 A Letter From Zana
      </h3>
      <p className="mt-2 text-center text-pink-600">
        (My heart, written just for you) 💕
      </p>

      {!opened ? (
        <div className="mt-6 flex flex-col items-center">
          <div className="drift text-8xl">💌</div>
          <button
            onClick={() => setOpened(true)}
            className="love-button mt-6 rounded-full px-8 py-3 text-xl font-bold text-white"
          >
            Open My Heart 💖
          </button>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 p-6 leading-relaxed text-pink-800 shadow-inner">
          <p className="script-font text-2xl text-rose-600">My dearest Sara,</p>
          <p className="mt-4">
            I built this little place on the internet for you, just so I could tell you — in a
            hundred different ways — how much I love you. Every pixel on this page is a piece of
            my heart.
          </p>
          <p className="mt-3">
            I love you more than words can hold. I miss you every second we are apart. I think
            about your curly hair, your sleepy eyes, your love for coffee, the way you crinkle
            your nose when you laugh. I think about you studying biology and getting a cold in
            summer and how you make everything brighter just by being you.
          </p>
          <p className="mt-3">
            I want to hug you forever. I want to kiss you a million times. I want every boring
            Tuesday and every ordinary Wednesday to be spent with you. I want to be the one who
            reminds you to take your vitamins, who hands you a hot coffee on a cold morning,
            who tucks a croissant in your bag "just because".
          </p>
          <p className="mt-3">
            You are my favorite person in this whole universe, Sara. My biology girl. My
            coffee-lover. My curly-haired queen. My love.
          </p>
          <p className="script-font mt-6 text-2xl text-rose-600">
            Forever and always yours,<br />
            Zana 💖
          </p>
        </div>
      )}
    </div>
  );
}
