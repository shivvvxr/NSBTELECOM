import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useRef } from "react";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<{ logo: string; name: string; fullName: string } | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const values = [
    { icon: Target, title: "Innovation", description: "Pioneering cutting-edge solutions" },
    { icon: Eye, title: "Vision", description: "Leading the digital transformation" },
    { icon: Award, title: "Excellence", description: "Delivering superior quality" },
    { icon: Users, title: "Partnership", description: "Building lasting relationships" },
  ];

  const clients = [
    { name: "CONCOR", fullName: "Container Corporation of India", logo: "https://harmless-tapir-303.convex.cloud/api/storage/298bb024-43c4-4fb8-80dc-298601d6f43b" },
    { name: "DFCCIL", fullName: "Dedicated Freight Corridor Corporation of India Limited", logo: "https://harmless-tapir-303.convex.cloud/api/storage/52575fe2-658a-47eb-a04b-ffe096ac0ab7" },
    { name: "IMD", fullName: "India Meteorological Department", logo: "https://harmless-tapir-303.convex.cloud/api/storage/7f6e804d-c14c-4372-aaa2-a47e4fd897ee" },
    { name: "CESTAT", fullName: "Customs, Excise & Service Tax Appellate Tribunal", logo: "https://harmless-tapir-303.convex.cloud/api/storage/823ea33d-fe46-49a4-9ead-9c9f97c514fc" },
    { name: "IOCL", fullName: "Indian Oil Corporation Limited", logo: "https://harmless-tapir-303.convex.cloud/api/storage/1581a6ff-89ac-46ea-8518-e3d6daf9dcdd" },
    { name: "Department of Revenue", fullName: "", logo: "https://harmless-tapir-303.convex.cloud/api/storage/975ef62f-afa2-40cb-a1f3-ec03c851b098" },
    { name: "NPS Trust", fullName: "National Pension System Trust", logo: "https://harmless-tapir-303.convex.cloud/api/storage/ef7b0450-6b1e-4a67-8069-874fd8b7c97c" },
    { name: "PWD", fullName: "Public Works Department", logo: "https://harmless-tapir-303.convex.cloud/api/storage/0e3de3d8-8e8c-45dd-b2a8-b8909f3c3e43" },
    { name: "DGGI", fullName: "Directorate General of GST Intelligence", logo: "https://harmless-tapir-303.convex.cloud/api/storage/bf95f9fc-ac6f-43e0-88d4-37ffbe92c723" },
  ];

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      <Navbar />
      
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="fixed top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="fixed bottom-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent"
            >
              About NSB TELECOM
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Established in 2018 by Mr. Surjit Singh, NSB TELECOM is a trusted name in IT infrastructure, integration, and maintenance — delivering reliable, innovative, and tailored tech solutions to corporate and government clients.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="glass-card glass-hover rounded-3xl p-10 border border-white/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/20" />
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver world-class IT infrastructure solutions that enable businesses to connect, innovate, and grow in an increasingly digital world. We are committed to excellence, reliability, and customer success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="glass-card glass-hover rounded-3xl p-10 border border-white/40 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-blue-500/20" />
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-blue-500" />
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the most trusted technology partner in India, recognized for innovation, integrity, and impact. We envision a future where seamless connectivity and intelligent technology drive sustainable growth for all.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center glass-card glass-hover h-full border-white/40">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-16 mb-24 border border-white/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-4xl font-bold tracking-tight mb-8 relative z-10">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg relative z-10">
              <p>
                Founded in 2018 by Mr. Surjit Singh, NSB TELECOM began with a clear mission: to connect businesses with reliable, innovative technology solutions. Despite its name, the firm operates outside the telecommunications sector — focusing instead on enterprise IT infrastructure, system integration, and maintenance.
              </p>
              <p>
                Today, we serve prestigious clients including government departments, public sector undertakings, and major corporations across India, delivering comprehensive solutions in IT infrastructure, network setup, cybersecurity, and digital transformation. Our team of expert engineers, consultants, and innovators work tirelessly to ensure our clients stay ahead in the digital age.
              </p>
              <p>
                With strategic partnerships with leading technology providers and a commitment to continuous innovation, NSB TELECOM is positioned at the forefront of India's digital revolution, helping businesses navigate complexity and achieve sustainable growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-center">Our Esteemed Clients</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              Trusted by leading government organizations and public sector enterprises across India
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="glass-card glass-hover text-center h-full cursor-zoom-in border-white/40 overflow-hidden group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                        <CardHeader>
                          <div className="h-32 flex items-center justify-center mb-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 relative group-hover:bg-white/80 transition-colors">
                            <img 
                              src={client.logo} 
                              alt={`${client.name} logo - ${client.fullName || client.name}`}
                              className="max-h-24 max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center backdrop-blur-[2px]">
                              <span className="text-sm text-primary font-bold uppercase tracking-widest bg-white/90 px-4 py-2 rounded-full shadow-lg">View Details</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl">{client.name}</CardTitle>
                          {client.fullName && (
                            <p className="text-sm text-muted-foreground mt-2">{client.fullName}</p>
                          )}
                        </CardHeader>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl glass-card border-2 border-white/50 backdrop-blur-2xl">
                      <div className="flex flex-col items-center space-y-8 p-8">
                        <div className="w-full bg-white/80 dark:bg-gray-800/80 rounded-2xl p-12 shadow-2xl flex items-center justify-center">
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo - ${client.fullName || client.name}`}
                            className="max-h-[300px] max-w-full object-contain"
                          />
                        </div>
                        <div className="text-center space-y-4">
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">{client.name}</h3>
                          {client.fullName && (
                            <p className="text-xl text-muted-foreground">{client.fullName}</p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}