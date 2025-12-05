import React from 'react';
import { Section, Heading, Card, Badge } from '../components/UI';
import { ShieldCheck, FileText, Gavel } from 'lucide-react';

const Corporate: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <Section className="bg-brand-dark text-white border-b border-gray-800">
        <Badge>Governance</Badge>
        <Heading size="lg" className="!text-white mt-4">Corporate Information</Heading>
        <p className="text-xl text-gray-400 mt-6 max-w-3xl">Governance, safety, and important policies that guide our operations.</p>
      </Section>

      <Section className="bg-brand-light">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:border-brand-primary">
            <Gavel className="w-12 h-12 text-brand-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Governance</h3>
            <p className="text-gray-600 leading-relaxed">We operate with transparency, accountability, and ethical leadership. Our governance structure ensures that our decisions reflect the highest standards of responsibility.</p>
          </Card>
          <Card className="hover:border-brand-primary">
            <ShieldCheck className="w-12 h-12 text-brand-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Safety & Compliance</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">Safety is at the core of our operations. We follow strict HSE policies to protect workers, assets, and the environment.</p>
            <ul className="text-sm text-gray-800 space-y-2 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Zero tolerance for unsafe practices</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Adherence to global HSE standards</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> Regular audits and training</li>
            </ul>
          </Card>
          <Card className="hover:border-brand-primary">
            <FileText className="w-12 h-12 text-brand-dark mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Legal</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 cursor-pointer hover:text-brand-primary transition-colors text-gray-700">
                <span>Terms of Service</span>
                <span>&rarr;</span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 cursor-pointer hover:text-brand-primary transition-colors text-gray-700">
                <span>Privacy Policy</span>
                <span>&rarr;</span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 cursor-pointer hover:text-brand-primary transition-colors text-gray-700">
                <span>Regulatory Documents</span>
                <span>&rarr;</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Corporate;