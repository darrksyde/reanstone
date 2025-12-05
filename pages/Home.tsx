import React, { useState, useEffect } from 'react';
import { Section, Heading, RevealText, Button, Card, Badge } from '../components/UI';
import { motion } from 'framer-motion';
import { Anchor, Zap, Settings, Truck, Leaf, Globe, ArrowRight, CheckCircle2, Briefcase, Building2, HardHat, Ship, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  "/assets/hero_images/Reanstone 1.png",
  "/assets/hero_images/reanstone 2.jpg",
  "/assets/hero_images/reanstone 3.jpg",
  "/assets/hero_images/reanstone 4.png",
];

const Particles = () => (
  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
    {/* Small white particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          opacity: Math.random() * 0.3 + 0.1,
          scale: Math.random() * 0.5 + 0.2,
        }}
        animate={{
          y: [null, Math.random() * -20 - 10 + "%"], // float upward
          x: [null, (Math.random() - 0.5) * 10 + "%"], // drift sideways
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
        style={{
          width: Math.random() * 4 + 2 + "px",
          height: Math.random() * 4 + 2 + "px",
        }}
      />
    ))}
    {/* Larger Brand Orbs */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full bg-brand-primary blur-[60px] opacity-20 mix-blend-screen"
        initial={{
          x: Math.random() * 80 + 10 + "%",
          y: Math.random() * 80 + 10 + "%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [null, (Math.random() - 0.5) * 20 + "%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 3,
        }}
        style={{
          width: "150px",
          height: "150px",
        }}
      />
    ))}
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Modern Split Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white pt-20">
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-24 py-12 order-2 md:order-1 relative z-10">
          <div>
            <RevealText>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-[2px] bg-brand-secondary"></div>
                 <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm">Engineering Excellence</span>
              </div>
              <Heading size="xl" className="mb-8 leading-tight text-brand-dark">
                ENGINEERING <br />
                <span className="text-brand-primary">TOMORROW.</span>
              </Heading>
            </RevealText>
            
            <RevealText delay={0.2}>
              <p className="max-w-xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Reanstone is your trusted partner for engineering and energy services. We combine technical mastery with innovative thinking to power progress.
              </p>
            </RevealText>
            
            <RevealText delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button to="/services" variant="primary">Explore Services</Button>
                <Button to="/contact" variant="outline">Get in Touch</Button>
              </div>
            </RevealText>

            <RevealText delay={0.6}>
               <div className="mt-12 flex gap-8 border-t border-gray-100 pt-8">
                 <div>
                   <h4 className="text-3xl font-bold text-brand-dark">15+</h4>
                   <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Years Experience</p>
                 </div>
                 <div>
                   <h4 className="text-3xl font-bold text-brand-dark">100+</h4>
                   <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Projects Completed</p>
                 </div>
               </div>
            </RevealText>
          </div>
        </div>
        
        {/* Hero Visual with Slideshow & Particles */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto order-1 md:order-2 relative bg-brand-dark overflow-hidden clip-diagonal md:clip-none">
           {/* Slideshow */}
           <div className="absolute inset-0">
             {/* Base layer - always show current image without animation as fallback */}
             <div className="absolute inset-0">
               <img 
                 src={heroImages[currentSlide]} 
                 alt="Hero background"
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Animated layers */}
             {heroImages.map((image, index) => (
               <motion.div
                 key={index}
                 initial={false}
                 animate={{ 
                   opacity: index === currentSlide ? 1 : 0,
                   scale: index === currentSlide ? 1 : 1.1
                 }}
                 transition={{ 
                   opacity: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                   scale: { duration: 6, ease: "linear" }
                 }}
                 className="absolute inset-0"
               >
                 <img 
                   src={image} 
                   alt={`Hero slide ${index + 1}`}
                   className="w-full h-full object-cover"
                 />
               </motion.div>
             ))}

             {/* Overlays for readability and branding */}
             <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
             <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
           </div>

           {/* Slide Indicators */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
             {heroImages.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentSlide(index)}
                 className={`h-1.5 rounded-full transition-all duration-500 ${
                   index === currentSlide 
                     ? 'w-8 bg-white' 
                     : 'w-1.5 bg-white/40 hover:bg-white/60'
                 }`}
               />
             ))}
           </div>
           
           {/* Floating Particles */}
           <Particles />
           
           {/* Floating abstract elements */}
           <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 bg-white/95 backdrop-blur-sm p-6 shadow-2xl rounded-sm max-w-xs hidden md:block animate-float border-l-4 border-green-500 z-30">
             <div className="flex items-center gap-4 mb-3">
               <div className="p-2 bg-green-100 rounded-full text-green-600"><Leaf size={20}/></div>
               <span className="font-bold text-brand-dark">Sustainability First</span>
             </div>
             <p className="text-xs text-gray-500">Committed to eco-friendly practices in every project we undertake.</p>
           </div>
        </div>
      </section>

      {/* Marquee/Ticker */}
      <div className="bg-brand-primary py-4 overflow-hidden whitespace-nowrap relative border-y border-brand-primary/20">
         <div className="flex animate-marquee">
           {[...Array(2)].map((_, mainIdx) => (
             <div key={mainIdx} className="flex">
               {['Engineering', 'Procurement', 'Innovation', 'Safety', 'Sustainability', 'Logistics', 'Construction'].map((txt, i) => (
                 <span key={i} className="text-white/80 font-bold uppercase tracking-widest mx-8 text-sm flex items-center gap-4">
                   {txt} <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full inline-block"></span>
                 </span>
               ))}
             </div>
           ))}
         </div>
      </div>

      {/* Intro Section - Clean Layout */}
      <Section className="bg-white bg-dot-pattern">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative z-10 shadow-2xl">
                <img src="/assets/who_we_are.png" alt="Construction" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-brand-light -z-0 rounded-sm"></div>
             <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-brand-secondary z-20"></div>
          </div>
          
          <div>
            <RevealText>
              <Badge>Who We Are</Badge>
              <Heading size="md" className="mb-6 mt-4 text-brand-dark">Where expertise meets <span className="text-brand-secondary">innovation.</span></Heading>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Reanstone, we believe great engineering is more than technical execution. It is a commitment to integrity, safety, and innovation. Every project reflects our dedication to delivering quality solutions that stand the test of time.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Industry Leading Safety Standards', 'Global Engineering Expertise', 'Innovative Sustainable Solutions'].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-primary w-5 h-5" />
                      <span className="font-bold text-gray-800">{item}</span>
                   </div>
                ))}
              </div>
              
              <Button to="/about" variant="text">Read Our Story</Button>
            </RevealText>
          </div>
        </div>
      </Section>

            {/* Our Partners Section */}
      <Section className="bg-white py-16">
        <RevealText>
          <div className="text-center mb-12">
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Trusted By Industry Leaders</span>
            <Heading size="md" className="text-brand-dark">Our Partners</Heading>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 md:gap-16 shrink-0 items-center px-4 md:px-8">
                   {[
                     "partner 1.png", "partner 2.png", "partner 3.jpg", "partner 4.jpg", 
                     "partner 5.png", "partner 6.png", "partner 7.png", "partner 8.jpeg"
                   ].map((logo, idx) => (
                     <div key={idx} className="flex flex-col items-center justify-center h-16 w-24 md:h-24 md:w-40 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer group shrink-0">
                        <img 
                          src={`/assets/partner/${logo}`} 
                          alt={`Partner ${idx + 1}`} 
                          className="max-h-full max-w-full object-contain" 
                        />
                     </div>
                   ))}
                </div>
              ))}
            </div>
          </div>
        </RevealText>
      </Section>

      {/* Services Grid - Bento Style */}
      <Section className="bg-brand-light">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <RevealText>
             <Badge>What We Do</Badge>
            <Heading size="lg" className="mt-4 mb-6">Comprehensive Engineering Solutions</Heading>
            <p className="text-gray-600 text-lg">We deliver high-performance engineering and energy services designed to enhance operational efficiency.</p>
          </RevealText>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Large Card */}
          <RevealText className="md:col-span-2 md:row-span-2">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-brand-primary to-brand-secondary !text-white !border-none relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10 mb-8">
                 <div className="mb-6 p-4 bg-white/20 w-fit rounded-lg backdrop-blur-sm"><Settings className="w-8 h-8 text-white" /></div>
                 <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">EPPM Services</h3>
                 <p className="text-white/90 max-w-lg text-lg leading-relaxed">Comprehensive Engineering, Procurement, and Project Management solutions that drive efficiency from inception to completion.</p>
               </div>
               <div className="relative z-10">
                 <Button to="/services/eppm" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary w-fit">Learn More</Button>
               </div>
            </Card>
          </RevealText>

          {[
            { title: "Subsea IRM", desc: "Inspection, Repair & Maintenance.", icon: <Anchor className="w-6 h-6" />, link: "/services/irm" },
            { title: "Pipeline Services", desc: "Process optimization & integrity.", icon: <Zap className="w-6 h-6" />, link: "/services/pipeline" },
            { title: "Logistics", desc: "Global supply chain network.", icon: <Truck className="w-6 h-6" />, link: "/services/logistics" },
            { title: "Waste Mgmt", desc: "ASHER eco-friendly system.", icon: <Leaf className="w-6 h-6" />, link: "/services/waste-management" },
          ].map((service, idx) => (
            <RevealText key={idx} delay={idx * 0.1}>
              <Card className="h-full flex flex-col justify-between hover:border-brand-primary group bg-white">
                <div>
                  <div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-primary group-hover:text-white transition-colors text-brand-dark">{service.icon}</div>
                  <h3 className="text-xl font-display font-bold mb-2 text-brand-dark">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                </div>
                <Link to={service.link} className="flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Details <ArrowRight size={16} />
                </Link>
              </Card>
            </RevealText>
          ))}
          
           <RevealText delay={0.5}>
            <Card className="h-full flex flex-col justify-center items-center bg-gray-900 !border-gray-900 text-center group cursor-pointer shadow-xl" hoverEffect={false}>
               <Globe className="w-12 h-12 text-brand-secondary mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-display font-bold mb-2 text-white">Sustainability</h3>
               <p className="text-gray-400 text-sm mb-6">Building a greener future.</p>
               <Button to="/sustainability" variant="text" className="!text-white hover:!text-brand-secondary hover:!border-brand-secondary">Explore Initiatives</Button>
            </Card>
          </RevealText>
        </div>
      </Section>

      {/* Stats/Highlight Section */}
      <Section className="bg-white border-y border-gray-100">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealText>
               <Heading size="lg" className="mb-6">Powered by <br/><span className="text-brand-primary">Precision.</span></Heading>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">We utilize state-of-the-art technology and data-driven methodologies to ensure every project meets the highest standards of safety and efficiency.</p>
               <Button to="/industries" variant="primary">Industries We Serve</Button>
            </RevealText>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-brand-light p-8 rounded-lg border border-gray-100 hover:border-brand-secondary transition-colors group">
                  <h4 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">100%</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">HSE Compliance</p>
               </div>
               <div className="bg-brand-light p-8 rounded-lg border border-gray-100 hover:border-brand-secondary transition-colors group">
                  <h4 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-2">24/7</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Operational Support</p>
               </div>
               <div className="bg-brand-light p-8 rounded-lg col-span-2 flex items-center justify-between border border-gray-100 hover:border-brand-primary transition-colors">
                  <div>
                    <h4 className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">Global</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase">Partnership Network</p>
                  </div>
                  <Globe className="text-gray-200 w-24 h-24 -my-4" />
               </div>
            </div>
         </div>
      </Section>
      
      {/* ISO Certification Section */}
      <Section className="bg-brand-dark text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <RevealText>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} /> <span>International Standard</span>
              </div>
              <Heading size="lg" className="!text-white mb-6">ISO 9001:2015 Certified</Heading>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reanstone is proud to be ISO 9001:2015 certified for our Quality Management System. This certification demonstrates our unwavering commitment to consistently providing products and services that meet customer and regulatory requirements.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-sm bg-brand-primary flex items-center justify-center shrink-0">
                     <CheckCircle2 className="text-white" size={24} />
                   </div>
                   <div>
                     <h5 className="font-bold text-lg text-white">Consistent Quality</h5>
                     <p className="text-sm text-gray-400">Standardized processes ensuring excellence in every project.</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-sm bg-brand-secondary flex items-center justify-center shrink-0">
                     <Users className="text-white" size={24} />
                   </div>
                   <div>
                     <h5 className="font-bold text-lg text-white">Customer Satisfaction</h5>
                     <p className="text-sm text-gray-400">Focused on meeting and exceeding client expectations.</p>
                   </div>
                </div>
              </div>
            </RevealText>
          </div>
          
          <div className="flex justify-center">
            <RevealText delay={0.2}>
              <div className="relative group">
                {/* ISO Badge / Visual */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(148,15,212,0.3)] border-8 border-gray-100">
                   <div className="absolute inset-4 border border-dashed border-gray-300 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">ISO</h3>
                      <p className="text-2xl font-bold text-brand-primary">9001:2015</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Quality Management</p>
                   </div>
                </div>
                {/* Decorative glows */}
                <div className="absolute inset-0 bg-brand-primary/30 blur-3xl rounded-full -z-10 group-hover:bg-brand-secondary/30 transition-colors duration-500"></div>
              </div>
            </RevealText>
          </div>
        </div>
      </Section>
      


      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden text-center">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
            <RevealText>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8">Ready to Partner With Reanstone?</h2>
               <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how we can bring engineering excellence to your next project.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button to="/contact" variant="secondary">Contact Us Now</Button>
                  <Button to="/careers" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">Join Our Team</Button>
               </div>
            </RevealText>
         </div>
      </section>
    </div>
  );
};

export default Home;