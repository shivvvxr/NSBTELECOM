import { useLayoutEffect, useRef, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (location.hash) {
        // Small timeout to ensure DOM is ready if navigating to new page
        setTimeout(() => {
          const target = document.querySelector(location.hash);
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target as HTMLElement, { 
              offset: -100, // Offset for fixed header
              duration: 1.5
            });
          }
        }, 100);
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [location]);

  return <>{children}</>;
};

export default SmoothScroll;