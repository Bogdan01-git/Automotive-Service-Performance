import React from 'react';
import { Phone, Check, Star, Wrench, Zap, Flag, MapPin } from 'lucide-react';

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col font-sans">

      {/* Background Image - Garage with Dark Car */}
      <div
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-b border-white/10">
        {/* Logo Area */}
        <div className="flex items-center mb-4 sm:mb-0 group cursor-pointer mix-blend-screen">
          <img src="/logo.webp" alt="Dima Automotive LLC" className="h-16 md:h-20 w-auto max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105" style={{ mixBlendMode: 'screen' }} />
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-xs font-semibold tracking-widest text-gray-300 items-center">
          <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          <div className="flex space-x-3 pl-2 border-l border-white/20">
            <a href="https://www.facebook.com/profile.php?id=61578954881734" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3333] transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/dimaautomotivellc" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3333] transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Phone Contact */}
        <a href="tel:8287828487" className="hidden sm:flex items-center text-[#ff3333] font-bold tracking-wider mt-4 sm:mt-0 bg-[#ff3333]/10 px-4 py-2 rounded-full border border-[#ff3333]/30 hover:bg-[#ff3333]/20 transition-colors">
          <Phone className="w-4 h-4 mr-2" />
          <span>(828) 782-8487</span>
        </a>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow container mx-auto px-6 flex flex-col justify-center pt-16 pb-32">
        <div className="max-w-2xl text-left">

          <h1 className="text-[13vw] leading-[1.1] min-[500px]:text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight break-words" style={{ fontFamily: 'sans-serif', fontWeight: 900 }}>
            DIMA
            <br />
            AUTOMOTIVE
            <span className="sr-only"> - Auto Repair & Performance Shop in Arden & Asheville, NC</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Performance Auto Repair & Custom Builds
          </h2>

          <a href="https://maps.app.goo.gl/F9a7G3Hyv7t41tjb8?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-start sm:items-center text-white bg-white/5 border border-white/10 hover:border-[#ff3333]/50 hover:bg-white/10 px-4 py-2.5 rounded-full transition-all duration-300 mb-8 text-sm md:text-base font-semibold group backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)] w-fit">
            <MapPin className="w-5 h-5 mr-2 mt-0.5 sm:mt-0 text-[#ff3333] group-hover:scale-110 transition-transform shrink-0" />
            2379 Hendersonville Rd, Arden, NC 28704
          </a>

          <p className="text-gray-400 mb-8 max-w-lg">
            Dealership Quality Repairs Without Dealership Prices
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full">
            <a href="tel:8287828487" className="bg-transparent border border-[#ff3333] text-white px-4 sm:px-8 py-3 rounded-sm font-bold text-xs sm:text-sm tracking-widest hover:bg-[#ff3333] transition-all duration-300 flex justify-center items-center shadow-[0_0_15px_rgba(255,51,51,0.3)] w-full sm:w-auto text-center">
              CALL NOW - SAME DAY SERVICE
            </a>
            <a href="tel:8287828487" className="flex items-center justify-center text-white font-bold text-lg hover:text-[#ff3333] transition-colors w-full sm:w-auto mt-2 sm:mt-0">
              <Phone className="w-5 h-5 mr-2" />
              (828) 782-8487
            </a>
          </div>

          {/* Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-3 gap-x-2 text-sm text-gray-300 mb-10 max-w-lg">
            <div className="flex items-center"><Check className="w-5 h-5 sm:w-4 sm:h-4 text-yellow-500 mr-3 shrink-0" /> <span>5.0 Customer Rating</span></div>
            <div className="flex items-center"><Check className="w-5 h-5 sm:w-4 sm:h-4 text-white mr-3 shrink-0" /> <span>Certified Technicians</span></div>
            <div className="flex items-center"><Check className="w-5 h-5 sm:w-4 sm:h-4 text-white mr-3 shrink-0" /> <span>Performance Specialists</span></div>
            <div className="flex items-center"><Check className="w-5 h-5 sm:w-4 sm:h-4 text-white mr-3 shrink-0" /> <span>Fast Turnaround</span></div>
          </div>

          <div className="flex items-center text-sm font-semibold tracking-wider text-gray-300">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              ))}
            </div>
            Trusted by 100+ Car Owners
          </div>
        </div>
      </div>

      {/* Floating 3 Boxes */}
      <div className="relative z-20 container mx-auto px-6 -mt-16 sm:-mt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/20 pt-8" style={{ borderImage: "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent) 1" }}>

          {/* Box 1 */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded relative overflow-hidden group hover:bg-black/80 transition-all">
            <div className="flex items-start">
              <Wrench className="w-10 h-10 text-blue-300 font-light mr-4 stroke-[1.5]" />
              <div>
                <h3 className="text-white font-bold tracking-widest text-sm mb-3">MECHANICAL<br />REPAIRS</h3>
                <div className="text-gray-400 text-xs tracking-wide space-y-1">
                  <p>• Engine • Suspension</p>
                  <p>• Diagnostics • Maintenance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded relative overflow-hidden group hover:bg-black/80 transition-all">
            <div className="flex items-start">
              <Zap className="w-10 h-10 text-blue-300 font-light mr-4 stroke-[1.5]" />
              <div>
                <h3 className="text-white font-bold tracking-widest text-sm mb-3">PERFORMANCE<br />UPGRADES</h3>
                <div className="text-gray-400 text-xs tracking-wide space-y-1">
                  <p>• Turbo • ECU Tuning</p>
                  <p>• Custom Builds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded relative overflow-hidden group hover:bg-black/80 transition-all">
            <div className="flex items-start">
              <Flag className="w-10 h-10 text-blue-300 font-light mr-4 stroke-[1.5]" />
              <div>
                <h3 className="text-white font-bold tracking-widest text-sm mb-3">ENGINE &<br />TRANSMISSION</h3>
                <div className="text-gray-400 text-xs tracking-wide space-y-1">
                  <p>• Rebuilds • Swaps</p>
                  <p>• High Performance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center mt-6 items-center text-xs font-semibold tracking-wider text-gray-400">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
            ))}
          </div>
          Trusted by 100+ Car Owners
        </div>
      </div>
    </div>
  );
}
