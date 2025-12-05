import React from 'react';
import { motion } from 'framer-motion';
import { Section, Heading, RevealText, Badge, Button, Card } from '../components/UI';
import { CheckCircle2, Settings, ShieldCheck, BarChart3, Users } from 'lucide-react';

const EPPM: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
           {/* Placeholder for Hero Image */}
           <div className="w-full h-full bg-gray-800 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10"></div>
             {/* Add image here later */}
             <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" alt="EPPM Hero" className="w-full h-full object-cover opacity-40" />
           </div>
        </motion.div>
        
        <div className="relative z-10 max-w-3xl">
          <RevealText>
            <Badge>EPPM Services</Badge>
            <Heading size="xl" className="!text-white mb-6">Engineering That Drives Performance</Heading>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We provide end-to-end engineering and project management solutions that deliver precision, safety, and operational excellence.
            </p>
          </RevealText>
        </div>
      </Section>

      {/* Overview */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealText>
            <Heading size="md" className="mb-6">Overview</Heading>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Reanstone, our EPPM services are built on deep technical knowledge and a disciplined project delivery approach. We support clients from concept to completion, ensuring efficiency, cost control, and seamless coordination at every stage.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our engineers use advanced design tools, global standards, and proven methodologies to execute complex projects with clarity and confidence.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
             <motion.div 
               className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg"
               whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
             >
               {/* Placeholder for Overview Image */}
               <img src="/assets/services_images/EPPM_overview.png" alt="Engineering Overview" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-brand-light">
        <RevealText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading size="lg" className="mb-4">Key Capabilities</Heading>
            <p className="text-gray-600">Comprehensive solutions for every phase of your project.</p>
          </div>
        </RevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Feasibility studies and conceptual design",
            "FEED and detailed engineering",
            "Structural and mechanical design",
            "Electrical and instrumentation engineering",
            "Project planning and scheduling",
            "Cost estimation and budgeting",
            "Engineering reviews and validation",
            "Risk assessment and mitigation",
            "Total project lifecycle management"
          ].map((item, i) => (
            <RevealText key={i} delay={i * 0.05}>
              <Card className="h-full bg-white hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 hover:border-brand-primary/30">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary"
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    <Settings size={20} />
                  </motion.div>
                  <h4 className="text-lg font-bold text-brand-dark">{item}</h4>
                </div>
              </Card>
            </RevealText>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
             <RevealText>
               <motion.div 
                 className="aspect-square bg-gray-100 rounded-sm overflow-hidden shadow-lg relative"
                 whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
               >
                 {/* Placeholder for How We Work Image */}
                 <img src="/assets/services_images/EPPM_how we work.png" alt="Team Collaboration" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
               </motion.div>
             </RevealText>
           </div>
           <div className="order-1 md:order-2">
             <RevealText delay={0.2}>
               <Heading size="md" className="mb-6">How We Work</Heading>
               <div className="space-y-6">
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500 group-hover:bg-brand-secondary group-hover:text-white">
                     <Users size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Strategic Partnership</h4>
                     <p className="text-gray-600">We work as a strategic partner, integrating engineering, procurement, and management into one unified process.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Quality & Safety</h4>
                     <p className="text-gray-600">Our teams ensure transparent coordination, strict quality control, safety-focused workflows, and timely delivery.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <BarChart3 size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Digital Alignment</h4>
                     <p className="text-gray-600">We use digital tools and real-time communication systems to keep every stakeholder aligned.</p>
                   </div>
                 </motion.div>
               </div>
             </RevealText>
           </div>
        </div>
      </Section>

      {/* Why Clients Choose Us */}
      <Section className="bg-brand-dark text-white">
        <div className="grid md:grid-cols-2 gap-12">
          <RevealText>
            <Heading size="lg" className="!text-white mb-6">Why Clients Choose Reanstone</Heading>
            <ul className="space-y-4">
              {[
                "Technical depth and multidisciplinary expertise",
                "Reliable execution from start to finish",
                "Reduced project risks through proactive planning",
                "Transparent collaboration and reporting",
                "Compliance with international industry standards"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3 text-lg text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                >
                  <CheckCircle2 className="text-brand-primary" /> {item}
                </motion.li>
              ))}
            </ul>
          </RevealText>
          <RevealText delay={0.2}>
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-secondary">Impact Statement</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
                "Every project is engineered to be efficient, safe, and future-ready."
              </p>
            </div>
          </RevealText>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-primary text-white text-center">
        <RevealText>
          <Heading size="lg" className="!text-white mb-8">Start Your Project With Reanstone</Heading>
          <Button to="/contact" variant="secondary" className="bg-white text-black hover:bg-brand-dark hover:text-white">Contact Us Now</Button>
        </RevealText>
      </Section>
    </div>
  );
};

export default EPPM;
