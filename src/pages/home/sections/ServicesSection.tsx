import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Wrench, Network, Camera, Server } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "IT AMC & Maintenance",
    description: "Comprehensive annual maintenance contracts for all IT infrastructure",
    link: "/services#it-amc",
  },
  {
    icon: Network,
    title: "Network Setup & Configuration",
    description: "Professional network design and configuration services",
    link: "/services#network-setup",
  },
  {
    icon: Camera,
    title: "CCTV Installation & Surveillance",
    description: "Advanced security camera systems and surveillance solutions",
    link: "/services#cctv",
  },
  {
    icon: Server,
    title: "Server & Data Center Setup",
    description: "Professional server installation and data center infrastructure",
    link: "/services#server-setup",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground font-normal">Comprehensive IT solutions tailored to your business needs</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
              <Card className="h-full glass-card glass-hover cursor-pointer">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
