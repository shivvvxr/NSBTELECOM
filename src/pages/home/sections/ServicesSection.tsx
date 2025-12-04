import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Server, ShieldCheck, Activity, Users } from "lucide-react";
import GlareHover from "@/components/GlareHover";

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
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 block">System Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Holographic Service Modules</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground font-light">
              Deploying advanced solutions across the digital spectrum.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <GlareHover 
                borderRadius="1rem" 
                glareColor="#00f0ff" 
                glareOpacity={0.2}
                className="h-full"
              >
                <Card className="h-full glass-card border-white/40 bg-white/10 hover:bg-white/20 transition-colors group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <CardHeader className="pt-8">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <service.icon className="h-10 w-10 text-foreground/80 group-hover:text-primary transition-colors relative z-10" />
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to={service.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
                      Access Module <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </CardContent>
                  
                  {/* Decorative Tech Lines */}
                  <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
                    <div className="w-1 h-1 bg-foreground rounded-full" />
                    <div className="w-1 h-1 bg-foreground rounded-full" />
                    <div className="w-1 h-1 bg-foreground rounded-full" />
                  </div>
                </Card>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}