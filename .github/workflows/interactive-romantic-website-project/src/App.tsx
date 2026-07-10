import { useEffect, useState } from 'react';
import HeartRain from './components/HeartRain';
import Hero from './components/Hero';
import LoveQuestion from './components/LoveQuestion';
import LoveLetter from './components/LoveLetter';
import ReasonsList from './components/ReasonsList';
import HugCounter from './components/HugCounter';
import LoveQuiz from './components/LoveQuiz';
import WouldYouRather from './components/WouldYouRather';
import HeartCatcher from './components/HeartCatcher';
import MemoryGame from './components/MemoryGame';
import WhackABad from './components/WhackABad';
import CarePackage from './components/CarePackage';
import Countdown from './components/Countdown';
import FortuneCookie from './components/FortuneCookie';
import Confetti from './components/Confetti';
import Ender from './components/Ender';
import SaraPortrait from './components/SaraPortrait';
import ILoveYouCount from './components/ILoveYouCount';
import MoodCheck from './components/MoodCheck';
import MissingMeter from './components/MissingMeter';

export default function App() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    // Listen for the custom event so the LoveQuestion can trigger confetti
    const handler = () => {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 8000);
    };
    window.addEventListener('sara-said-yes', handler);
    return () => window.removeEventListener('sara-said-yes', handler);
  }, []);

  return (
    <div className="bg-romantic relative min-h-screen w-full">
      <HeartRain count={25} active={true} />
      <Confetti active={confetti} count={120} />

      <main className="relative z-10 mx-auto max-w-5xl px-4">
        <Hero />

        <section className="py-10">
          <SaraPortrait />
        </section>

        <section className="py-10">
          <MoodCheck />
        </section>

        <section className="py-10">
          <LoveQuestion />
        </section>

        <section className="py-10">
          <Countdown />
        </section>

        <section className="py-10">
          <LoveLetter />
        </section>

        <section className="py-10">
          <HugCounter />
        </section>

        <section className="py-10">
          <ILoveYouCount />
        </section>

        <section className="py-10">
          <ReasonsList />
        </section>

        <section className="py-10">
          <CarePackage />
        </section>

        <section className="py-10">
          <FortuneCookie />
        </section>

        <section className="py-10">
          <LoveQuiz />
        </section>

        <section className="py-10">
          <WouldYouRather />
        </section>

        <section className="py-10">
          <HeartCatcher />
        </section>

        <section className="py-10">
          <MemoryGame />
        </section>

        <section className="py-10">
          <WhackABad />
        </section>

        <Ender />
      </main>

      <MissingMeter />

      <footer className="relative z-10 px-4 pb-10 pt-6 text-center text-pink-600">
        <p className="script-font text-xl">
          Made with 💖 by Zana, for his Sara
        </p>
        <p className="mt-1 text-sm text-pink-400">
          every pixel = a piece of his heart · 14/9/2003
        </p>
      </footer>
    </div>
  );
}
