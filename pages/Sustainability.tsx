import React from 'react';
import { Section, Heading, RevealText, Badge, Card } from '../components/UI';
import { Leaf, Recycle, Wind, Users, Globe, LineChart, ShieldCheck, Zap, Handshake } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Sustainability" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <RevealText>
            <span className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4 block">Sustainability</span>
            <Heading size="xl" className="!text-white">Sustainability in Energy Services</Heading>
            <p className="text-2xl text-gray-300 mt-6 font-light leading-relaxed">
              At Reanstone, we are committed to championing sustainability within the energy sector. We recognize the critical importance of balancing energy production with environmental stewardship.
            </p>
          </RevealText>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <RevealText>
             <Heading size="md" className="mb-6">Our Commitment</Heading>
             <p className="text-gray-600 text-lg leading-relaxed">
               As a leading oil services provider, our comprehensive sustainability initiatives reflect our dedication to reducing our ecological footprint while meeting the world’s energy needs. Our approach is holistic, integrating advanced technology with community responsibility.
             </p>
          </RevealText>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealText>
             <Card className="h-full border-l-4 border-l-green-500 bg-brand-light">
                <div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                   <Zap className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Innovative Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                   We invest in and implement cutting-edge technologies that enhance operational efficiency and minimize environmental impact, such as advanced waste management systems and emissions reduction strategies.
                </p>
             </Card>
          </RevealText>
          
          <RevealText delay={0.1}>
             <Card className="h-full border-l-4 border-l-blue-500 bg-brand-light">
                <div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                   <Recycle className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Responsible Resource Management</h3>
                <p className="text-gray-600 leading-relaxed">
                   We prioritize sustainable sourcing and responsible management of materials, ensuring that our operations preserve the integrity of ecosystems and contribute to the circular economy.
                </p>
             </Card>
          </RevealText>

          <RevealText delay={0.2}>
             <Card className="h-full border-l-4 border-l-brand-secondary bg-brand-light">
                <div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                   <Users className="text-brand-secondary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Community Engagement</h3>
                <p className="text-gray-600 leading-relaxed">
                   We actively engage with local communities to promote sustainable development and support initiatives that foster environmental conservation and social responsibility.
                </p>
             </Card>
          </RevealText>

          <RevealText delay={0.3}>
             <Card className="h-full border-l-4 border-l-brand-primary bg-brand-light">
                <div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                   <LineChart className="text-brand-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                   Our commitment to sustainability drives us to regularly assess and refine our practices, aligning with international standards and best practices to ensure continuous improvement in our environmental performance.
                </p>
             </Card>
          </RevealText>
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealText>
               <Badge>Value Proposition</Badge>
               <Heading size="lg" className="!text-white mt-4 mb-8">Benefit to Clients</Heading>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our sustainability efforts are not just good for the planet; they drive tangible value for our clients through efficiency, safety, and reliability.
               </p>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Earth" className="rounded-sm opacity-80" />
            </RevealText>
            
            <div className="space-y-6">
               <RevealText delay={0.1}>
                  <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                           <Zap size={20} />
                        </div>
                        <h4 className="text-xl font-bold">Improved Project Efficiency</h4>
                     </div>
                     <p className="text-gray-400 text-sm pl-14">Our technical expertise and project management capabilities ensure projects are delivered on time and within budget.</p>
                  </div>
               </RevealText>

               <RevealText delay={0.2}>
                  <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                           <ShieldCheck size={20} />
                        </div>
                        <h4 className="text-xl font-bold">Enhanced Safety & Quality</h4>
                     </div>
                     <p className="text-gray-400 text-sm pl-14">We prioritize safety and quality, minimizing risks and ensuring compliance with industry standards.</p>
                  </div>
               </RevealText>

               <RevealText delay={0.3}>
                  <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                           <LineChart size={20} />
                        </div>
                        <h4 className="text-xl font-bold">Cost Savings</h4>
                     </div>
                     <p className="text-gray-400 text-sm pl-14">Our optimized project management and technical expertise reduce costs, improving bottom-line results.</p>
                  </div>
               </RevealText>

               <RevealText delay={0.4}>
                  <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                           <Handshake size={20} />
                        </div>
                        <h4 className="text-xl font-bold">Increased Transparency</h4>
                     </div>
                     <p className="text-gray-400 text-sm pl-14">Our communication and collaboration approach ensures stakeholders are informed and aligned throughout the project lifecycle.</p>
                  </div>
               </RevealText>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default Sustainability;