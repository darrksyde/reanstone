import React from 'react';
import { Section, Heading, RevealText, Button, Card, Badge } from '../components/UI';

const Careers: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <Section className="bg-brand-light min-h-[50vh] flex flex-col justify-center text-center">
        <RevealText>
           <Badge>Careers</Badge>
          <Heading size="xl" className="text-brand-dark">Grow With Reanstone</Heading>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">Join a team committed to excellence, innovation, and sustainable progress.</p>
        </RevealText>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <RevealText>
              <Heading size="md" className="mb-6">Life at Reanstone</Heading>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Working at Reanstone means being part of a supportive, skilled, and forward-thinking team. We invest in our people and create opportunities that help them grow professionally.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {["Strong technical culture", "Opportunities for development", "Inclusive and collaborative environment", "Work that makes a real impact"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border-l-4 border-brand-primary">
                     <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </RevealText>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold mb-6 text-brand-dark">Open Positions</h3>
            {/* Mock Job Listing */}
            <RevealText delay={0.1}>
              <Card className="hover:border-brand-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">Senior Subsea Engineer</h4>
                    <p className="text-gray-500 mt-1">Lagos, Nigeria • Full Time</p>
                  </div>
                  <span className="text-brand-primary font-bold text-sm bg-brand-primary/10 px-3 py-1 rounded-full">Engineering</span>
                </div>
                <Button variant="text" className="mt-4">View Details</Button>
              </Card>
            </RevealText>
            
            <RevealText delay={0.2}>
              <Card className="hover:border-brand-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">Logistics Coordinator</h4>
                    <p className="text-gray-500 mt-1">Port Harcourt, Nigeria • Contract</p>
                  </div>
                  <span className="text-brand-secondary font-bold text-sm bg-brand-secondary/10 px-3 py-1 rounded-full">Logistics</span>
                </div>
                <Button variant="text" className="mt-4">View Details</Button>
              </Card>
            </RevealText>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Heading size="md" className="!text-white">Apply Today</Heading>
          <p className="text-gray-400 mt-4">Don't see a role? Send us your CV and we'll keep it on file.</p>
        </div>
        <form className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-sm text-gray-800">
          <div className="grid grid-cols-2 gap-6">
            <div>
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
               <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
            </div>
            <div>
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
               <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
            </div>
          </div>
          <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm" />
          </div>
          <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Role</label>
              <select className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors text-gray-700 rounded-sm">
                <option>Select Role / General Application</option>
                <option>Engineering</option>
                <option>Logistics</option>
              </select>
          </div>
          <div className="py-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Upload CV</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-dark transition-all cursor-pointer bg-gray-50 p-2" />
          </div>
          <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-brand-primary outline-none transition-colors rounded-sm"></textarea>
          </div>
          <Button className="w-full justify-center">Submit Application</Button>
        </form>
      </Section>
    </div>
  );
};

export default Careers;