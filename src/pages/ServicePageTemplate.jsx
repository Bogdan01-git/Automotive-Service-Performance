import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';

export default function ServicePageTemplate() {
  const { serviceId } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Here you can fetch or map the specific service content based on serviceId
  const serviceTitle = serviceId ? serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Expert Auto Service";

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-background text-textMain">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 text-sm font-bold tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO HOME
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{serviceTitle} in Arden & Asheville</h1>
        <p className="text-textMuted text-lg md:text-xl mb-12">
          Dealership-quality {serviceTitle.toLowerCase()} without the dealership price tag. Our certified technicians have the experience and state-of-the-art tools to get your vehicle back on the road safely.
        </p>
        
        <div className="bg-surfaceAcc border border-surface p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="pt-0.5">Factory-trained mechanics with decades of combined experience.</span></li>
            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="pt-0.5">Transparent pricing and clear communication before any work begins.</span></li>
            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="pt-0.5">Fast turnaround times to minimize your vehicle's downtime.</span></li>
          </ul>
        </div>
      </div>
      
      {/* Reusing Contact Component for CTA */}
      <Contact />
    </div>
  );
}
