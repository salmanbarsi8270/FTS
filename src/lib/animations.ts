import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 0.8
    }
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 0.8
    }
  }
};

export const springHover = {
  scale: 1.02,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
};
