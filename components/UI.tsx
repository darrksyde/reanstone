import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';

// --- Typography & Layout ---

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
    <div className="max-w-[1440px] mx-auto w-full">
      {children}
    </div>
  </section>
);

export interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Heading: React.FC<{ children: React.ReactNode; size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string; highlight?: boolean }> = ({ children, size = 'md', className = "", highlight = false }) => {
  const sizes = {
    sm: "text-xl md:text-2xl font-bold",
    md: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    lg: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight",
    xl: "text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
  };
  
  return (
    <h2 className={`${sizes[size]} ${className} ${highlight ? 'text-brand-primary' : 'text-brand-dark'}`}>
      {children}
    </h2>
  );
};

// --- Interactives ---

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  to?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, onClick, className = "" }) => {
  // Changed rounded-full to rounded-sm for sharper look
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-500 ease-out group relative overflow-hidden rounded-sm";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-dark shadow-lg shadow-brand-primary/20",
    secondary: "bg-brand-secondary text-white hover:bg-brand-dark shadow-lg shadow-brand-secondary/20",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent",
    text: "px-0 py-2 text-brand-primary hover:text-brand-secondary bg-transparent uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-brand-secondary rounded-none"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      {variant !== 'text' && <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />}
      {variant === 'text' && <MoveRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />}
    </span>
  );

  const motionProps: HTMLMotionProps<"button"> = {
    whileHover: { scale: 1.03, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
    whileTap: { scale: 0.97, transition: { duration: 0.15 } }
  };

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = "", hoverEffect = true }) => (
  <motion.div 
    className={`p-8 md:p-10 rounded-sm ${hoverEffect ? 'clean-card' : ''} ${className}`}
    whileHover={hoverEffect ? { y: -8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } } : undefined}
  >
    {children}
  </motion.div>
);

// --- New Components ---

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // Changed rounded-full to rounded-sm for consistency
  <span className="inline-flex items-center py-1 px-3 rounded-sm bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4 border border-brand-primary/20">
    <span className="w-2 h-2 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
    {children}
  </span>
);