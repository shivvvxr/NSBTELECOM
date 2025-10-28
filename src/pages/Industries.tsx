import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Heart, Landmark, ShoppingBag, Factory, Radio } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Industries() {
  const industries = [
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Next-gen network infrastructure and 5G solutions for telecom operators",
    },
    {
      icon: Landmark,
      title: "Finance & Banking",
      description: "Secure, compliant technology solutions for financial institutions",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health platforms and secure patient data management",
    },
    {
      icon: Building2,
      title: "Government",
      description: "Smart city solutions and secure government infrastructure",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Omnichannel solutions and cloud-based retail platforms",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions and IoT-enabled smart factories",
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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering specialized technology solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <industry.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
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
