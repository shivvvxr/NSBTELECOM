import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wrench, Network, Layers, Users, Car, Camera, Headphones, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      id: "it-amc",
      icon: Wrench,
      title: "IT AMC & Maintenance",
      description: "Comprehensive annual maintenance contracts for all IT infrastructure",
      features: [
        "Preventive Maintenance",
        "On-site Support",
        "Hardware Repairs",
        "Software Updates",
      ],
    },
    {
      id: "network-setup",
      icon: Network,
      title: "Network Setup & Configuration",
      description: "Professional network design, installation, and configuration services",
      features: [
        "LAN/WAN Setup",
        "Router Configuration",
        "Network Security",
        "WiFi Solutions",
      ],
    },
    {
      id: "system-integration",
      icon: Layers,
      title: "System Integration & Deployment",
      description: "End-to-end system integration and deployment solutions",
      features: [
        "Hardware Integration",
        "Software Deployment",
        "System Testing",
        "Migration Services",
      ],
    },
    {
      id: "manpower",
      icon: Users,
      title: "Manpower Supply / Contract Staffing",
      description: "Skilled IT professionals for temporary and contract positions",
      features: [
        "IT Technicians",
        "Network Engineers",
        "System Administrators",
        "Support Staff",
      ],
    },
    {
      id: "car-rental",
      icon: Car,
      title: "Car Rental / Vehicle Leasing Services",
      description: "Flexible vehicle rental and leasing solutions for businesses",
      features: [
        "Short-term Rentals",
        "Long-term Leasing",
        "Corporate Packages",
        "Maintenance Included",
      ],
    },
    {
      id: "cctv",
      icon: Camera,
      title: "CCTV Installation & Surveillance Setup",
      description: "Advanced security camera systems and surveillance solutions",
      features: [
        "IP Camera Installation",
        "DVR/NVR Setup",
        "Remote Monitoring",
        "24/7 Recording",
      ],
    },
    {
      id: "maintenance-support",
      icon: Headphones,
      title: "Annual Maintenance Support",
      description: "Ongoing technical support and maintenance services",
      features: [
        "Help Desk Support",
        "Remote Assistance",
        "Regular Check-ups",
        "Priority Response",
      ],
    },
    {
      id: "server-setup",
      icon: Server,
      title: "Server & Data Center Setup",
      description: "Professional server installation and data center infrastructure",
      features: [
        "Server Installation",
        "Rack Setup",
        "Cooling Solutions",
        "Power Management",
      ],
    },
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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions and services tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <Card className="h-full border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}