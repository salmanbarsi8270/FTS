import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../lib/animations';
import Hls from 'hls.js';
import heroVideo from '../assets/hero-bg.mp4';

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // HLS Support
    const video = videoRef.current;
    if (video) {
      const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";
      
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = hlsUrl;
      }
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Looping Abstract Tech Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Interactive Mouse Glow Flashlight */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 70, 229, 0.2), transparent 50%)`
        }}
      />
      
      {/* Interactive Floating Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] transition-transform duration-100 ease-out z-10"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      />
      
      {/* Fade layers for text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-20" /> */}
    </div>
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


  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden !bg-neutral-950 !text-white px-8 md:px-24">
      {/* Interactive Video Background Layer */}
      <InteractiveBackground />

      {/* Background 3D Asset Parallax - REMOVED AS REQUESTED */}


      {/* Radial Glows */}
      <div className="glow-blob w-[500px] h-[500px] -top-48 -left-48 bg-indigo-500/10 z-10" />
      <div className="glow-blob w-[400px] h-[400px] -bottom-24 -right-24 bg-purple-500/10 z-10" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-20 max-w-5xl pt-32 md:pt-40 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Intelligence Optimized</span>
          <div className="w-12 h-px bg-primary" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl xl:text-[6rem] font-heading text-white leading-[0.95] mb-10 tracking-tighter"
        >
          {words.slice(0, 2).map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
          <span className="block text-primary italic">
            {words.slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-medium">
          The next generation of enterprise architecture starts here. <br />
          Powerful. Private. Proven.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-transparent backdrop-blur-md border border-primary/50 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary/20 hover:border-primary/80 transition-all"
          >
            Launch Platform
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-transparent backdrop-blur-md border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
          >
            See Experience
          </motion.button>
        </motion.div>
      </motion.div>


        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity z-20 text-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
    </section>
  );
};
