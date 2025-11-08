import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/60 dark:bg-black/40 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 flex items-center justify-center text-white shadow-md">
            <Sparkles className="size-4" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">Company Ai</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
          <a href="#download" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Download</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-black transition">
            <Rocket className="size-4" />
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
