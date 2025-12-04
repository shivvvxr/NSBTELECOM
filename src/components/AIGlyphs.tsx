import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEF0123456789XYZ<>/[]{}*+-_~^";

export default function AIGlyphs({ className = "" }: { className?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {/* Left Stream */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute left-[2%] md:left-[5%] top-[-20%] bottom-[-20%] w-8 flex flex-col gap-12 items-center"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Glyph key={`l-${i}`} />
        ))}
      </motion.div>

      {/* Right Stream */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute right-[2%] md:right-[5%] top-[-20%] bottom-[-20%] w-8 flex flex-col gap-12 items-center"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Glyph key={`r-${i}`} />
        ))}
      </motion.div>
      
      {/* Random floating bits */}
      <motion.div style={{ opacity }} className="absolute inset-0">
         {Array.from({ length: 15 }).map((_, i) => (
            <FloatingGlyph key={`f-${i}`} index={i} />
         ))}
      </motion.div>
    </div>
  );
}

function Glyph() {
  const [char, setChar] = useState(CHARS[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }, 100 + Math.random() * 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-[10px] font-mono text-primary/20 select-none writing-vertical-rl">
      {char}
    </span>
  );
}

function FloatingGlyph({ index }: { index: number }) {
    const [char, setChar] = useState(CHARS[0]);
    const [pos, setPos] = useState({ left: "0%", top: "0%" });
    
    useEffect(() => {
        setPos({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        });
        const interval = setInterval(() => {
          setChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        }, 200 + Math.random() * 800);
        return () => clearInterval(interval);
      }, []);

    return (
        <motion.div
            className="absolute text-[8px] font-mono text-primary/10"
            style={{ left: pos.left, top: pos.top }}
            animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.8, 1.2, 0.8],
            }}
            transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.7,
                ease: "easeInOut"
            }}
        >
            {char}
        </motion.div>
    )
}
