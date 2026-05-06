import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    { name: "Nadia Matviichuk", text: "Took my car here after getting a crazy quote somewhere else. They were honest, straightforward, and the price made way more sense. Work was done on time and everything feels good now. Glad I found this place.", rating: 5 },
    { name: "Alena Litvin", text: "This is an excellent service! The only place in Asheville that was able to solve my Subaru problem. The work was done with the highest quality — professionally and with great attention to detail. The owner is very polite and professional. I am very satisfied with the result and will only come here from now on. I highly recommend it to everyone!", rating: 5 },
    { name: "Daniela Martyniuk", text: "Amazing service! They kept me updated the whole time and did a perfect job fixing my car. Super smooth process from start to finish.", rating: 5 },
    { name: "MM Tile Installer", text: "I had a great experience with DIMA Automotive Shop! The team was very helpful, professional, and quickly diagnosed and fixed the issue with my car. The prices are very affordable and reasonable. They explained everything clearly and made sure I was happy with the work. Highly recommend for any car repairs!", rating: 5 },
    { name: "Cool Phill", text: "These guys did a great job on my car. You can tell they actually care about the work they do. Everything was done professionally and turned out exactly how I wanted. I’ll be back for sure.", rating: 5 },
    { name: "Annette Kanne", text: "Truly a great place. My car was fixed fast and the price was reasonable. Recommend👍", rating: 5 },
    { name: "Andrey", text: "Great job — very professional work and excellent attention to detail. Highly recommend! 👌", rating: 5 },
    { name: "Dima Momotok", text: "I had my car repaired there, which surprised me because everything was done very qualitatively and cheaply. I really liked it, I recommend it.", rating: 5 },
    { name: "Barbara Hudspeth", text: "The staff at Dima Diagnostics are knowledgeable, competent, professional, honest, and patient with questions. I am planning for another appointment next month for upcoming maintenance.", rating: 5 },
    { name: "DJ 1stClass", text: "Accurate and honest diagnostics, fair pricing and very good work. also ask a lot of questions they will educate on all topics", rating: 5 },
    { name: "joseph gorovoy", text: "Amazing people, great customer service, highly recommend to anyone looking for quality work", rating: 5 },
    { name: "Pavlo Heyko", text: "Very good service and very kind owner of the business, would highly recommend.", rating: 5 },
    { name: "Матвій Французов", text: "good service, high-quality repairs, I recommend it to everyone", rating: 5 },
    { name: "Sergey", text: "Truly a great place. My car was fixed fast, and the price was lower than what I was quoted elsewhere.", rating: 5 },
    { name: "Paul", text: "Really good experience. They fixed my car fast, and the price was better than at other places I checked", rating: 5 },
    { name: "Kate Harbin", text: "I have never been so impressed by an auto shop! This business is professional, efficient, and great to work with. They go out of their way to explain the repairs and price things fairly. Definitely check them out!", rating: 5 },
    { name: "Tolik Kuzminskii", text: "Great price, quality service. Highly recommend.", rating: 5 },
    { name: "FleetPro Truck Center", text: "Great knowledgeable guys.", rating: 5 },
    { name: "Ruvim K", text: "Professional shop and good service.", rating: 5 }
  ];

  const visibleTestimonials = testimonials; // We render all, but hide via CSS on desktop

  return (
    <section className="py-24 bg-surfaceAcc relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary font-serif font-bold mb-4 uppercase tracking-wider text-sm">Customer Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Trusted by 100+ Car Owners.</h3>
          <p className="text-textMuted text-lg max-w-2xl mx-auto flex items-center justify-center">
            <span className="font-bold text-white mr-2 text-xl">5.0</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current mr-1" />
            ))}
            <span className="ml-2">Overall Rating on Google Maps</span>
          </p>
        </div>

        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-surfaceAcc relative group max-w-4xl mx-auto h-[300px] sm:h-[400px]">
          <img src="/3.jpg" alt="Diagnostics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent group-hover:from-black/80 transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 z-10">
            <h4 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider uppercase" style={{ color: '#dfcca0' }}>
              Diagnostics
            </h4>
            <ul className="text-gray-300 font-bold text-sm sm:text-base md:text-lg space-y-2 tracking-wide uppercase">
              <li className="flex items-center"><span className="text-[#59849b] mr-2">•</span> Check Engine Light Reset</li>
              <li className="flex items-center"><span className="text-[#59849b] mr-2">•</span> Module Coding & Programming</li>
              <li className="flex items-center"><span className="text-[#59849b] mr-2">•</span> System Adaptations</li>
              <li className="flex items-center"><span className="text-[#59849b] mr-2">•</span> ABS</li>
              <li className="flex items-center"><span className="text-[#59849b] mr-2">•</span> Airbag</li>
            </ul>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 md:pb-8 md:grid md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {visibleTestimonials.map((review, idx) => (
            <div key={idx} className={`w-[85vw] sm:w-[350px] md:w-auto flex-shrink-0 snap-center bg-background p-8 rounded-xl border border-surface flex flex-col relative pt-12 animate-in fade-in zoom-in duration-300 ${!showAll && idx >= 6 ? 'md:hidden' : ''}`}>
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary p-3 rounded-full text-white shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-textMuted mb-8 italic text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              <div className="mt-auto border-t border-surface pt-4">
                <p className="font-bold text-textMain">{review.name}</p>
                <div className="flex items-center mt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4 mr-2" alt="Google" />
                  <span className="text-xs text-textMuted">Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <div className="md:hidden flex justify-center items-center text-textMuted text-xs mb-8 opacity-70">
          <span className="flex items-center gap-2 animate-pulse">
            ← Swipe to see more reviews →
          </span>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          {!showAll && (
            <button 
              onClick={() => setShowAll(true)}
              className="hidden md:flex items-center text-white bg-surface border border-surfaceAcc hover:border-primary px-6 py-3 rounded-md transition-all duration-300 font-semibold text-sm tracking-wider"
            >
              READ MORE REVIEWS <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          )}
          
          <a 
            href="https://maps.app.goo.gl/F9a7G3Hyv7t41tjb8?g_st=ic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-white transition-colors text-sm font-semibold tracking-wider mt-4"
          >
            VIEW ALL REVIEWS ON GOOGLE MAPS <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
