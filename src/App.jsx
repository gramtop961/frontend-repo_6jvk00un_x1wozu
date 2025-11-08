import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-300">
      <p>© {new Date().getFullYear()} Company Ai. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-fuchsia-300/60 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
