export default function Ender() {
  return (
    <section className="relative px-4 py-20">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-10 text-center shadow-2xl">
        <div className="text-8xl heartbeat">💖</div>
        <h2 className="script-font mt-4 text-5xl font-bold gradient-text md:text-6xl">
          Sara, My Love
        </h2>
        <p className="script-font mt-4 text-3xl text-pink-700">I love you more than anything 💗</p>

        <div className="mt-6 flex justify-center gap-3 text-5xl">
          <span className="pulse-heart">💋</span>
          <span className="pulse-heart" style={{ animationDelay: '0.2s' }}>🤗</span>
          <span className="pulse-heart" style={{ animationDelay: '0.4s' }}>💝</span>
          <span className="pulse-heart" style={{ animationDelay: '0.6s' }}>🌹</span>
          <span className="pulse-heart" style={{ animationDelay: '0.8s' }}>💖</span>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-200 p-6 text-xl leading-relaxed text-pink-800 shadow-inner">
          <p>
            To my Sara, my curly-haired coffee-loving biology girl,
            <br />
            who catches a cold in summer and whose favorite treat is a warm croissant.
            <br />
            <br />
            <span className="script-font text-2xl text-rose-600">
              You are my favorite hello and my hardest goodbye.
            </span>
            <br />
            <br />
            I love you. I miss you. I choose you — today, tomorrow, and every day after.
          </p>
        </div>

        <p className="script-font mt-8 text-3xl text-rose-600">
          — Forever yours, Zana 💖
        </p>
      </div>
    </section>
  );
}
