import React from 'react';
import { Section, Heading, RevealText, Card, Badge } from '../components/UI';

const Industries: React.FC = () => {
  const industries = [
    { title: "Oil and Gas", desc: "We support upstream and downstream operations through engineering design, IRM, pipeline services, and strategic procurement.", img: "https://images.unsplash.com/photo-1595116709848-6d81432f8016?q=80&w=2062&auto=format&fit=crop" },
    { title: "Maritime and Offshore", desc: "We deliver underwater inspection, equipment maintenance, and logistics support that ensure safe offshore activities.", img: "https://images.unsplash.com/photo-1549144511-3085f2693821?q=80&w=2070&auto=format&fit=crop" },
    { title: "Manufacturing", desc: "We enhance productivity through fabrication services, process improvements, and technical integrations.", img: "https://images.unsplash.com/photo-1565515238219-5d43a6d71b56?q=80&w=2070&auto=format&fit=crop" },
    { title: "Energy Distribution", desc: "We support energy operators with system maintenance and engineering solutions that improve reliability.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" },
    { title: "Construction", desc: "We offer fabrication, project management, and procurement services that align with global construction standards.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
    { title: "Government", desc: "We assist government bodies with infrastructure maintenance, waste management, and public utility support.", img: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full pt-20">
      <Section className="bg-white">
        <RevealText>
          <Badge>Sectors</Badge>
          <Heading size="lg" className="mt-4">Industries We Serve</Heading>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl">We work across key sectors to support long-term growth, safe operations, and technical excellence.</p>
        </RevealText>
      </Section>

      <Section className="bg-brand-light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <RevealText key={i} delay={i * 0.1}>
              <Card className="h-full !p-0 overflow-hidden hover:shadow-xl group">
                 <div className="h-48 overflow-hidden">
                    <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                 </div>
                 <div className="p-8">
                   <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors">{ind.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
                 </div>
              </Card>
            </RevealText>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Industries;