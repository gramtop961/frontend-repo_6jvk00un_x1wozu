import Spline from '@splinetool/react-spline';
import { Apple, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 dark:from-black/50 dark:via-black/40 dark:to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200 ring-1 ring-black/10">
            <Star className="size-3" /> Featured on the App Store soon
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Meet Company Ai
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400"> Your Voice, Supercharged.</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A futuristic AI voice agent that understands context, takes actions, and feels delightfully human. Designed for speed, privacy, and everyday productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 hover:bg-gray-900 transition shadow">
              <Apple className="size-5" />
              Download on the App Store
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white px-6 py-3 ring-1 ring-black/10 hover:bg-white transition">
              Learn more
            </a>
          </div>
        </div>

        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}
