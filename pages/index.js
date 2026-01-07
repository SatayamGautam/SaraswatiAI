import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [dailyVerse, setDailyVerse] = useState({ text: '', ref: '' });

  const verses = [
    { text: "सत्यमेव जयते नानृतम्।", ref: "Mundaka Upanishad 3.1.6" },
    { text: "योग: कर्मसु कौशलम्।", ref: "Bhagavad Gita 2.50" }
  ];

  useEffect(() => {
    const day = new Date().getDate();
    setDailyVerse(verses[day % verses.length]);
    
    // Stop audio if the user leaves the page
    return () => window.speechSynthesis.cancel();
  }, []);

  const handleSeek = async (query = input) => {
    if (!query) return;
    setLoading(true);
    setAnswer("Consulting the digital scrolls...");
    try {
      const res = await fetch('/api/wisdom', {
        method: 'POST',
        body: JSON.stringify({ prompt: query }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setAnswer(data.text);
    } catch (err) {
      setAnswer("Connection lost. Please try again.");
    }
    setLoading(false);
  };

  // AUDIO CONTROLS
  const speakWisdom = () => {
    window.speechSynthesis.cancel(); // Clear existing queue first
    const u = new SpeechSynthesisUtterance(answer);
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  };

  const stopWisdom = () => {
    window.speechSynthesis.cancel(); // Immediately kills the sound
  };

  return (
    <div className="min-h-screen font-serif text-stone-800 relative overflow-x-hidden">
      {/* VEDIC MOVING BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#FCF9F2] animate-pulse-slow">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#FFD700,transparent_50%)] animate-slow-drift"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200 px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-900">SARASWATI<span className="text-orange-500">AI</span></Link>
          <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-black text-stone-400">
            <Link href="/vision" className="hover:text-indigo-900 transition">Vision</Link>
            <Link href="/goals" className="hover:text-indigo-900 transition">Goals</Link>
            <Link href="/target" className="hover:text-indigo-900 transition">Target</Link>
            <Link href="/contact" className="hover:text-indigo-900 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-48 pb-20 px-4 max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 inline-block p-6 bg-white/80 rounded-2xl border border-orange-100 shadow-sm backdrop-blur-sm">
          <p className="text-indigo-900 font-bold italic text-lg">{dailyVerse.text}</p>
          <p className="text-stone-400 text-[10px] mt-2">— {dailyVerse.ref}</p>
        </div>

        <h2 className="text-6xl md:text-8xl font-bold text-indigo-900 mb-12 leading-tight">Seek The <span className="italic text-stone-300 font-light underline decoration-orange-200 decoration-8 underline-offset-8">Eternal.</span></h2>

        <div className="max-w-2xl mx-auto relative shadow-2xl rounded-full overflow-hidden border-8 border-white bg-white">
          <input className="w-full p-8 outline-none text-xl pr-40 bg-transparent" placeholder="Ask your Vedic question..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSeek()} />
          <button onClick={() => handleSeek()} className="absolute right-3 top-3 bg-indigo-900 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-600 transition">
            {loading ? '...' : 'SEEK'}
          </button>
        </div>

        {answer && (
          <div className="mt-16 p-12 bg-white/90 backdrop-blur-lg rounded-[3rem] shadow-sm text-left border border-stone-100 relative group animate-in fade-in slide-in-from-bottom-5">
            <div className="absolute -top-4 left-10 bg-orange-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Vedic Insight</div>
            <p className="text-stone-700 text-lg leading-loose italic whitespace-pre-wrap">{answer}</p>
            <div className="mt-8 flex gap-6">
              <button onClick={speakWisdom} className="text-[10px] font-bold text-orange-600 border-b border-orange-600 uppercase tracking-widest">Recite</button>
              <button onClick={stopWisdom} className="text-[10px] font-bold text-red-600 border-b border-red-600 uppercase tracking-widest">Stop Audio</button>
              <button onClick={() => {navigator.clipboard.writeText(answer); alert("Saved!");}} className="text-[10px] font-bold text-indigo-900 border-b border-indigo-900 uppercase tracking-widest">Copy</button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 text-center text-stone-300 text-[10px] uppercase tracking-[1em]">
        © 2026 SaraswatiAI | India
      </footer>

      <style jsx global>{`
        @keyframes drift {
          0% { transform: translate(0,0); }
          50% { transform: translate(5%, 5%); }
          100% { transform: translate(0,0); }
        }
        .animate-slow-drift { animation: drift 20s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 10s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { background-color: #FCF9F2; }
          50% { background-color: #FFF9E6; }
        }
      `}</style>
    </div>
  );
}