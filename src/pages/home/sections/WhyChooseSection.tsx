import ScrollFloat from "@/components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Reliability",
    description: "With a 99.9% uptime SLA and years of excellence, we ensure your critical IT infrastructure is always running at peak performance.",
    accent: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Solutions",
    description: "From network setup and CCTV surveillance to software development and manpower supply, we offer end-to-end IT services under one roof.",
    accent: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Our dedicated support team is available to address your technical issues swiftly, minimizing downtime and keeping your business moving forward.",
    accent: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Clock,
    title: "Future-Ready Technology",
    description: "We stay ahead of the curve, implementing the latest technologies and best practices to future-proof your IT investments.",
    accent: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-10 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4 mb-10 text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top 85%"
          scrollEnd="bottom 50%"
          stagger={0.03}
          containerClassName="mb-4"
          textClassName="text-4xl font-bold tracking-tight text-foreground"
        >
          Why Choose NSB TELECOM?
        </ScrollFloat>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground font-normal">We bring expertise, innovation, and reliability to every project.</p>
        </div>
      </div>

      <div className="w-full relative">
        <ScrollStack itemDistance={50} itemScale={0.05} itemStackDistance={20} stackPosition="10%" scaleEndPosition="5%" blurAmount={2} rotationAmount={2} useWindowScroll>
          {features.map((feature) => (
            <ScrollStackItem key={feature.title}>
              <div className="flex flex-col items-center text-center h-full justify-center gap-6 px-4">
                <div className={`p-4 rounded-full ${feature.accent}`}>
                  <feature.icon className="w-16 h-16" />
                </div>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-xl text-muted-foreground max-w-2xl">{feature.description}</p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
