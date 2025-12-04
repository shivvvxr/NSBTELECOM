import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Server, ShieldCheck, Activity, Users } from "lucide-react";
import GlareHover from "@/components/GlareHover";
import AIGlyphs from "@/components/AIGlyphs";

const services = [
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure Nexus",
    description: "Network setup, configuration, server deployment, and data center setup.",
    link: "/services#network-setup",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: "continuity",
    icon: Activity,
    title: "Continuity Engine",
    description: "IT AMC, maintenance, enterprise support, and system reliability.",
    link: "/services#it-amc",
    color: "from-emerald-400 to-teal-300"
  },
  {
    id: "surveillance",
    icon: ShieldCheck,
    title: "Surveillance Grid",
    description: "Advanced CCTV systems, security networks, and monitoring protocols.",
    link: "/services#cctv",
    color: "from-violet-400 to-purple-300"
  },
  {
    id: "hr",
    icon: Users,
    title: "Human Resource Core",
    description: "IT manpower supply, contract staffing, and corporate vehicle leasing.",
    link: "/services#manpower",
    color: "from-orange-400 to-amber-300"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-secondary/20">
      <AIGlyphs />
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-24"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block bg-primary/10 w-fit mx-auto px-4 py-2 rounded-full">System Capabilities</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-foreground">Holographic Service Modules</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Deploying advanced solutions across the digital spectrum with precision and reliability.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <GlareHover 
                borderRadius="1.5rem" 
                glareColor="#00f0ff" 
                glareOpacity={0.2}
                className="h-full"
              >
                <Card className="h-full glass-card border-white/60 bg-white/40 hover:bg-white/80 transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:border-primary/30">
                  {/* Volumetric Light Beam */}
                  <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,240,255,0.05)_30deg,transparent_60deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite] pointer-events-none blur-3xl" />
                  
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color} opacity-80`} />
                  
                  <CardHeader className="pt-10 pb-4 px-8 relative z-10">
                    <div className="mb-8 relative inline-block">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                      <div className="relative z-10 p-4 rounded-2xl bg-white shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-10">
                    <p className="text-muted-foreground text-base leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>
                    <Link to={service.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors group-hover:translate-x-2 duration-300">
                      Access Module <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}