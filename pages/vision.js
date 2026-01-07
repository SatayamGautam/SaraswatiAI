import Link from 'next/link';

export default function Vision() {
  return (
    <div className="min-h-screen bg-[#FCF9F2] p-12 font-serif text-indigo-900">
      <Link href="/" className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">← Back to Wisdom</Link>
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl font-bold mb-8 tracking-tighter">Our Vision</h1>
        <p className="text-2xl text-stone-600 leading-relaxed italic border-l-8 border-orange-200 pl-8">
          "To bridge the gap between ancient Vedic scripts and modern artificial intelligence, 
          creating a digital sanctuary where technology serves Truth (Satya)."
        </p>
      </div>
    </div>
  );
}