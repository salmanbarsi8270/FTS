import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Users2, Activity, Minus, Plus } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../lib/animations';

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
    className="relative flex flex-col bg-card border border-border rounded-3xl p-10 lg:p-12 group hover:bg-muted hover:border-primary/50 transition-all shadow-xl overflow-hidden"
  >
    {/* Inner glow effect */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="flex items-center gap-6 mb-12 relative z-10">
      <div className="w-16 h-16 rounded-2xl border border-border bg-background/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500">
        <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-3xl lg:text-4xl font-heading font-black text-foreground uppercase tracking-tighter italic group-hover:text-primary transition-colors">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {/* Challenges Sub-panel */}
      <div className="flex flex-col gap-6 p-8 rounded-2xl bg-background/40 border border-border group-hover:border-border/80 transition-colors">
        <div className="flex items-center gap-3 text-red-500/80 font-black text-[10px] uppercase tracking-[0.3em]">
          <Minus size={16} className="stroke-[3]" />
          <span>Legacy Friction</span>
        </div>
        <ul className="space-y-4">
          {challenges.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-muted-foreground text-sm font-medium leading-relaxed group-hover:text-foreground/60 transition-colors">
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
            <li key={i} className="flex items-start gap-4 text-foreground/80 text-sm font-black leading-relaxed group-hover:text-foreground transition-colors">
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
      title: "High Licensing Costs",
      icon: Globe,
      challenges: [
        "Escalating per-user fees",
        "Recurring license overhead",
        "Budget-blocking growth",
        "Zero long-term ownership"
      ],
      solutions: [
        "Fully custom platforms",
        "One-time engineering cost",
        "Zero recurring license fees",
        "Permanent asset ownership"
      ]
    },
    {
      title: "Fragmented Systems",
      icon: Users2,
      challenges: [
        "Disconnected siloed platforms",
        "Prevented information flow",
        "Duplicate data entry",
        "Manual reconciliation"
      ],
      solutions: [
        "Unified integration layer",
        "Coherent enterprise platform",
        "Single source of truth",
        "Cross-system orchestration"
      ]
    },
    {
      title: "Manual Workflows",
      icon: ShieldCheck,
      challenges: [
        "Manual error introduction",
        "Delayed business decisions",
        "High operating costs",
        "Lack of accountability"
      ],
      solutions: [
        "End-to-end automation",
        "SLA-driven escalations",
        "Real-time decision support",
        "Reduced operational waste"
      ]
    },
    {
      title: "Legacy Systems",
      icon: Activity,
      challenges: [
        "Monolithic architectures",
        "Hard to extend or scale",
        "Integration bottlenecks",
        "Growth-blocking tech debt"
      ],
      solutions: [
        "Cloud-native modernization",
        "Agile microservices",
        "High-availability infra",
        "Scalable digital foundation"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-48 relative bg-background text-foreground px-8 md:px-24">
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
            <h3 className="text-6xl md:text-9xl font-heading font-black text-foreground uppercase italic tracking-tighter leading-none">
              Solutions
            </h3>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-sm mb-4 border-l border-border pl-8 font-medium">
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
