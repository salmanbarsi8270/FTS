import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../lib/animations';

const CaseStudyCard = ({ 
  client, 
  url, 
  desc, 
  highlights, 
  index 
}: { 
  client: string; 
  url: string; 
  desc: string; 
  highlights: string[]; 
  index: number;
}) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all shadow-xl"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
    
    <div className="p-10 lg:p-12 flex flex-col h-full">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col">
          <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">Case Study 0{index + 1}</span>
          <h3 className="text-3xl font-heading font-black text-foreground uppercase tracking-tighter italic">{client}</h3>
        </div>
        <a 
          href={`https://${url}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <p className="text-lg text-muted-foreground mb-10 font-medium leading-relaxed italic">
        "{desc}"
      </p>

      <div className="space-y-4 mt-auto">
        {highlights.map((highlight, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-black text-foreground/80 uppercase tracking-widest">
            <CheckCircle2 size={18} className="text-primary" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      client: "ARCO",
      url: "arco.sa",
      desc: "Since 2015, we have been ARCO's software partner, building their complete infrastructure from scratch — custom ERP, portals, and mobile apps — without a single off-the-shelf product.",
      highlights: ["Zero license dependency", "10+ Years Partnership", "Full-stack ownership"]
    },
    {
      client: "Mawarid Manpower",
      url: "mawarid.com.sa",
      desc: "Transforming digital operations since 2021. Built custom recruitment portals, bank integrations, and a fully custom ZATCA-compliant e-invoicing system.",
      highlights: ["License count reduced", "ZATCA compliant", "Bank integrated"]
    }
  ];

  return (
    <section id="case-studies" className="py-48 relative bg-background text-foreground px-8 md:px-24">
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-4">The Proof</h2>
            <h3 className="text-6xl md:text-5xl font-heading font-black text-foreground uppercase italic tracking-tighter leading-none">
              Case <span className="text-primary">Studies</span>
            </h3>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-sm mb-4 border-l border-border pl-8 font-medium">
            Measurable impact and long-term technical architecture for Saudi Arabia's largest enterprises.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {cases.map((item, i) => (
            <CaseStudyCard key={i} index={i} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
