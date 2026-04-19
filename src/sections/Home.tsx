import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp, springHover } from '../lib/animations';

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Looping Abstract Tech Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
      >
        <source src="https://cdn.pixabay.com/video/2021/08/04/83861-583569483_large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-2782-large.mp4" type="video/mp4" />
      </video>

      {/* Interactive Mouse Glow Flashlight */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`
        }}
      />
      
      {/* Interactive Floating Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] transition-transform duration-100 ease-out z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      />
      
      {/* Dark fade layers for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-20" />
    </div>
  );
};

const StatCounter = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);
  const isKSA = value.includes('+') || value.includes('&');

  useEffect(() => {
    if (isNaN(target)) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);

  const isText = isNaN(parseInt(value));

  return (
    <motion.div 
      variants={fadeInUp} 
      whileHover={{ scale: 1.05, y: -10 }}
      className="flex flex-col items-center justify-center p-8 bg-neutral-900/60 border border-white/10 rounded-3xl overflow-hidden group hover:bg-neutral-800 hover:border-primary/50 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-4xl md:text-5xl font-heading font-black text-white group-hover:text-primary transition-colors tracking-tighter mb-3 relative z-10 drop-shadow-md">
        {isText ? value : (value === "0" ? "0" : count + "+")}
      </span>
      <span className="text-xs font-black text-white/50 uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors text-center leading-relaxed">
        {label}
      </span>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const headline = "Architecting the Intelligent Enterprise";
  const words = headline.split(" ");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black text-white px-8 md:px-24">
      {/* Interactive Video Background Layer */}
      <InteractiveBackground />

      {/* Background 3D Asset Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-auto pointer-events-none select-none z-10 hidden xl:block"
      >
        <motion.img 
          initial={{ scale: 0.9, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/broadway_hero_blue.png" 
          alt="Abstract Design Asset" 
          className="w-full h-full object-contain animate-float"
        />
      </motion.div>

      {/* Radial Glows */}
      <div className="glow-blob w-[500px] h-[500px] -top-48 -left-48 bg-indigo-500/10 z-10" />
      <div className="glow-blob w-[400px] h-[400px] -bottom-24 -right-24 bg-purple-500/10 z-10" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-20 max-w-5xl pt-32 md:pt-40"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Intelligence Optimized</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl xl:text-[8rem] font-heading font-black text-white leading-[0.95] mb-10 tracking-tighter mix-blend-difference"
        >
          {words.slice(0, 2).map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
          <span className="block text-primary italic">
            {words.slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl font-medium">
          The next generation of enterprise architecture starts here. <br />
          Powerful. Private. Proven.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button 
            whileHover={springHover.scale ? { scale: 1.05 } : undefined}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-primary/20 backdrop-blur-xl border border-primary/50 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary/30 hover:border-primary/80 transition-all shadow-[0_8px_32px_rgba(79,70,229,0.2)]"
          >
            Launch Platform
          </motion.button>
          
          <motion.button 
            whileHover={springHover.scale ? { scale: 1.05 } : undefined}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
          >
            See Experience
          </motion.button>
        </motion.div>
      </motion.div>

        {/* Floating Stats */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 mt-24 relative z-20"
        >
          <StatCounter value="10" label="Years Excellence" />
          <StatCounter value="KSA & India" label="Global Presence" />
          <StatCounter value="0" label="License Cost" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity z-20"
        >
          <ChevronDown size={32} />
        </motion.div>
    </section>
  );
};