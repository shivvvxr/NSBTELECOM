import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Laptop, Monitor, Server, Cpu, Printer, Camera, Presentation, Battery, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GlareHover from "@/components/GlareHover";
import InfiniteMenu from "@/components/InfiniteMenu";

export default function Products() {
  const products = [
    {
      id: "laptops",
      icon: Laptop,
      title: "Laptops & Notebooks",
      description: "Wide range of business and personal laptops from leading brands",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "desktops",
      icon: Monitor,
      title: "Desktops & Computers",
      description: "High-performance desktop computers for office and professional use",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "servers",
      icon: Server,
      title: "Servers",
      description: "Enterprise-grade servers for data centers and business applications",
      image: "https://images.unsplash.com/photo-1558494949-ef526b004297?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "workstations",
      icon: Cpu,
      title: "Workstations",
      description: "Powerful workstations for design, engineering, and intensive computing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "printers",
      icon: Printer,
      title: "Printers",
      description: "Multi-function printers, scanners, and printing solutions",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "cctv",
      icon: Camera,
      title: "CCTV / Surveillance",
      description: "Advanced security cameras and surveillance equipment",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "interactive-panels",
      icon: Presentation,
      title: "Interactive Panels",
      description: "Smart interactive displays for meetings and presentations",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "ups",
      icon: Battery,
      title: "UPS",
      description: "Uninterruptible power supply systems for business continuity",
      image: "https://images.unsplash.com/photo-1628133287827-2522852fb9f3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "network-switches",
      icon: Network,
      title: "Network Switches",
      description: "Managed and unmanaged network switches for all business sizes",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  const menuItems = products.map(product => ({
    image: product.image,
    link: `#${product.id}`,
    title: product.title,
    description: product.description
  }));

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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality IT hardware and equipment from trusted manufacturers
            </p>
          </motion.div>

          <div className="h-[500px] w-full relative overflow-hidden bg-black rounded-xl mb-16">
            <InfiniteMenu items={menuItems} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <GlareHover borderRadius="0.75rem">
                  <Card className="h-full border hover:shadow-lg transition-shadow text-center">
                    <CardHeader>
                      <product.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </GlareHover>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}