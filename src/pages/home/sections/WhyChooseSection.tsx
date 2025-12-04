import ScrollFloat from "@/components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import AIGlyphs from "@/components/AIGlyphs";

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Reliability",
    description: "99.9% uptime SLA ensuring critical infrastructure performance.",
    accent: "text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Solutions",
    description: "End-to-end IT services from network setup to manpower supply.",
    accent: "text-primary",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Dedicated support team minimizing downtime swiftly.",
    accent: "text-primary",
  },
  {
    icon: Clock,
    title: "Future-Ready Tech",
    description: "Implementing latest technologies to future-proof investments.",
    accent: "text-primary",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <AIGlyphs />
      <div className="container mx-auto max-w-6xl px-4 mb-16 text-center relative z-10">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top 85%"
          scrollEnd="bottom 50%"
          stagger={0.03}
          containerClassName="mb-4"
          textClassName="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
        >
          Why Choose NSB TELECOM?
        </ScrollFloat>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground font-light">Expertise, innovation, and reliability in every module.</p>
        </div>
      </div>

      <div className="w-full relative">
        <ScrollStack itemDistance={50} itemScale={0.05} itemStackDistance={20} stackPosition="10%" scaleEndPosition="5%" blurAmount={2} rotationAmount={2} useWindowScroll>
          {features.map((feature) => (
            <ScrollStackItem key={feature.title}>
              <div className="flex flex-col items-center text-center h-full justify-center gap-6 px-8 glass-card rounded-3xl border border-white/50">
                <div className={`p-6 rounded-full bg-primary/10 ${feature.accent}`}>
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-xl text-muted-foreground max-w-xl font-light">{feature.description}</p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}