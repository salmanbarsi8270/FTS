import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Layers, Layout, Zap, FileCheck } from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const PlatformCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ scale: 1.02, y: -10 }}
    className="relative group p-10 lg:p-12 bg-card border border-border flex flex-col items-start gap-8 transition-all duration-500 rounded-3xl hover:bg-muted hover:border-primary/50 shadow-xl overflow-hidden"
  >
    {/* Glow Aura */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="w-16 h-16 rounded-2xl border border-border bg-background/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500 relative z-10">
      <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
    </div>
    <div className="flex flex-col gap-4 relative z-10">
      <h3 className="text-3xl font-heading font-black text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors italic">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{desc}</p>
    </div>
    <div className="mt-auto pt-4 flex items-center gap-4 group-hover:gap-6 transition-all opacity-0 group-hover:opacity-100 relative z-10">
      <span className="text-xs font-black uppercase tracking-widest text-primary">Discover Architecture</span>
      <div className="h-px w-8 bg-primary" />
    </div>
  </motion.div>
);

export const Platform: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: "AI Layer",
      desc: "Built from the ground up for the AI era, providing a unified foundation for all enterprise operations."
    },
    {
      icon: Zap,
      title: "Workflow",
      desc: "Streamline complex processes with intelligent automation that connects every department."
    },
    {
      icon: Layout,
      title: "Low-Code",
      desc: "Empower your team to build and deploy custom modules in days, not months."
    },
    {
      icon: Bot,
      title: "Agentic",
      desc: "Deploy autonomous agents that understand your proprietary data and execute complex tasks."
    },
    {
      icon: Cpu,
      title: "Analytics",
      desc: "Intelligent tracking and resolution for every enterprise scenario, from HR to Logistics."
    },
    {
      icon: FileCheck,
      title: "ZATCA",
      desc: "Fully compliant Phase 2 integration for Saudi Arabian e-invoicing mandates."
    }
  ];

  return (
    <section id="platform" className="py-48 relative overflow-hidden bg-background text-foreground">
      <div className="container mx-auto px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-4">The Foundation</h2>
            <h3 className="text-6xl md:text-9xl font-heading font-black text-foreground uppercase italic tracking-tighter leading-none drop-shadow-lg">
              Platform
            </h3>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-sm mb-4 border-l border-border pl-8 font-medium">
            The low-latency operating layer designed for massive scale and regulatory precision.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {features.map((feature, i) => (
            <PlatformCard 
              key={i} 
              {...feature} 
            />
          ))}
        </motion.div>

        {/* ZATCA Banner */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-2xl" />
          <motion.div variants={fadeInUp} className="relative bg-card/80 backdrop-blur-2xl border border-border rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-foreground overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <div className="flex flex-col gap-4 text-center lg:text-left relative z-10 w-full lg:w-1/2">
              <h4 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter italic text-foreground drop-shadow-md">ZATCA Phase 2</h4>
              <p className="text-muted-foreground text-xl font-medium">Seamless integration with Saudi Arabian e-invoicing portals. Compliant. Secure. Native.</p>
            </div>
            
            <motion.button 
              whileHover={springHover.scale ? { scale: 1.05 } : undefined}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-10 py-5 bg-primary/20 backdrop-blur-xl border border-primary/50 text-foreground font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary/40 hover:border-primary/80 transition-all shadow-[0_8px_32px_rgba(79,70,229,0.3)] whitespace-nowrap"
            >
              Audit Architecture
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
