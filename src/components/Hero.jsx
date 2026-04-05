import React from 'react';
import { Phone, Check, Star, Wrench, Zap, Flag } from 'lucide-react';

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
          <img src="/logo.png" alt="Dima Automotive LLC" className="h-16 md:h-20 w-auto max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105" style={{ mixBlendMode: 'screen' }} />
        </div>

        {/* Links */}
        <div className="flex space-x-8 text-xs font-semibold tracking-widest text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
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
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'sans-serif', fontWeight: 900 }}>
            DIMA
            <br />
            AUTOMOTIVE
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Performance Auto Repair & Custom Builds
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-lg">
            Dealership Quality Repairs Without Dealership Prices
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
             <a href="tel:8287828487" className="bg-transparent border border-[#ff3333] text-white px-8 py-3 rounded-sm font-bold text-sm tracking-widest hover:bg-[#ff3333] transition-all duration-300 flex items-center shadow-[0_0_15px_rgba(255,51,51,0.3)]">
               CALL NOW - SAME DAY SERVICE
             </a>
             <a href="tel:8287828487" className="flex items-center text-white font-bold text-lg hover:text-[#ff3333] transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                (828) 782-8487
             </a>
          </div>
          
          {/* Checkmarks */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-300 mb-10 max-w-lg">
            <div className="flex items-center"><Check className="w-4 h-4 text-yellow-500 mr-2" /> 5.0 Customer Rating</div>
            <div className="flex items-center"><Check className="w-4 h-4 text-white mr-2" /> Certified Technicians</div>
            <div className="flex items-center"><Check className="w-4 h-4 text-white mr-2" /> Performance Specialists</div>
            <div className="flex items-center"><Check className="w-4 h-4 text-white mr-2" /> Fast Turnaround</div>
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
                   <h3 className="text-white font-bold tracking-widest text-sm mb-3">MECHANICAL<br/>REPAIRS</h3>
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
                   <h3 className="text-white font-bold tracking-widest text-sm mb-3">PERFORMANCE<br/>UPGRADES</h3>
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
                   <h3 className="text-white font-bold tracking-widest text-sm mb-3">ENGINE &<br/>TRANSMISSION</h3>
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
