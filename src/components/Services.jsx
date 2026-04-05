import React from 'react';
import { Settings, Zap, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "COMPLETE MECHANICAL REPAIRS",
      icon: <Settings className="w-8 h-8 text-primary" />,
      desc: "Engine and transmission rebuilds, differential and subframe restoration, suspension overhauls, and full drivetrain service for sedans, SUVs, and trucks."
    },
    {
      title: "PERFORMANCE UPGRADES & CUSTOM BUILDS",
      icon: <Zap className="w-8 h-8 text-primary" />,
      desc: "Turbo installations, intake and exhaust systems, ECU/TCU tuning, custom parts fitting, and full performance builds for street or track use."
    },
    {
      title: "VEHICLE INSPECTIONS",
      icon: <Search className="w-8 h-8 text-primary" />,
      desc: "Pre-purchase and post-repair inspections, auction vehicle evaluations, and full mechanical and electronic condition reports."
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface z-10 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl text-primary font-serif font-bold mb-4 uppercase tracking-wider text-sm">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-textMain">Providing Complete Automotive Care</h3>
          <p className="text-textMuted text-lg">
            From full mechanical repairs and performance upgrades to advanced ADAS calibration and electrical programming. We deliver reliable, factory-level results for any vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-textMain mb-4">{service.title}</h4>
              <p className="text-textMuted leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
