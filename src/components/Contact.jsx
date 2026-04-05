import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    // Setting required config for FormSubmit
    formData.append("_subject", "New Service Request - Dima Automotive");
    formData.append("_captcha", "false");
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/lipovskyidmytro@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-surfaceAcc">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div>
            <h2 className="text-4xl text-primary font-serif font-bold mb-4 uppercase tracking-wider text-sm">Schedule Service</h2>
            <h3 className="text-4xl font-bold text-textMain mb-6">Book Your Diagnosis. <br/> Get Honest Answers.</h3>
            <p className="text-textMuted mb-10 text-lg">
              No hidden fees, no unnecessary parts. Fill out the form, and we'll contact you within 2 business hours to schedule a detailed inspection or performance consultation.
            </p>
            
            {status === 'success' ? (
              <div className="bg-surface/50 border border-green-500/30 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-textMain mb-2">Request Received!</h4>
                <p className="text-textMuted text-lg">
                  Thank you for reaching out to Dima Automotive. We will give you a call or email shortly to confirm your appointment.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-primary font-semibold hover:text-white transition-colors">
                  Submit another request
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-textMain mb-2">First Name</label>
                  <input type="text" name="First_Name" required className="w-full bg-surface border border-surfaceAcc rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMain mb-2">Last Name</label>
                  <input type="text" name="Last_Name" required className="w-full bg-surface border border-surfaceAcc rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-textMain mb-2">Vehicle (Year, Make, Model)</label>
                  <input type="text" name="Vehicle" required className="w-full bg-surface border border-surfaceAcc rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 2019 Audi S4" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMain mb-2">Phone Number</label>
                  <input type="tel" name="Phone" required className="w-full bg-surface border border-surfaceAcc rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="(828) 000-0000" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-textMain mb-2">How can we help? (Symptoms or desired upgrades)</label>
                <textarea name="Message" required rows="4" className="w-full bg-surface border border-surfaceAcc rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="Please describe the issue or upgrade you are looking for..."></textarea>
              </div>
              
              {status === 'error' && (
                <div className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-md border border-red-500/20">
                  Oops! Something went wrong. Please try calling us instead.
                </div>
              )}
              
              <button disabled={status === 'loading'} type="submit" className="w-full relative flex items-center justify-center bg-primary hover:bg-[#c92a38] disabled:bg-surfaceAcc disabled:text-textMuted disabled:cursor-not-allowed text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                {status === 'loading' ? (
                  <span className="flex items-center"><Loader2 className="animate-spin w-5 h-5 mr-3" /> Sending...</span>
                ) : (
                  "Request Appointment"
                )}
              </button>
              
              <div className="flex items-start mt-6 text-textMuted text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <p>By submitting this form, you agree to our transparent pricing policy. We never begin work without your explicit written approval.</p>
              </div>
            </form>
            )}
          </div>
          
          {/* Contact Details & Info */}
          <div className="lg:pl-12">
            <div className="glass-panel p-8 rounded-xl h-full">
              <h4 className="text-2xl font-bold text-textMain mb-8 border-b border-surfaceAcc pb-4">Contact Information</h4>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-textMain text-lg mb-1">Call Us</h5>
                    <a href="tel:8287828487" className="text-textMuted text-lg hover:text-primary transition-colors">828-782-8487</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-textMain text-lg mb-1">Email Us</h5>
                    <a href="mailto:lipovskyidmytro@gmail.com" className="text-textMuted text-lg hover:text-primary transition-colors">lipovskyidmytro@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-textMain text-lg mb-1">Opening Hours</h5>
                    <p className="text-textMuted text-lg">Mon - Fri: 10:00 am - 6:00 pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-textMain text-lg mb-1">Location</h5>
                    <a href="https://maps.app.goo.gl/F9a7G3Hyv7t41tjb8?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-textMuted text-lg hover:text-primary transition-colors block">
                      2379 Hendersonville Rd<br/>Arden, NC 28704
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-surfaceAcc">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-primary mr-3" />
                  <h5 className="font-bold text-textMain">Over 5 Years Experience</h5>
                </div>
                <p className="text-textMuted text-sm">
                  Backed by proven skill and knowledge. We sell only quality brands and guarantee our workmanship to protect your investment.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
