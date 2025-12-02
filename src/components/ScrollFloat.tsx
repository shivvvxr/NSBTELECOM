import { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span 
        className="char cursor-pointer inline-block" 
        key={index}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { 
            scale: 1.3, 
            color: '#00A651', 
            duration: 0.3, 
            ease: 'back.out(1.7)' 
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { 
            scale: 1, 
            color: 'inherit', 
            duration: 0.3, 
            ease: 'power1.out' 
          });
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      // Accessibility: Respect reduced motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        gsap.set(charElements, { 
          opacity: 1, 
          yPercent: 0, 
          scaleY: 1, 
          scaleX: 1 
        });
        return;
      }

      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`} aria-label={children}>
      <span className={`scroll-float-text ${textClassName}`} aria-hidden="true">{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;