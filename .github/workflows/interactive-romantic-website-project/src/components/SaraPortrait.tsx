import { useState } from 'react';

export default function SaraPortrait() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="glass mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl">
      <h3 className="script-font text-center text-4xl font-bold gradient-text">
        💁‍♀️ My Beautiful Sara
      </h3>
      <p className="mt-2 text-center text-pink-600">
        Click around for surprises! 💕
      </p>

      <div className="mt-6 flex justify-center">
        <svg viewBox="0 0 300 400" className="h-96 w-auto">
          {/* Curly hair (background) */}
          {Array.from({ length: 18 }).map((_, i) => {
            const angle = (i / 18) * Math.PI * 2;
            const cx = 150 + Math.cos(angle) * 95;
            const cy = 110 + Math.sin(angle) * 95;
            return (
              <circle
                key={`curl-${i}`}
                cx={cx}
                cy={cy}
                r="22"
                fill="none"
                stroke="#3d2817"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.85"
              />
            );
          })}

          {/* Face */}
          <ellipse cx="150" cy="180" rx="70" ry="85" fill="#fde2c8" />

          {/* Cheeks */}
          <circle cx="115" cy="200" r="14" fill="#ffb3c6" opacity="0.7" />
          <circle cx="185" cy="200" r="14" fill="#ffb3c6" opacity="0.7" />

          {/* Eyes */}
          <g className="cursor-pointer" onClick={() => setShowMessage(true)}>
            <ellipse cx="125" cy="170" rx="8" ry="10" fill="#3d2817" />
            <circle cx="127" cy="167" r="3" fill="white" />
            <ellipse cx="175" cy="170" rx="8" ry="10" fill="#3d2817" />
            <circle cx="177" cy="167" r="3" fill="white" />
            {/* Eyelashes */}
            <path d="M115 162 Q120 158 125 162" stroke="#3d2817" strokeWidth="2" fill="none" />
            <path d="M165 162 Q170 158 175 162" stroke="#3d2817" strokeWidth="2" fill="none" />
          </g>

          {/* Eyebrows */}
          <path d="M110 152 Q120 148 132 152" stroke="#3d2817" strokeWidth="3" fill="none" />
          <path d="M168 152 Q180 148 190 152" stroke="#3d2817" strokeWidth="3" fill="none" />

          {/* The cute cut/mole */}
          <g
            className="cursor-pointer transition-transform hover:scale-150"
            onClick={() => alert("There's that cute little cut I love so much! 🥰💕")}
          >
            <circle cx="142" cy="200" r="3" fill="#3d2817" />
            <title>Sara's cute cut 💕</title>
          </g>

          {/* Smile */}
          <path
            d="M125 220 Q150 245 175 220"
            stroke="#ff4d8d"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Coffee steam coming from her head = she loves coffee */}
          <g opacity="0.7">
            <path d="M120 80 Q115 70 120 60 Q125 50 120 40" stroke="#a0826d" strokeWidth="2" fill="none" />
            <path d="M180 80 Q185 70 180 60 Q175 50 180 40" stroke="#a0826d" strokeWidth="2" fill="none" />
          </g>

          {/* Neck */}
          <rect x="135" y="260" width="30" height="30" fill="#fde2c8" />

          {/* Body/Shirt */}
          <path d="M90 290 L210 290 L230 400 L70 400 Z" fill="#ff6b9d" />
          <text x="150" y="345" textAnchor="middle" fontSize="30" fill="white">
            ❤️
          </text>

          {/* Coffee cup */}
          <g className="cursor-pointer transition-transform hover:scale-110" transform="translate(20, 320)">
            <rect x="0" y="20" width="50" height="60" rx="4" fill="#fff" stroke="#3d2817" strokeWidth="2" />
            <ellipse cx="25" cy="20" rx="25" ry="6" fill="#6b4423" />
            <path d="M50 35 Q70 35 70 50 Q70 65 50 65" fill="none" stroke="#3d2817" strokeWidth="2" />
            <text x="25" y="60" textAnchor="middle" fontSize="20" fill="#3d2817">☕</text>
            {/* Steam */}
            <path d="M15 10 Q10 0 15 -10" stroke="#a0826d" strokeWidth="1.5" fill="none" />
            <path d="M35 10 Q40 0 35 -10" stroke="#a0826d" strokeWidth="1.5" fill="none" />
          </g>

          {/* Croissant */}
          <g className="cursor-pointer transition-transform hover:scale-110" transform="translate(225, 340) rotate(-20)">
            <path d="M0 30 Q15 10 30 30 Q45 10 60 30 Q45 50 30 30 Q15 50 0 30" fill="#d4a574" stroke="#8b4513" strokeWidth="2" />
            <text x="30" y="35" textAnchor="middle" fontSize="16">🥐</text>
          </g>
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
          👀 Click the eyes!
        </span>
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
          ✨ Click the cut on her cheek
        </span>
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
          ☕ Coffee & 🥐 croissant
        </span>
      </div>

      {showMessage && (
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 p-4 text-center text-pink-700">
          <p className="script-font text-2xl">
            Those beautiful eyes — I get lost in them every day 💕
          </p>
        </div>
      )}
    </div>
  );
}
