import Link from 'next/link';

export default function Goals() {
  return (
    <div className="min-h-screen bg-[#FCF9F2] p-12 font-serif">
      <Link href="/" className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">← Home</Link>
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl font-bold text-indigo-900 mb-12">Core Objectives</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-orange-500 mb-4 uppercase tracking-widest text-xs">Purity</h3>
            <p className="text-stone-600">Eliminating digital noise to provide direct, scriptural answers based on the Vedas and Upanishads.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-indigo-500 mb-4 uppercase tracking-widest text-xs">Accessibility</h3>
            <p className="text-stone-600">Making complex Sanskrit philosophical logic understandable for the global modern student.</p>
          </div>
        </div>
      </div>
    </div>
  );
}