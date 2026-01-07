import Link from 'next/link';

export default function Achievements() {
  return (
    <div className="min-h-screen bg-indigo-900 p-12 font-serif text-white">
      <Link href="/" className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">← Home</Link>
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-bold mb-16">2026 Milestones</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div><p className="text-5xl font-black text-orange-400">99%</p><p className="text-xs opacity-50 uppercase mt-2">Uptime</p></div>
          <div><p className="text-5xl font-black text-orange-400">1.5</p><p className="text-xs opacity-50 uppercase mt-2">Flash Engine</p></div>
          <div><p className="text-5xl font-black text-orange-400">Zero</p><p className="text-xs opacity-50 uppercase mt-2">Data Tracking</p></div>
        </div>
      </div>
    </div>
  );
}