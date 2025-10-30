import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Wrench, Network, Camera, Server, TrendingUp, Users, Globe, Award, Building2 } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const services = [
    {
      icon: Wrench,
      title: "IT AMC & Maintenance",
      description: "Comprehensive annual maintenance contracts for all IT infrastructure",
      link: "/services#it-amc"
    },
    {
      icon: Network,
      title: "Network Setup & Configuration",
      description: "Professional network design and configuration services",
      link: "/services#network-setup"
    },
    {
      icon: Camera,
      title: "CCTV Installation & Surveillance",
      description: "Advanced security camera systems and surveillance solutions",
      link: "/services#cctv"
    },
    {
      icon: Server,
      title: "Server & Data Center Setup",
      description: "Professional server installation and data center infrastructure",
      link: "/services#server-setup"
    },
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Global Clients" },
    { icon: Award, value: "Since 2018", label: "Years of Excellence" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime SLA" },
  ];

  const clientLogos = [
    { name: "CONCOR", logo: "https://harmless-tapir-303.convex.cloud/api/storage/298bb024-43c4-4fb8-80dc-298601d6f43b" },
    { name: "DFCCIL", logo: "https://harmless-tapir-303.convex.cloud/api/storage/52575fe2-658a-47eb-a04b-ffe096ac0ab7" },
    { name: "IMD", logo: "https://harmless-tapir-303.convex.cloud/api/storage/7f6e804d-c14c-4372-aaa2-a47e4fd897ee" },
    { name: "CESTAT", logo: "https://harmless-tapir-303.convex.cloud/api/storage/823ea33d-fe46-49a4-9ead-9c9f97c514fc" },
    { name: "IOCL", logo: "https://harmless-tapir-303.convex.cloud/api/storage/1581a6ff-89ac-46ea-8518-e3d6daf9dcdd" },
    { name: "Department of Revenue", logo: "https://harmless-tapir-303.convex.cloud/api/storage/975ef62f-afa2-40cb-a1f3-ec03c851b098" },
    { name: "NPS Trust", logo: "https://harmless-tapir-303.convex.cloud/api/storage/ef7b0450-6b1e-4a67-8069-874fd8b7c97c" },
    { name: "PWD", logo: "https://harmless-tapir-303.convex.cloud/api/storage/bc8d3e6e-b4ba-42dc-9c45-99ee9e4a4693" },
    { name: "DGGI", logo: "https://harmless-tapir-303.convex.cloud/api/storage/ed1156bf-1983-459d-993c-afe836e511c0" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent pointer-events-none" 
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                Enterprise IT Solutions Since 2018
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">
              Connecting the Future
              <br />
              of Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              NSB TELECOM delivers cutting-edge IT infrastructure, system integration, and maintenance solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="text-base glass-hover shadow-lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base glass-card glass-hover">
                  Partner with Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Glass Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-hover rounded-xl p-6 text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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

      {/* Clients Section with Auto-scroll */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-muted-foreground">
              Serving government and corporate clients across India
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="glass-card rounded-lg px-8 py-6 inline-flex items-center justify-center min-w-[200px] h-[120px]"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-[80px] max-w-[160px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-600/20 to-blue-800/20 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Let's discuss how NSB TELECOM can help you achieve your digital transformation goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base shadow-lg">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}