import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Settings, Users, Briefcase, FileText } from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const ProductCard = ({ 
  title, 
  desc, 
  icon: Icon, 
}: { 
  title: string; 
  desc: string; 
  icon: any; 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex-shrink-0 w-[350px] md:w-[450px] aspect-[4/5] p-[1px] bg-gradient-to-b from-border to-transparent group cursor-grab active:cursor-grabbing rounded-3xl hover:from-primary/30 transition-all duration-500 shadow-xl"
    >
      <div className="h-full bg-card/80 backdrop-blur-2xl flex flex-col p-10 lg:p-12 relative overflow-hidden group-hover:bg-muted shadow-[inset_0_4px_30px_rgba(0,0,0,0.02)] transition-colors duration-500 rounded-[23px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
        
        <div className="mb-auto relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-background/50 border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors italic relative z-10">
          {title}
        </h3>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 relative z-10">
          {desc}
        </p>

        <div className="mt-auto flex items-center gap-4 group-hover:gap-6 transition-all duration-500 relative z-10 w-full">
          <span className="text-xs font-black uppercase tracking-widest text-primary">Discover Engine</span>
          <div className="relative flex-1 h-[2px]">
            <div className="absolute inset-0 bg-border" />
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Products: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: "Custom ERP",
      icon: Settings,
      desc: "Tailored Enterprise Resource Planning system that adapts to your unique business logic, not the other way around.",
    },
    {
      title: "Intelligent CRM",
      icon: Users,
      desc: "Go beyond contact management. Predictive lead scoring and automated follow-ups powered by Platform4x AI.",
    },
    {
      title: "HRM Evolution",
      icon: Briefcase,
      desc: "Transform employee experience with the Saudi-first HRM solution. Fully compliant with local labor laws.",
    },
    {
      title: "Case Manager",
      icon: FileText,
      desc: "Integrated solution for tracking legal, compliance, and operational cases with audit trails.",
    }
  ];

  return (
    <section id="products" className="py-48 relative bg-background overflow-hidden">
      <div className="container mx-auto px-8 relative z-10 mb-24">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-4">The Suite</h2>
            <h3 className="text-6xl md:text-8xl font-heading font-black text-foreground uppercase italic tracking-tighter">
              Products
            </h3>
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-md hidden md:block">
            <p className="text-muted-foreground border-l border-border pl-6 text-sm flex">
              Explore our proprietary suite of high-performance tools architected for the Saudi enterprise landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative px-8 md:px-0">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-12 md:pl-24 pr-24 select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, i) => (
            <motion.div key={i} variants={fadeInUp} className="scroll-snap-align-start shrink-0">
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
