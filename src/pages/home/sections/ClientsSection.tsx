import { motion } from "framer-motion";

const clients = [
  { name: "CONCOR", fullName: "Container Corporation of India", logo: "https://harmless-tapir-303.convex.cloud/api/storage/298bb024-43c4-4fb8-80dc-298601d6f43b" },
  { name: "DFCCIL", fullName: "Dedicated Freight Corridor Corporation of India Limited", logo: "https://harmless-tapir-303.convex.cloud/api/storage/52575fe2-658a-47eb-a04b-ffe096ac0ab7" },
  { name: "IMD", fullName: "India Meteorological Department", logo: "https://harmless-tapir-303.convex.cloud/api/storage/7f6e804d-c14c-4372-aaa2-a47e4fd897ee" },
  { name: "CESTAT", fullName: "Customs, Excise & Service Tax Appellate Tribunal", logo: "https://harmless-tapir-303.convex.cloud/api/storage/823ea33d-fe46-49a4-9ead-9c9f97c514fc" },
  { name: "IOCL", fullName: "Indian Oil Corporation Limited", logo: "https://harmless-tapir-303.convex.cloud/api/storage/1581a6ff-89ac-46ea-8518-e3d6daf9dcdd" },
  { name: "Department of Revenue", fullName: "", logo: "https://harmless-tapir-303.convex.cloud/api/storage/975ef62f-afa2-40cb-a1f3-ec03c851b098" },
  { name: "NPS Trust", fullName: "National Pension System Trust", logo: "https://harmless-tapir-303.convex.cloud/api/storage/ef7b0450-6b1e-4a67-8069-874fd8b7c97c" },
  { name: "PWD", fullName: "Public Works Department", logo: "https://harmless-tapir-303.convex.cloud/api/storage/0e3de3d8-8e8c-45dd-b2a8-b8909f3c3e43" },
  { name: "DGGI", fullName: "Directorate General of GST Intelligence", logo: "https://harmless-tapir-303.convex.cloud/api/storage/bf95f9fc-ac6f-43e0-88d4-37ffbe92c723" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Trusted by Leading Organizations</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground font-normal">Serving government and corporate clients across India</p>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-8 whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="glass-card rounded-lg px-8 py-6 inline-flex flex-col items-center justify-center min-w-[200px] h-[140px] bg-white/50 dark:bg-gray-800/50 group"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo${client.fullName ? ` - ${client.fullName}` : ""}`}
                  className="max-h-[60px] max-w-[140px] object-contain transition-transform duration-300 hover:scale-110 mb-2"
                  loading="lazy"
                />
                <div className="text-center">
                  <p className="text-xs font-semibold text-foreground">{client.name}</p>
                  {client.fullName && <p className="text-[10px] text-muted-foreground line-clamp-2">{client.fullName}</p>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
