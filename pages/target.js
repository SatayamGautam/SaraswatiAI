import Link from 'next/link';

export default function Target() {
  return (
    <div className="min-h-screen bg-[#FCF9F2] p-12 font-serif">
      <Link href="/" className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">← Home</Link>
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-xs font-black text-stone-400 uppercase tracking-[0.5em] mb-4 text-center">Audience</h2>
        <h1 className="text-5xl font-bold text-indigo-900 text-center mb-10 leading-tight">Built for the Serious Seeker.</h1>
        <p className="text-xl text-stone-600 leading-relaxed text-center">
          SaraswatiAI is designed for researchers, theology students, and those practicing 
          Jnana Yoga who require deep, non-commercial philosophical insights.
        </p>
      </div>
    </div>
  );
}