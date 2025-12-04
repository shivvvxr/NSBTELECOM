import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import { ArrowRight, Globe, Cpu, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import Orb from "@/components/Orb";
import AIGlyphs from "@/components/AIGlyphs";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-background">
        <AIGlyphs />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none">
           <Orb hue={190} hoverIntensity={0.5} rotateOnHover={true} forceHoverState={true} />
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* Floating Particles/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-primary/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary/80">System Online • Est. 2018</span>
          </motion.div>

          <div className="mb-8 relative">
            <BlurText
              text="NSB TELECOM"
              className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 alien-text-glow"
              delay={50}
              animateBy="letters"
              direction="top"
            />
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "100%" }} 
              transition={{ delay: 1, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full absolute bottom-0"
            />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-light tracking-tight text-muted-foreground mb-8 max-w-4xl"
          >
            Engineering The Next Layer of <span className="text-primary font-normal">Reality</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed"
          >
            Future-Ready IT Infrastructure, Integration, Security, and Managed Solutions.
            <br />
            <span className="text-xs uppercase tracking-widest opacity-50 mt-4 block">Initializing Protocol...</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/services">
              <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all hover:scale-105">
                Explore Nexus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-105">
                Initiate Contact
              </Button>
            </Link>
          </motion.div>

          {/* Holographic Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-3 gap-8 mt-20 w-full max-w-3xl"
          >
            {[
              { icon: Globe, label: "Global Clients", value: "100+" },
              { icon: Zap, label: "Uptime SLA", value: "99.9%" },
              { icon: Cpu, label: "Tech Stack", value: "Next-Gen" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <stat.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}