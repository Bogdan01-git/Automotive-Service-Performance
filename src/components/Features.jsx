import React from 'react';
import { Clock, ShieldCheck, Tag } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "ALWAYS OPEN FOR YOU",
      icon: <Clock className="w-8 h-8 text-primary mb-4" />,
      desc: "Whether it’s routine maintenance or an unexpected breakdown, our team is here whenever you need us—ready to keep you moving."
    },
    {
      title: "COMPETITIVE PRICES",
      icon: <Tag className="w-8 h-8 text-primary mb-4" />,
      desc: "Quality service at honest, competitive rates—giving you the best value without compromise."
    },
    {
      title: "PROFESSIONALLY QUALIFIED",
      icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
      desc: "Our certified technicians bring the expertise and precision your vehicle deserves, ensuring every repair is done right the first time."
    }
  ];

  return (
    <section id="about" className="py-24 bg-surfaceAcc relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-textMain uppercase">
            Offering you the best solution for your car.
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            With over 5 years of hands-on industry experience, we deliver dependable service backed by proven skill and knowledge. Selling only quality brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
             <div key={idx} className="bg-background rounded-xl p-10 border border-surface text-center flex flex-col items-center hover:border-primary/50 transition-colors">
                 {feature.icon}
                 <h4 className="text-xl font-bold text-textMain mb-4">{feature.title}</h4>
                 <p className="text-textMuted leading-relaxed">
                   {feature.desc}
                 </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
