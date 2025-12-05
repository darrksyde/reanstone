import React from 'react';
import { Section, Heading, RevealText, Button, Badge } from '../components/UI';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <Section className="min-h-screen flex flex-col justify-center bg-white">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <RevealText>
              <Badge>Get In Touch</Badge>
              <Heading size="lg" className="mb-8">Ready to start your project?</Heading>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">We are ready to support your project and answer your questions. Reach out to our team today.</p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-xl mb-1">Visit Us</h4>
                    <p className="text-gray-500">1-7 Muri Okunola Street,<br/>Victoria Island, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-xl mb-1">Call Us</h4>
                    <p className="text-gray-500">+234 803 503 8686</p>
                    <p className="text-gray-500">+234 815 372 7722</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-xl mb-1">Email Us</h4>
                    <p className="text-gray-500">info@reanstone.com</p>
                  </div>
                </div>
              </div>
            </RevealText>
          </div>

          <div className="bg-gray-50 p-10 md:p-12 rounded-lg border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-brand-dark">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
                </div>
                <div className="group">
                   <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
                </div>
              </div>
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Phone</label>
                <input type="tel" className="w-full bg-white border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
              </div>
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Company</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
              </div>
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm"></textarea>
              </div>
              <Button className="w-full mt-4 justify-center">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;