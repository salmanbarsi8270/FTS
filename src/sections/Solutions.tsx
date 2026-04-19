import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Users2, Activity, Minus, Plus } from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  challenges, 
  solutions, 
}: { 
  icon: any; 
  title: string; 
  challenges: string[]; 
  solutions: string[]; 
}) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ scale: 1.02, y: -10 }}
    className="relative flex flex-col bg-neutral-900/60 border border-white/10 rounded-3xl p-10 lg:p-12 group hover:bg-neutral-800 hover:border-primary/50 transition-all shadow-xl overflow-hidden"
  >
    {/* Inner glow effect */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="flex items-center gap-6 mb-12 relative z-10">
      <div className="w-16 h-16 rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500">
        <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tighter italic group-hover:text-primary transition-colors">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {/* Challenges Sub-panel */}
      <div className="flex flex-col gap-6 p-8 rounded-2xl bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
        <div className="flex items-center gap-3 text-red-500/80 font-black text-[10px] uppercase tracking-[0.3em]">
          <Minus size={16} className="stroke-[3]" />
          <span>Legacy Friction</span>
        </div>
        <ul className="space-y-4">
          {challenges.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/60 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions Sub-panel */}
      <div className="flex flex-col gap-6 p-8 rounded-2xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />
        <div className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em] relative z-10">
          <Plus size={16} className="stroke-[3]" />
          <span>FTS Architecture</span>
        </div>
        <ul className="space-y-4 relative z-10">
          {solutions.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-white/80 text-sm font-black leading-relaxed group-hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Digital Transformation",
      icon: Globe,
      challenges: [
        "Legacy system friction",
        "Fragmented data silos",
        "Slow time-to-market",
        "Lack of scalability"
      ],
      solutions: [
        "Cloud-native architecture",
        "Unified data integration",
        "Microservices velocity",
        "Infinite scaling platform"
      ]
    },
    {
      title: "Workforce Management",
      icon: Users2,
      challenges: [
        "Manual scheduling errors",
        "Compliance grey areas",
        "Poor employee visibility",
        "Onboarding bottlenecks"
      ],
      solutions: [
        "AI-optimized shifts",
        "GOSI & labor law sync",
        "Real-time performance",
        "Automated self-onboarding"
      ]
    },
    {
      title: "Compliance & E-Invoice",
      icon: ShieldCheck,
      challenges: [
        "Strict ZATCA mandates",
        "Complex Phase 2 logic",
        "Security vulnerabilities",
        "Real-time audit stress"
      ],
      solutions: [
        "Built-in ZATCA SDK",
        "Automated XML signing",
        "Encryption-first logic",
        "Immutable audit trails"
      ]
    },
    {
      title: "Omnichannel Experience",
      icon: Activity,
      challenges: [
        "Inconsistent messaging",
        "Lost customer context",
        "Slow response latency",
        "Channel friction points"
      ],
      solutions: [
        "Single-view CRM dashboard",
        "Cross-platform state sync",
        "AI-native instant routing",
        "Seamless journey flow"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-48 relative bg-black text-white px-8 md:px-24">
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-4">The Impact</h2>
            <h3 className="text-6xl md:text-9xl font-heading font-black text-white uppercase italic tracking-tighter leading-none">
              Solutions
            </h3>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-xl text-white/40 max-w-sm mb-4 border-l border-white/20 pl-8 font-medium">
            Bridging the gap between institutional challenge and technological mastery.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto"
        >
          {solutions.map((item, i) => (
            <SolutionCard key={i} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};