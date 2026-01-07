export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
      <div className="text-2xl font-serif font-bold text-indigo-900 tracking-tighter">
        Saraswati<span className="text-orange-500">AI</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-stone-600">
        <a href="#vision" className="hover:text-indigo-900">Vision</a>
        <a href="#goals" className="hover:text-indigo-900">Goals</a>
        <a href="#chat" className="hover:text-indigo-900">Seek Wisdom</a>
        <a href="#contact" className="hover:text-indigo-900">Contact</a>
      </div>
    </nav>
  );
}