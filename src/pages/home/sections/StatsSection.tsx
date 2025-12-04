import { motion } from "framer-motion";
import { Building2, Globe2, ShieldCheck, Clock } from "lucide-react";
import AIGlyphs from "@/components/AIGlyphs";

const stats = [
  { 
    label: "Established", 
    value: "2018", 
    desc: "Years of Innovation",
    icon: Clock
  },
  { 
    label: "Global Clients", 
    value: "100+", 
    desc: "Across Industries",
    icon: Globe2
  },
  { 
    label: "Uptime SLA", 
    value: "99.9%", 
    desc: "Guaranteed Reliability",
    icon: ShieldCheck
  },
  { 
    label: "Government", 
    value: "Trusted", 
    desc: "By Major Bodies",
    icon: Building2
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 relative">
      <AIGlyphs />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="relative">
          {/* Holographic Cube Container Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl -z-10" />
          
          <div className="glass-card rounded-3xl border border-white/40 p-12 md:p-20 relative overflow-hidden">
            {/* Scanning Beam */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-[scan_4s_ease-in-out_infinite]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group relative"
                >
                  {/* Volumetric Glow */}
                  <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none scale-150" />
                  
                  <div className="mb-4 p-4 rounded-2xl bg-white/50 border border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/60">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}