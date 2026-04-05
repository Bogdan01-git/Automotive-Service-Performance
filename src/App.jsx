import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-background text-textMain min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      
      {/* Small Simple Footer */}
      <footer className="bg-[#050505] py-8 text-center border-t border-surfaceAcc text-textMuted text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Dima Automotive. All Rights Reserved.</p>
          <p className="mt-2 text-xs">Expert European Auto Service in Arden, NC</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
