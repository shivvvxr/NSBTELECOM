import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Network, Layers, Users, Car, Camera, Headphones, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BlurText from "@/components/BlurText";
import GlareHover from "@/components/GlareHover";
import InfiniteMenu from "@/components/InfiniteMenu";

export default function Services() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1000&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1558494949-ef526b004297?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  const menuItems = services.map(service => ({
    image: service.image,
    link: `#${service.id}`,
    title: service.title,
    description: service.description
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Parallax Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[50vh] flex flex-col justify-center items-center">
        <motion.div 
            style={{ y: heroY, opacity: 0.4 }}
            className="absolute inset-0 z-0"
        >
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Services Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </motion.div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BlurText
                text="Our Services"
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-blue-600 dark:text-blue-500 justify-center text-center"
                delay={100}
                animateBy="words"
                direction="top"
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive IT solutions and services tailored to meet your business needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Infinite Menu Section */}
      <section className="h-[600px] w-full relative overflow-hidden bg-black">
        <InfiniteMenu items={menuItems} />
      </section>

      <div className="pb-20 px-4 pt-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                variants={itemVariants}
                className="scroll-mt-28"
              >
                <GlareHover borderRadius="0.75rem">
                  <Card className="h-full border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 glass-card">
                    <CardHeader>
                      <div className="p-3 w-fit rounded-xl bg-primary/10 mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </GlareHover>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}