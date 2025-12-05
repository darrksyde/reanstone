import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Linkedin, Facebook, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Gallery from './pages/Gallery';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Corporate from './pages/Corporate';
import { Button } from './components/UI';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { 
      name: 'What We Do', 
      path: '#',
      children: [
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' }
      ]
    },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            <span className={`text-2xl font-display font-black tracking-tighter ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>REANSTONE</span>
            <div className="w-2 h-2 bg-brand-primary rounded-full group-hover:bg-brand-secondary transition-colors" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              link.children ? (
                <div key={link.name} className="relative group">
                  <button className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-800'}`}>
                    {link.name}
                    <ChevronDown size={14} className="mt-[-2px]" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-xl rounded-sm py-2 min-w-[180px] border border-gray-100 flex flex-col relative">
                      {/* Dropdown Arrow */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                      {link.children.map(child => (
                        <Link 
                          key={child.name} 
                          to={child.path} 
                          className="text-sm font-bold text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-6 py-3 transition-colors block whitespace-nowrap text-center"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.name} to={link.path} className={`text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors relative group ${scrolled ? 'text-gray-600' : 'text-gray-800'}`}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
            <Button to="/contact" variant="primary" className="!px-6 !py-2 !text-xs !rounded-full">Contact Us</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden z-50 text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-6"
          >
            {navLinks.map(link => (
              link.children ? (
                <div key={link.name} className="flex flex-col items-center gap-4">
                  {/* For mobile, we just list the children directly under the group or just list them to keep it clean */}
                  {link.children.map(child => (
                    <Link key={child.name} to={child.path} onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold text-brand-dark hover:text-brand-primary transition-colors">
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold text-brand-dark hover:text-brand-primary transition-colors">
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold text-brand-secondary">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
    <div className="container mx-auto grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
      <div className="col-span-1 md:col-span-1">
        <h2 className="text-3xl font-display font-black tracking-tighter text-white mb-6">REANSTONE</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Engineering Tomorrow.<br/>Delivering Excellence Today.
        </p>
        <div className="flex gap-4">
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors"><Linkedin size={18} /></a>
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors"><Facebook size={18} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link to="/about" className="hover:text-brand-primary transition-colors">Our Story</Link></li>
          <li><Link to="/corporate" className="hover:text-brand-primary transition-colors">Corporate Governance</Link></li>
          <li><Link to="/careers" className="hover:text-brand-primary transition-colors">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li><Link to="/services#eppm" className="hover:text-brand-primary transition-colors">EPPM</Link></li>
          <li><Link to="/services#irm" className="hover:text-brand-primary transition-colors">Subsea IRM</Link></li>
          <li><Link to="/services#pipeline" className="hover:text-brand-primary transition-colors">Pipeline Services</Link></li>
          <li><Link to="/services#waste" className="hover:text-brand-primary transition-colors">Waste Management</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
        <address className="not-italic text-gray-400 text-sm space-y-4">
          <p className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0 text-brand-secondary"/> 1-7 Muri Okunola Street,<br/>Victoria Island, Lagos</p>
          <p className="flex items-center gap-3"><Mail size={16} className="text-brand-secondary"/> info@reanstone.com</p>
          <p className="flex items-center gap-3"><Phone size={16} className="text-brand-secondary"/> +234 803 503 8686</p>
        </address>
      </div>
    </div>
    <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
      <p>&copy; {new Date().getFullYear()} Reanstone Nigeria Limited. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
         <Link to="/corporate" className="hover:text-white">Privacy Policy</Link>
         <Link to="/corporate" className="hover:text-white">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-primary selection:text-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/corporate" element={<Corporate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;