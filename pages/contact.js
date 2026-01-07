import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white p-12 font-serif text-indigo-900">
      <Link href="/" className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">← Home</Link>
      <div className="max-w-2xl mx-auto mt-20 border-t-8 border-indigo-900 pt-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tighter italic">Connect with the Project</h1>
        <p className="text-stone-500 mb-10 italic">"Knowledge is the only wealth that grows when shared."</p>
        <div className="space-y-4 font-bold uppercase tracking-widest text-sm">
          <p className="hover:text-orange-500 cursor-pointer transition">Github: /SaraswatiAI</p>
          <p className="hover:text-orange-500 cursor-pointer transition">Email: dev@saraswatiai.ved</p>
          <p className="hover:text-orange-500 cursor-pointer transition">Twitter: @SaraswatiAI</p>
        </div>
      </div>
    </div>
  );
}