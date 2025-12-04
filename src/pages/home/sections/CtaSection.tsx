import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router";
import AIGlyphs from "@/components/AIGlyphs";

export default function CtaSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <AIGlyphs />
      {/* Quantum Portal Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="glass-card rounded-[2rem] p-12 md:p-20 border border-white/50 shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-2xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8 animate-pulse">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            Ready to Ascend?
          </h2>
          
          <div className="mb-10 max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground font-light">
              Initiate the transformation protocol. Let NSB TELECOM engineer your future infrastructure.
            </p>
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-xl transition-all hover:scale-105 group">
              Request Enterprise Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}