import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const values = [
    { icon: Target, title: "Innovation", description: "Pioneering cutting-edge solutions" },
    { icon: Eye, title: "Vision", description: "Leading the digital transformation" },
    { icon: Award, title: "Excellence", description: "Delivering superior quality" },
    { icon: Users, title: "Partnership", description: "Building lasting relationships" },
  ];

  const clients = [
    { name: "CONCOR", fullName: "Container Corporation of India" },
    { name: "DFCCIL", fullName: "Dedicated Freight Corridor Corporation of India Limited" },
    { name: "IMD", fullName: "India Meteorological Department" },
    { name: "CESTAT", fullName: "Customs, Excise & Service Tax Appellate Tribunal" },
    { name: "IOCL", fullName: "Indian Oil Corporation Limited" },
    { name: "Department of Revenue", fullName: "" },
    { name: "NPS Trust", fullName: "National Pension System Trust" },
    { name: "PWD", fullName: "Public Works Department" },
    { name: "DGGI", fullName: "Directorate General of GST Intelligence" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">About NSB TELECOM</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established in 2018 by Mr. Surjit Singh, NSB TELECOM is a trusted name in IT infrastructure, integration, and maintenance — delivering reliable, innovative, and tailored tech solutions to corporate and government clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card glass-hover rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class IT infrastructure solutions that enable businesses to connect, innovate, and grow in an increasingly digital world. We are committed to excellence, reliability, and customer success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card glass-hover rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner in India, recognized for innovation, integrity, and impact. We envision a future where seamless connectivity and intelligent technology drive sustainable growth for all.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center glass-card glass-hover">
                  <CardHeader>
                    <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Our Esteemed Clients</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trusted by leading government organizations and public sector enterprises across India
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card glass-hover text-center h-full">
                    <CardHeader>
                      <Building2 className="h-10 w-10 mx-auto text-primary mb-3" />
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                      {client.fullName && (
                        <p className="text-xs text-muted-foreground mt-2">{client.fullName}</p>
                      )}
                    </CardHeader>
                  </Card>
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