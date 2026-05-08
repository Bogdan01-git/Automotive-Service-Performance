import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePageTemplate from './pages/ServicePageTemplate';

function App() {
  return (
    <div className="font-sans bg-background text-textMain min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServicePageTemplate />} />
        </Routes>
      </div>
      {/* Google Maps Location */}
      <div className="bg-background pt-12 pb-8 border-t border-surfaceAcc">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-textMain mb-2">Find Us Here</h3>
            <p className="text-textMuted">2379 Hendersonville Rd, Arden, NC 28704</p>
          </div>
          <div className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-surfaceAcc">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.825656114849!2d-82.5186063!3d35.4831627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f518aeb5db57%3A0xc3b83b3e8cbb624!2s2379%20Hendersonville%20Rd%2C%20Arden%2C%20NC%2028704!5e0!3m2!1sen!2sus!4v1715103400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(105%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dima Automotive Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Footer with SEO Tags */}
      <footer className="bg-[#050505] py-8 text-center border-t border-surfaceAcc text-textMuted text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Dima Automotive. All Rights Reserved.</p>
          <p className="mt-2 text-xs">Expert European Auto Service in Arden, NC</p>
          
          <div className="mt-8 pt-6 border-t border-surfaceAcc/30 text-[10px] text-surfaceAcc flex flex-wrap justify-center items-center gap-x-2 gap-y-2 max-w-5xl mx-auto leading-relaxed uppercase tracking-wider">
            <span>bmw mechanic near me</span> • <span>advance autos near me</span> • <span>auto body shop near me</span> • <span>auto parts near me</span> • <span>body shops near me</span> • <span>car inspection near me</span> • <span>car inspection near me near me</span> • <span>car paint shop near me</span> • <span>discount tire near me</span> • <span>hendersonville body shop</span> • <span>jasper automotive reviews</span> • <span>machine shop near me</span> • <span>nc dmv vehicle inspection</span> • <span>top rated car paint shop near me</span> • <span>transmission repair near me</span> • <span>triple aaa service center near me</span> • <span>warrens automotive</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
