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
