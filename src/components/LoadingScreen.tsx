import CountUp from './CountUp';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex items-end leading-none">
        <CountUp
          from={0}
          to={100}
          duration={2.5}
          className="text-[12rem] md:text-[16rem] font-bold tracking-tighter tabular-nums"
          onEnd={onComplete}
        />
        <span className="text-4xl md:text-6xl font-bold mb-8 md:mb-12">%</span>
      </div>
    </motion.div>
  );
}
