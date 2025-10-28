import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Network, Cloud, Shield, Brain, Headphones, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Network,
      title: "Telecom Infrastructure",
      description: "End-to-end network design, deployment, and optimization",
      features: [
        "5G Network Solutions",
        "Fiber Optic Infrastructure",
        "Network Modernization",
        "IoT Connectivity",
      ],
    },
    {
      icon: Cloud,
      title: "IT Consulting & Cloud Services",
      description: "Strategic IT consulting and cloud transformation",
      features: [
        "Cloud Migration",
        "Multi-Cloud Strategy",
        "Infrastructure as Code",
        "DevOps Implementation",
      ],
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description: "Intelligent insights and predictive analytics",
      features: [
        "Machine Learning Models",
        "Big Data Processing",
        "Predictive Analytics",
        "Business Intelligence",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security for your digital infrastructure",
      features: [
        "Threat Detection & Response",
        "Security Audits",
        "Compliance Management",
        "Zero Trust Architecture",
      ],
    },
    {
      icon: Headphones,
      title: "Managed IT & Network Support",
      description: "24/7 monitoring and support for your IT infrastructure",
      features: [
        "Network Monitoring",
        "Help Desk Support",
        "System Maintenance",
        "Performance Optimization",
      ],
    },
    {
      icon: Database,
      title: "Data Center Solutions",
      description: "Scalable and secure data center infrastructure",
      features: [
        "Colocation Services",
        "Disaster Recovery",
        "Backup Solutions",
        "Edge Computing",
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
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
