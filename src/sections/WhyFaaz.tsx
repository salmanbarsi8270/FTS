import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus,
  Minus,
  ChevronRight
} from 'lucide-react';

const AdvantageTab = ({ 
  title, 
  desc, 
  isOpen, 
  onClick, 
  index 
}: { 
  title: string; 
  desc: string; 
  isOpen: boolean; 
  onClick: () => void; 
  index: number; 
}) => (
  <div className="border-b border-border last:border-none group">
    <button 
      onClick={onClick}
      className="w-full py-10 flex items-center justify-between text-left transition-all"
    >
      <div className="flex items-center gap-8 md:gap-12 w-full pr-8">
        <span className={`text-sm font-black transition-colors ${isOpen ? 'text-primary drop-shadow-[0_0_10px_rgba(79,70,229,0.8)]' : 'text-muted-foreground group-hover:text-foreground/40'}`}>
          0{index + 1}
        </span>
        <h3 className={`text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase tracking-tighter transition-all break-words ${isOpen ? 'text-foreground italic translate-x-4 drop-shadow-[0_0_15px_rgba(79,70,229,0.2)]' : 'text-foreground/40 group-hover:text-foreground group-hover:translate-x-4'}`}>
          {title}
        </h3>
      </div>
      <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-full border ${isOpen ? 'bg-primary border-primary text-white rotate-90 shadow-[0_0_20px_rgba(79,70,229,0.5)]' : 'border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground'} transition-all duration-500`}>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-12 pl-16 md:pl-20 max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
              {desc}
            </p>
            <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:gap-5 transition-all group/btn">
              Learn More <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const WhyFaaz: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useIntersectionObserver();

  const advantages = [
    {
      title: "No License Cost",
      desc: "Everything we build is fully owned by the client. Zero recurring software license fees, eliminating the 'per-user tax' permanently."
    },
    {
      title: "Rapid Framework",
      desc: "Our proprietary development framework and reusable component library enable 2–3x faster delivery compared to conventional approaches."
    },
    {
      title: "Saudi Mastery",
      desc: "Deep expertise in KSA regulations (ZATCA, MHRSD, GOSI) and local enterprise expectations, ensuring full compliance and trust."
    },
    {
      title: "Full-Stack Ownership",
      desc: "We own the entire stack — from architecture to mobile apps — with no dependency on third-party vendors or legacy constraints."
    }
  ];

  return (
    <section id="why-faaz" ref={containerRef} className="py-48 relative bg-background text-foreground">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-6">The Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-foreground uppercase tracking-tighter leading-none mb-10 drop-shadow-md">
              Why We <br /> <span className="text-foreground/20 italic">Exist</span>
            </h3>
            <div className="w-12 h-1 bg-primary mb-10 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
            <p className="text-lg text-muted-foreground font-medium">
              We don't just build software. We architect institutional power through technical excellence and regional mastery.
            </p>
          </div>

          {/* Right Column: Expanding Tabs */}
          <div className="lg:w-2/3 border-t border-border">
            {advantages.map((advantage, i) => (
              <AdvantageTab 
                key={i}
                index={i}
                {...advantage}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
