import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin,
  Send, 
  CheckCircle2, 
} from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

export const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <section id="contact" className="py-48 bg-background text-foreground px-8 md:px-24">
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-24"
        >
          {/* Left: Content */}
          <div className="flex-1 space-y-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-xs font-black text-primary tracking-[0.5em] uppercase mb-6">Connect</h2>
              <h3 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-12 italic">
                Start the <br /> <span className="text-foreground/20">Journey</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
                Our strategic architecture team is ready to map your enterprise transformation.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-12">
              <motion.div variants={fadeInUp} className="flex items-center gap-8 group">
                <div className="w-16 h-16 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-2">Strategy Team</h4>
                  <p className="text-2xl font-heading font-black uppercase tracking-tighter group-hover:text-primary transition-colors">hello@faaz.tech</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-8 group">
                <div className="w-16 h-16 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-2">Office HQ</h4>
                  <p className="text-2xl font-heading font-black uppercase tracking-tighter group-hover:text-primary transition-colors">Riyadh, KSA</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="flex-1">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full border border-primary/20 bg-primary/5 p-16 flex flex-col items-center justify-center text-center gap-8"
              >
                <div className="w-24 h-24 rounded-none border border-primary flex items-center justify-center text-primary animate-pulse">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-4xl font-heading font-black uppercase tracking-tighter">Transmission Complete</h4>
                <p className="text-muted-foreground text-lg">Our strategy leads will reach out within 4 hours. Stand by for transformation.</p>
                <motion.button 
                  whileHover={springHover.scale ? { scale: 1.05 } : undefined}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormState('idle')}
                  className="px-10 py-4 bg-foreground/5 backdrop-blur-xl border border-border text-foreground font-black text-sm uppercase tracking-widest rounded-full hover:bg-foreground/10 hover:border-foreground/40 transition-all"
                >
                  Send Another Request
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 p-12 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter name" 
                      className="w-full px-6 py-5 bg-background border border-border focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30 text-foreground font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Corporate Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter email" 
                      className="w-full px-6 py-5 bg-background border border-border focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30 text-foreground font-bold"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Transformation Domain</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g., Enterprise ERP / Workflow AI" 
                    className="w-full px-6 py-5 bg-background border border-border focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30 text-foreground font-bold"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Brief Rationale</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe your enterprise challenges..." 
                    className="w-full px-6 py-5 bg-background border border-border focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-muted-foreground/30 resize-none text-foreground font-bold"
                  />
                </div>

                <motion.button 
                  whileHover={springHover.scale ? { scale: 1.02 } : undefined}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState === 'submitting'}
                  className="w-full py-6 bg-primary/20 backdrop-blur-xl border border-primary/50 text-foreground font-black text-sm uppercase tracking-[0.3em] rounded-full hover:bg-primary/30 hover:border-primary/80 transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-[0_8px_32px_rgba(79,70,229,0.2)]"
                >
                  {formState === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
