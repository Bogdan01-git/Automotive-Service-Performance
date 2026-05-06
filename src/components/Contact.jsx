import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

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
          <div className="lg:pl-12 flex flex-col gap-8">
            <div className="rounded-xl overflow-hidden h-48 sm:h-64 shadow-xl border border-surfaceAcc relative group">
              <img src="/5.webp" alt="Dima Automotive Shop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="glass-panel p-8 rounded-xl flex-grow">
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

                {/* Social Media Links */}
                <div className="flex items-start pt-6 mt-4 border-t border-surfaceAcc">
                  <div className="w-full">
                    <h5 className="font-semibold text-textMain text-lg mb-4">Follow Us</h5>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/profile.php?id=61578954881734" target="_blank" rel="noopener noreferrer" className="bg-surface border border-surfaceAcc w-12 h-12 flex items-center justify-center rounded-full text-textMuted hover:text-[#ff3333] hover:border-[#ff3333] transition-all duration-300">
                        <FacebookIcon className="w-5 h-5" />
                      </a>
                      <a href="https://www.instagram.com/dimaautomotivellc" target="_blank" rel="noopener noreferrer" className="bg-surface border border-surfaceAcc w-12 h-12 flex items-center justify-center rounded-full text-textMuted hover:text-[#ff3333] hover:border-[#ff3333] transition-all duration-300">
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                    </div>
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

        <div className="mt-20 rounded-2xl overflow-hidden shadow-2xl border border-surfaceAcc relative group h-[300px] sm:h-[450px]">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <source src="/4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
