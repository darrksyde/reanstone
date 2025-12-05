import React from 'react';
import { motion } from 'framer-motion';
import { Section, Heading, RevealText, Badge, Button, Card } from '../components/UI';
import { CheckCircle2, Leaf, BarChart3, Droplets, ShieldCheck, Lightbulb } from 'lucide-react';

const SustainabilityServices: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <motion.div 
             className="w-full h-full bg-gray-800 relative"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
           >
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10"></div>
             <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop" alt="Sustainability Hero" className="w-full h-full object-cover opacity-40" />
           </motion.div>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <RevealText>
            <Badge>Sustainability Services</Badge>
            <Heading size="xl" className="!text-white mb-6">Innovating for a Cleaner Future</Heading>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We help organizations integrate sustainable practices, reduce environmental impact, and adopt smarter technologies.
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
              Our sustainability services support clients in adopting greener, safer, and more responsible operational methods.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We align industrial activities with environmental protection goals by providing tools, technology, and strategic guidance.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
             <motion.div 
               className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg"
               whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
             >
               <img src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop" alt="Green Energy" className="w-full h-full object-cover" />
             </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-brand-light">
        <RevealText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading size="lg" className="mb-4">Key Capabilities</Heading>
            <p className="text-gray-600">Strategic solutions for environmental stewardship.</p>
          </div>
        </RevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Sustainability consulting",
            "Emission reduction planning",
            "Energy efficiency assessments",
            "Waste minimization strategies",
            "Water reuse and recycling programs",
            "Environmental monitoring",
            "Technology integration for cleaner operations"
          ].map((item, i) => (
            <RevealText key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } 
                }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-500 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } 
                      }}
                    >
                      <Leaf size={20} />
                    </motion.div>
                    <h4 className="text-lg font-bold text-brand-dark">{item}</h4>
                  </div>
                </Card>
              </motion.div>
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
                 <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=2070&auto=format&fit=crop" alt="Environmental Analysis" className="w-full h-full object-cover" />
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
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Risk Assessment</h4>
                     <p className="text-gray-600">We begin by assessing environmental risks and operational impacts to identify areas for improvement.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <Lightbulb size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Actionable Insights</h4>
                     <p className="text-gray-600">Using data-driven insights, we help clients adopt solutions that improve efficiency and reduce carbon footprints.</p>
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
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Global Compliance</h4>
                     <p className="text-gray-600">Our team ensures alignment with global sustainability frameworks and regulatory requirements.</p>
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
                "Proven experience in environmental technologies",
                "Practical, cost-effective sustainability solutions",
                "Strong understanding of industrial processes",
                "High compliance and monitoring accuracy"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3 text-lg text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  whileHover={{ 
                    x: 8, 
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } 
                  }}
                >
                  <CheckCircle2 className="text-brand-primary" /> {item}
                </motion.li>
              ))}
            </ul>
          </RevealText>
          <RevealText delay={0.2}>
            <motion.div 
              className="bg-white/5 p-8 rounded-sm border border-white/10 h-full flex flex-col justify-center"
              whileHover={{ 
                scale: 1.02, 
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
              }}
            >
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-secondary">Impact Statement</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
                "We support businesses in protecting the environment while improving operational performance."
              </p>
            </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-primary text-white text-center">
        <RevealText>
          <Heading size="lg" className="!text-white mb-8">Start Your Sustainability Journey</Heading>
          <Button to="/contact" variant="secondary" className="bg-white text-brand-primary hover:bg-brand-dark hover:text-white">Contact Us Now</Button>
        </RevealText>
      </Section>
    </div>
  );
};

export default SustainabilityServices;
