import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function CtaSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-green-600/20 to-blue-800/20 pointer-events-none" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="glass-card rounded-2xl p-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business?</h2>
          <div className="mb-8">
            <p className="text-lg text-muted-foreground font-normal">Let's discuss how NSB TELECOM can help you achieve your digital transformation goals.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="text-base shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
