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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 pointer-events-none mix-blend-multiply">
           <Orb hue={190} hoverIntensity={0.5} rotateOnHover={true} forceHoverState={true} />
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      {/* Floating Particles/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-primary/5 rounded-full animate-float-delayed"></div>
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
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-xl mb-10 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-foreground/70">System Online • Est. 2018</span>
          </motion.div>

          <div className="mb-10 relative">
            <BlurText
              text="NSB TELECOM"
              className="text-7xl md:text-[10rem] font-black tracking-tighter text-foreground leading-[0.9] alien-text-glow mix-blend-darken"
              delay={50}
              animateBy="letters"
              direction="top"
            />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-light tracking-tight text-muted-foreground mb-10 max-w-4xl"
          >
            Engineering The Next Layer of <span className="text-primary font-medium relative inline-block">
              Reality
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Future-Ready IT Infrastructure, Integration, Security, and Managed Solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/services">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-2xl transition-all hover:scale-105 hover:shadow-primary/20">
                Explore Nexus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-foreground/10 bg-transparent hover:bg-foreground/5 hover:border-foreground/20 transition-all hover:scale-105 text-foreground">
                Initiate Contact
              </Button>
            </Link>
          </motion.div>

          {/* Holographic Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-3 gap-12 mt-24 w-full max-w-3xl border-t border-foreground/5 pt-12"
          >
            {[
              { icon: Globe, label: "Global Clients", value: "100+" },
              { icon: Zap, label: "Uptime SLA", value: "99.9%" },
              { icon: Cpu, label: "Tech Stack", value: "Next-Gen" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-3xl font-bold tracking-tighter text-foreground">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}