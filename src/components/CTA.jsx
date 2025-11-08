import { Apple, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 opacity-90" />
          <div className="relative p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Experience the future of voice</h3>
              <p className="mt-3 text-white/90 max-w-xl">Be the first to try Company Ai. Optimized for iPhone and iPad, crafted with privacy and speed at the core.</p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-black/90 text-white px-6 py-3 hover:bg-black transition shadow">
                <Apple className="size-5" />
                Download on the App Store
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/20 text-white px-6 py-3 hover:bg-white/30 transition ring-1 ring-white/40">
                Learn more
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
