import { motion } from "framer-motion";

const clients = [
  { name: "CONCOR", logo: "https://harmless-tapir-303.convex.cloud/api/storage/298bb024-43c4-4fb8-80dc-298601d6f43b" },
  { name: "DFCCIL", logo: "https://harmless-tapir-303.convex.cloud/api/storage/52575fe2-658a-47eb-a04b-ffe096ac0ab7" },
  { name: "IMD", logo: "https://harmless-tapir-303.convex.cloud/api/storage/7f6e804d-c14c-4372-aaa2-a47e4fd897ee" },
  { name: "CESTAT", logo: "https://harmless-tapir-303.convex.cloud/api/storage/823ea33d-fe46-49a4-9ead-9c9f97c514fc" },
  { name: "IOCL", logo: "https://harmless-tapir-303.convex.cloud/api/storage/1581a6ff-89ac-46ea-8518-e3d6daf9dcdd" },
  { name: "Dept of Revenue", logo: "https://harmless-tapir-303.convex.cloud/api/storage/975ef62f-afa2-40cb-a1f3-ec03c851b098" },
  { name: "NPS Trust", logo: "https://harmless-tapir-303.convex.cloud/api/storage/ef7b0450-6b1e-4a67-8069-874fd8b7c97c" },
  { name: "PWD", logo: "https://harmless-tapir-303.convex.cloud/api/storage/0e3de3d8-8e8c-45dd-b2a8-b8909f3c3e43" },
  { name: "DGGI", logo: "https://harmless-tapir-303.convex.cloud/api/storage/bf95f9fc-ac6f-43e0-88d4-37ffbe92c723" },
];

export default function ClientsSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-muted-foreground mb-2">Trusted Entities</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-4 rounded-xl hover:bg-white/50 transition-colors duration-300 overflow-hidden"
            >
              {/* Volumetric Scanning Beam Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-y-full group-hover:animate-[scan-vertical_2s_ease-in-out_infinite] pointer-events-none blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-y-full group-hover:animate-[scan-vertical_2s_ease-in-out_infinite] pointer-events-none delay-75" />
              
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-colors duration-300" />
              
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply relative z-10"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}