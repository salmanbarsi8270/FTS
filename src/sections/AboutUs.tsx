import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Calendar, Award, MapPin } from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={springHover.scale ? { scale: 1.05, zIndex: 10, position: 'relative' } : undefined}
    className="border border-white/5 bg-neutral-900/50 p-10 flex flex-col items-center gap-4 transition-colors hover:border-primary hover:bg-neutral-900"
  >
    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <span className="text-4xl font-heading font-black text-white italic">{value}</span>
    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black text-center">{label}</span>
  </motion.div>
);

const CoreCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={springHover.scale ? { scale: 1.02, zIndex: 10, position: 'relative' } : undefined}
    className="lg:flex-1 border border-white/5 bg-neutral-900/30 p-12 group transition-colors hover:border-primary hover:bg-neutral-900/80"
  >
    <Icon size={48} className="text-primary mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    <h4 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tighter italic">{title}</h4>
    <p className="text-white/40 text-lg leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-48 relative bg-black text-white px-8 md:px-24">
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-32 items-center mb-48"
        >
          {/* Left: Text */}
          <motion.div variants={fadeInUp} className="flex-1">
            <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-6">The Institutional Path</h2>
            <h3 className="text-6xl md:text-9xl font-heading font-black text-white uppercase italic tracking-tighter leading-none mb-12">
              Engineering <br /> <span className="text-white/20">Legacy</span>
            </h3>
            <div className="space-y-8 text-xl text-white/50 leading-relaxed font-medium max-w-2xl">
              <p>
                Faaz Technology Solutions is a premier enterprise engineering firm dedicated to architecting the digital future. With a deep focus on the Middle Eastern ecosystem, we bridge the gap between complex legacy requirements and the agile, AI-native world of tomorrow.
              </p>
              <p>
                Our philosophy: Infinite flexibility with zero compromise on compliance. We build the operating layers that power the region's largest enterprises.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div 
            variants={staggerContainer}
            className="flex-1 w-full flex flex-col gap-px bg-white/5 border border-white/5"
          >
            <div className="grid grid-cols-2 lg:grid-cols-3">
              <StatCard icon={Calendar} value="2014" label="Founded" />
              <StatCard icon={Award} value="10+" label="Years Expertise" />
              <StatCard icon={MapPin} value="KSA & India" label="Regional Hubs" />
            </div>
            <motion.div variants={fadeInUp} className="p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-neutral-900/50">
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-black text-primary italic">100%</span>
                <span className="text-[10px] text-white/20 uppercase font-black tracking-widest mt-2">Code Ownership</span>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="flex flex-col text-right">
                <span className="text-5xl font-heading font-black text-white italic">Zero</span>
                <span className="text-[10px] text-white/20 uppercase font-black tracking-widest mt-2">License Lock-in</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission / Vision / Values */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5"
        >
          <CoreCard 
            icon={Target} 
            title="Mission" 
            desc="Empowering enterprises with sovereign technology stacks that drive radical operational efficiency."
          />
          <CoreCard 
            icon={Eye} 
            title="Vision" 
            desc="To be the primary architectural partner for Middle Eastern organizations transitioning into the AI-native era."
          />
          <CoreCard 
            icon={Sparkles} 
            title="Values" 
            desc="Radical transparency, operational excellence, and a relentless focus on solving the 'unsolvable'."
          />
        </motion.div>
      </div>
    </section>
  );
};