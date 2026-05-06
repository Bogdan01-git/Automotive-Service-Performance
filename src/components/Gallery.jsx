import React from 'react';

export default function Gallery() {
  const media = [
    { type: 'video', src: '/1.mp4' },
    { type: 'video', src: '/2.mp4' },
    { type: 'video', src: '/3.mp4' },
    { type: 'video', src: '/4.mp4' },
    { type: 'image', src: '/5.webp' }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] border-t border-surfaceAcc">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary font-serif font-bold mb-4 uppercase tracking-wider text-sm">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-textMain">Precision in Action.</h3>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            A glimpse into the daily operations at Dima Automotive. Dealership-level quality, honest service, and a passion for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((item, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl bg-surface border border-surfaceAcc group ${idx === 0 || idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="aspect-[4/3] w-full">
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt="Dima Automotive Work" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
