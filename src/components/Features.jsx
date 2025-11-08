import { Shield, Mic, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Natural voice interface',
    desc: 'Converse freely. Company Ai understands accents, context, and nuance.',
  },
  {
    icon: Zap,
    title: 'Actionable intelligence',
    desc: 'From reminders to reservations — it gets things done across your apps.',
  },
  {
    icon: Shield,
    title: 'Privacy-first by design',
    desc: 'On-device processing for what matters most. Your data stays yours.',
  },
  {
    icon: Clock,
    title: 'Real-time speed',
    desc: 'Ultra-low latency responses for a fluid, human-feeling experience.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Built for everyday flow</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A minimal, powerful assistant that feels like magic.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 ring-1 ring-black/10">
              <div className="size-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
