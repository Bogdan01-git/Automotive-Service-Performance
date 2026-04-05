import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Brad Henning",
      text: "I just had my performance exhaust installed on my new GM GMC SIERRA by Dima Automotive... Andrey and Dima are dedicated born naturals in the auto repair industry you name it!..from A to Z. My truck performs and sounds amazing!!!!!! I’ve been looking for someone I can trust for honest advice and fair pricing and 100% I have found my destination... Highly recommended.",
      rating: 5
    },
    {
      name: "Rose Matviichuk",
      text: "Really solid shop. They diagnosed the issue quickly and didn’t try to upsell me on anything I didn’t need. Price was fair and they explained everything in simple terms. Car’s been running great since. Definitely coming back.",
      rating: 5
    },
    {
      name: "Natallia H",
      text: "I recently had my car serviced for a lower control arm replacement, and I couldn’t be happier with the experience. The team was absolutely fantastic—super professional, efficient, and really knew their stuff. They got the job done quickly and kept me informed throughout the entire process. Plus, their pricing was very fair.",
      rating: 5
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-background p-8 rounded-xl border border-surface relative pt-12">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary p-3 rounded-full text-white shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-textMuted mb-8 italic text-sm leading-relaxed">
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
      </div>
    </section>
  );
}
