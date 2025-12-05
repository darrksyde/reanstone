import React from 'react';
import { Section, Heading, RevealText, Card, Badge, Button } from '../components/UI';
import { ShieldCheck, Award, FileCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <Section className="bg-brand-light min-h-[50vh] flex items-center border-b border-gray-200">
        <div className="max-w-4xl">
          <RevealText>
            <Badge>Our Story</Badge>
            <Heading size="xl" className="mb-6">Committed to <span className="text-brand-primary">Excellence.</span></Heading>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">Reanstone stands for excellence, safety, and dependable engineering across Africa and beyond.</p>
          </RevealText>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <RevealText>
            <Heading size="md" className="mb-8">The Reanstone Story</Heading>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Reanstone was founded on a simple belief: Africa deserves world-class engineering solutions that match global standards. From our beginnings, we focused on delivering innovative, sustainable, and technically sound services that drive progress in the energy and industrial sectors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Over the years, our team has grown into a skilled mix of local and international professionals who bring deep experience and a shared commitment to quality. Our work spans engineering design, subsea services, pipeline maintenance, procurement, asset management, and sustainable waste solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through every project, we uphold the values of integrity, collaboration, and continuous improvement, ensuring that our clients receive exceptional results.
            </p>
          </RevealText>
           <div className="relative">
             <div className="absolute inset-0 bg-brand-secondary transform translate-x-4 translate-y-4 rounded-sm"></div>
             <img src="/assets/reanstone story.jpg" alt="Our Team" className="relative z-10 w-full h-full object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
           </div>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <div className="grid md:grid-cols-2 gap-12">
          <RevealText>
            <Card className="h-full border-t-4 border-t-brand-primary !bg-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-dark">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver exceptional engineering and energy services, develop local talent, and foster global partnerships that drive sustainable growth.
              </p>
            </Card>
          </RevealText>
          <RevealText delay={0.2}>
            <Card className="h-full border-t-4 border-t-brand-secondary !bg-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-dark">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a leading force in engineering excellence, known for innovation, reliability, and responsible impact across the regions we serve.
              </p>
            </Card>
          </RevealText>
        </div>
      </Section>

      {/* Leadership Section - New 
      <Section>
        <div className="mb-16 max-w-3xl">
          <RevealText>
            <Badge>Our Leadership</Badge>
            <Heading size="lg" className="mt-4 mb-6">Guided by Experience</Heading>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our leadership team is made up of seasoned professionals with global and local experience. They guide our strategic direction and ensure that every part of Reanstone reflects discipline, vision, and technical excellence.
            </p>
          </RevealText>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((item, index) => (
             <RevealText key={index} delay={index * 0.1}>
               <div className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-gray-200 relative">
                     <img src={`https://images.unsplash.com/photo-${index === 0 ? '1560250097-0b93528c311a' : index === 1 ? '1573496359142-b8d87734a5a2' : '1580489944761-15a19d654956'}?q=80&w=1000&auto=format&fit=crop`} alt="Leader" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                       <p className="text-white text-sm italic">"Dedicated to setting new benchmarks in African engineering."</p>
                     </div>
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark">Executive Name</h4>
                  <p className="text-brand-primary font-medium uppercase text-sm tracking-wider">Managing Director</p>
               </div>
             </RevealText>
           ))}
        </div>
      </Section> */}

      <Section>
        <div className="text-center mb-16">
          <Heading size="lg">Core Values</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Honesty", d: "We act with truth and transparency in all dealings." },
            { t: "Service", d: "We are dedicated to our clients and communities." },
            { t: "Excellence", d: "We pursue the highest standards of quality." },
            { t: "Teamwork", d: "We work together to achieve outstanding results." },
            { t: "Integrity", d: "We uphold strong ethical principles." },
            { t: "Innovation", d: "We embrace new ideas and technologies." },
          ].map((val, i) => (
             <RevealText key={i} delay={i * 0.1}>
               <div className="p-8 border border-gray-200 hover:border-brand-primary transition-colors bg-white hover:shadow-lg rounded-sm group">
                 <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary">{val.t}</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">{val.d}</p>
               </div>
             </RevealText>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <RevealText>
              <Badge>Standards</Badge>
              <Heading size="md" className="!text-white mt-4 mb-6">Certifications & Compliance</Heading>
              <p className="text-gray-400 text-lg mb-8">
                At Reanstone, compliance is a non-negotiable standard. We adhere to international engineering regulations, HSE requirements, and industry best practices to ensure safety and quality in every operation.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-brand-secondary shrink-0" />
                    <div>
                       <h5 className="font-bold text-lg">HSE Frameworks</h5>
                       <p className="text-sm text-gray-500">Rigorous health and safety protocols protecting our team and stakeholders.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <FileCheck className="w-8 h-8 text-brand-primary shrink-0" />
                    <div>
                       <h5 className="font-bold text-lg">Regulatory Compliance</h5>
                       <p className="text-sm text-gray-500">Full compliance with local and international regulatory bodies.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-green-500 shrink-0" />
                    <div>
                       <h5 className="font-bold text-lg">Quality Management</h5>
                       <p className="text-sm text-gray-500">ISO-aligned quality management systems ensuring consistent delivery.</p>
                    </div>
                 </div>
              </div>
           </RevealText>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 flex flex-col items-center text-center justify-center aspect-square">
                 <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">ISO</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-400">9001:2015</p>
              </div>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 flex flex-col items-center text-center justify-center aspect-square">
                 <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">ISO</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-400">14001:2015</p>
              </div>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 flex flex-col items-center text-center justify-center aspect-square col-span-2">
                 <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">HSE</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-400">Excellence Award</p>
              </div>
           </div>
        </div>
      </Section>

      
    </div>
  );
};

export default About;