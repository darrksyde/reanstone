import React from 'react';
import { motion } from 'framer-motion';
import { Section, Heading, RevealText, Badge, Button, Card } from '../components/UI';
import { CheckCircle2, Leaf, Recycle, Flame, Zap } from 'lucide-react';

const WasteManagement: React.FC = () => {
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
             <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" alt="Waste Management Hero" className="w-full h-full object-cover opacity-40" />
           </div>
        </motion.div>
        
        <div className="relative z-10 max-w-3xl">
          <RevealText>
            <Badge>Waste Management (ASHER)</Badge>
            <Heading size="xl" className="!text-white mb-6">Transforming Waste Into Value</Heading>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Our ASHER system provides a patented, eco-friendly solution that converts waste into useful byproducts without combustion.
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
              The ASHER system represents a breakthrough in sustainable waste processing. Using plasma-based technology, it operates without producing smoke or harmful emissions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              The system processes up to 4 tonnes of waste per day and outputs clean, reusable materials including ash composites, metals, and recycled glass.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
             <motion.div 
               className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg"
               whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
             >
               <img src="/assets/services_images/wasteManagement_overview.jpg" alt="Sustainable Technology" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-brand-light">
        <RevealText>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading size="lg" className="mb-4">Key Capabilities</Heading>
            <p className="text-gray-600">Advanced plasma technology for a cleaner future.</p>
          </div>
        </RevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Plasma based heat transfer",
            "Zero combustion process",
            "Processing of organic and inorganic waste",
            "Energy-efficient operation",
            "Production of soil conditioners, sand bricks, and fillers",
            "Recovery of metals and glass",
            "Self-cleaning filtration",
            "Water recycling system",
            "Compliance with strict global emission standards"
          ].map((item, i) => (
            <RevealText key={i} delay={i * 0.05}>
              <Card className="h-full bg-white hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 hover:border-brand-primary/30">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="mt-1 bg-brand-primary/10 p-2 rounded-full text-brand-primary"
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    <Leaf size={20} />
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
                 <img src="/assets/services_images/wasteManagement_how we work.png" alt="Eco Processing" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
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
                     <Flame size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Plasma Technology</h4>
                     <p className="text-gray-600">Waste is fed into the ASHER module, treated under high-temperature plasma conditions, and converted into stable, non-toxic outputs.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <Recycle size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Zero Emissions</h4>
                     <p className="text-gray-600">No smoke. No hazardous discharge. No need for burning. A truly clean process.</p>
                   </div>
                 </motion.div>
                 <motion.div 
                   className="flex gap-4"
                   whileHover={{ x: 8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                 >
                   <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 transition-all duration-500">
                     <Zap size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">Circular Economy</h4>
                     <p className="text-gray-600">The process supports circular economy initiatives and reduces landfill dependency by creating reusable byproducts.</p>
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
                "Environmentally safe technology",
                "High processing capacity with low energy use",
                "Compliance with international environmental regulations",
                "Reusable outputs that create economic value",
                "Scalable for industrial and municipal use"
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
                "ASHER accelerates sustainability goals by turning waste into a valuable resource."
              </p>
            </motion.div>
          </RevealText>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-primary text-white text-center">
        <RevealText>
          <Heading size="lg" className="!text-white mb-8">Book a Demonstration of ASHER Technology</Heading>
          <Button to="/contact" variant="secondary" className="bg-white text-brand-primary hover:bg-brand-dark hover:text-white">Contact Us Now</Button>
        </RevealText>
      </Section>
    </div>
  );
};

export default WasteManagement;
