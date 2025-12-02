import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const bgY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
      <motion.div style={{ y: bgY, opacity: 0.1 }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technology background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent pointer-events-none z-10"
      />

      <div className="container mx-auto max-w-6xl relative z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">Enterprise IT Solutions Since 2018</span>
          </motion.div>

          <div className="flex flex-col items-center mb-6">
            <BlurText
              text="Connecting the Future"
              className="text-5xl md:text-7xl font-bold tracking-tight text-blue-600 dark:text-blue-500 justify-center text-center"
              delay={150}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="of Technology"
              className="text-5xl md:text-7xl font-bold tracking-tight text-green-600 dark:text-green-500 justify-center text-center"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              NSB TELECOM delivers cutting-edge IT infrastructure, system integration, and maintenance solutions that empower businesses to thrive in the digital age.
            </p>
          </div>

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
  );
}
