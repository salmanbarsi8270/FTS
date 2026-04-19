import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const FooterAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Smoothing the scroll progress for a more organic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformation mappings for the feather (lwafeleaf)
  // Initially massive and offset, ending small and centered on the hand
  const scale = useTransform(smoothProgress, [0, 0.8, 1], [4, 1.2, 0.4]);
  const y = useTransform(smoothProgress, [0, 1], ["-120vh", "350px"]);
  const x = useTransform(smoothProgress, [0, 0.5, 1], ["-20vw", "10vw", "0vw"]);
  const rotate = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [-45, 15, -10, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);
  
  // Parallax-like effect for the hand appearing
  const handY = useTransform(smoothProgress, [0.6, 1], [200, 0]);
  const handOpacity = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[150vh] bg-black overflow-hidden flex flex-col items-center justify-end"
    >
      {/* The Landing Target (Hand) */}
      <motion.div 
        style={{ 
          y: handY,
          opacity: handOpacity 
        }}
        className="relative z-10 w-full max-w-6xl mx-auto flex justify-center"
      >
        <img 
          src="/broadway_hand_landing.png" 
          alt="Landing Hand" 
          className="w-full max-w-4xl h-auto object-contain select-none pointer-events-none mix-blend-screen opacity-90"
        />
      </motion.div>

      {/* The Animated Feather (lwafeleaf) */}
      <motion.div
        style={{
          scale,
          y,
          x,
          rotate,
          opacity,
          position: 'absolute',
          top: '20%',
          left: '50%',
          marginLeft: '-150px', // Center offset
          zIndex: 20
        }}
        className="w-[300px] h-auto pointer-events-none select-none"
      >
        <img 
          src="/broadway_feather_tech.png" 
          alt="Tech Feather" 
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(79,70,229,0.5)]"
        />
        
        {/* Glow trails */}
        <motion.div 
          className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Bottom transition gradient to Footer */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-30" />
    </div>
  );
};
