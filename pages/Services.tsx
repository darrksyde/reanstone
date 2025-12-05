import React from 'react';
import { Section, Heading, RevealText, Badge, Button } from '../components/UI';
import { Check } from 'lucide-react';

const ServiceSection: React.FC<{ 
  title: string; 
  desc: string; 
  points: string[]; 
  align?: 'left' | 'right'; 
  img: string; 
  id: string;
  link: string;
}> = ({ title, desc, points, align = 'left', img, id, link }) => (
  <div id={id} className="py-24 md:py-32 border-b border-gray-100 last:border-0 bg-white even:bg-brand-light">
    <div className={`max-w-[1440px] mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center ${align === 'right' ? 'md:grid-flow-dense' : ''}`}>
      <div className={align === 'right' ? 'md:col-start-2' : ''}>
        <RevealText>
          <div className="w-12 h-1 bg-brand-primary mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-brand-dark">{title}</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{desc}</p>
          <ul className="space-y-4 mb-8">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 bg-brand-primary/10 text-brand-primary rounded-full p-1"><Check size={14} strokeWidth={3}/></span>
                <span className="block text-gray-700 font-medium">{pt}</span>
              </li>
            ))}
          </ul>
          <Button to={link} variant="outline">Learn More</Button>
        </RevealText>
      </div>
      <div className={align === 'right' ? 'md:col-start-1' : ''}>
        <RevealText delay={0.2}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
            <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </RevealText>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <Section className="bg-brand-light text-center relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <RevealText>
          <Badge>Our Capabilities</Badge>
          <Heading size="lg" className="mb-6 mt-4">Precision & Performance</Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our services are designed to support safe operations, efficient project delivery, and long-term asset reliability across the energy sector.
          </p>
        </RevealText>
      </Section>

      <div className="w-full">
        <ServiceSection 
          id="eppm"
          title="EPPM"
          desc="We provide end-to-end engineering and project management solutions that guide projects from concept to completion. Our multidisciplinary team ensures every phase is optimized for cost and safety."
          points={['Engineering Design & Analysis', 'FEED & Conceptual Studies', 'Project Management Consultancy', 'Risk Assessments', 'Procurement Strategies']}
          img="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
          link="/services/eppm"
        />
        <ServiceSection 
          id="irm"
          title="Subsea IRM"
          desc="We ensure underwater asset integrity through advanced ROV inspections, efficient repair operations, and planned maintenance routines that minimize downtime and extend asset life."
          points={['ROV & Sonar Inspections', 'Underwater Repair & Welding', 'Scheduled Maintenance Programs', 'Integrity Reporting & Analysis']}
          align="right"
          img="https://images.unsplash.com/photo-1621255535312-32029be939d8?q=80&w=2070&auto=format&fit=crop"
          link="/services/irm"
        />
        <ServiceSection 
          id="pipeline"
          title="Process & Pipeline"
          desc="We support pipeline operations with fabrication, instrumentation, inspection, and maintenance services that keep systems reliable and safe under pressure."
          points={['Custom Fabrication', 'Instrumentation & Control', 'Pipeline Integrity Checks', 'Shutdown Management', 'Process Optimization']}
          img="https://images.unsplash.com/photo-1526978696896-19349c25a507?q=80&w=1974&auto=format&fit=crop"
          link="/services/pipeline"
        />
        <ServiceSection 
          id="logistics"
          title="Supply Chain & Logistics"
          desc="We manage procurement, sourcing, supply chain processes, and logistics using a global network of trusted partners to deliver materials on time, every time."
          points={['Procurement Planning', 'Global Sourcing', 'Technical Requests Management', 'Logistics Coordination']}
          align="right"
          img="https://images.unsplash.com/photo-1494412651409-ae1e3ad8f70f?q=80&w=2070&auto=format&fit=crop"
          link="/services/logistics"
        />
        <ServiceSection 
          id="waste"
          title="Waste Management (ASHER)"
          desc="Our ASHER technology transforms waste into valuable byproducts using a smokeless, eco-friendly, patented process. It supports circular economy goals while reducing environmental impact."
          points={['Plasma-based heat system', 'Zero combustion process', 'Reusable byproducts (Ash, etc.)', 'Energy-efficient operation']}
          img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
          link="/services/waste-management"
        />
        <ServiceSection 
          id="sustainability"
          title="Sustainability Services"
          desc="We help organizations integrate sustainable practices, reduce environmental impact, and adopt smarter technologies."
          points={['Sustainability consulting', 'Emission reduction planning', 'Energy efficiency assessments', 'Waste minimization strategies']}
          align="right"
          img="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
          link="/services/sustainability"
        />
      </div>
    </div>
  );
};

export default Services;