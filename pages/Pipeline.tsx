import React from 'react';
import { motion } from 'framer-motion';
import { Section, Heading, RevealText, Badge, Button, Card } from '../components/UI';
import { CheckCircle2, Zap, Gauge, Timer } from 'lucide-react';

const Pipeline: React.FC = () => {
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
           <div className="w-full h-full bg-gray-800 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10"></div>
             <img src="https://images.unsplash.com/photo-1526978696896-19349c25a507?q=80&w=1974&auto=format&fit=crop" alt="Pipeline Hero" className="w-full h-full object-cover opacity-40" />
           </div>
        </motion.div>
        
        <div className="relative z-10 max-w-3xl">
          <RevealText>
            <Badge>Process & Pipeline</Badge>
            <Heading size="xl" className="!text-white mb-6">Pipeline Integrity. Process Efficiency.</Heading>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We ensure the safe operation of pipelines and industrial systems through expert fabrication, instrumentation, and maintenance solutions.
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
              Reanstone provides full-scope pipeline and process support for energy and industrial operations. Our team focuses on maintaining system integrity, improving performance, and reducing operational risks.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We work across onshore and offshore facilities to ensure pipelines, processing equipment, and operational systems are functioning at peak capacity.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
             <motion.div 
               className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg"
               whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
             >
               <img src="/assets/services_images/pipeline_overview.jpg" alt="Pipeline Operations" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-brand-light">
        <RevealText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading size="lg" className="mb-4">Key Capabilities</Heading>
            <p className="text-gray-600">Ensuring flow and function across your systems.</p>
          </div>
        </RevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Pipeline fabrication and spool welding",
            "Pressure testing and integrity assessments",
            "Instrumentation installation and calibration",
            "Valve servicing and replacements",
            "Shutdown and turnaround support",
            "Flow assurance and process optimization",
            "Corrosion inspection and mitigation",
            "System troubleshooting and diagnostics"
          ].map((item, i) => (
            <RevealText key={i} delay={i * 0.05}>
              <Card className="h-full bg-white hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 hover:border-brand-primary/30">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary"
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    <Zap size={20} />
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
                 <img src="/assets/services_images/pipeline_how we work.png" alt="Technical Inspection" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
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
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <Gauge size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Technical Accuracy</h4>
                     <p className="text-gray-600">Our approach blends technical accuracy with field experience. We assess pipeline conditions, perform detailed inspections, and deliver targeted interventions.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <Timer size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Planned Efficiency</h4>
                     <p className="text-gray-600">Shutdown activities are planned to minimize impact on production while ensuring full compliance with industry standards.</p>
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
                "Reliable pipeline maintenance expertise",
                "Commitment to safety and compliance",
                "Fast turnaround during critical operations",
                "Skilled specialists in fabrication and instrumentation",
                "Reduced operating costs through optimization"
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
                "Our services ensure safe, uninterrupted flow across pipeline and processing systems."
              </p>
            </div>
          </RevealText>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-primary text-white text-center">
        <RevealText>
          <Heading size="lg" className="!text-white mb-8">Improve Your Pipeline Reliability</Heading>
          <Button to="/contact" variant="secondary" className="bg-white text-black hover:bg-brand-dark hover:text-white">Contact Us Now</Button>
        </RevealText>
      </Section>
    </div>
  );
};

export default Pipeline;
