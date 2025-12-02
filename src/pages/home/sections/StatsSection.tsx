import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Global Clients" },
  { icon: Award, value: "Since 2018", label: "Years of Excellence" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime SLA" },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
  );
}
