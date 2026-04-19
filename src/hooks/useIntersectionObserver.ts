import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          entry.target.classList.remove('reveal-hidden');
        }
      });
    }, options);

    const elements = containerRef.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [options]);

  return containerRef;
};
