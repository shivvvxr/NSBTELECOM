import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "The Future of 5G: Transforming Industries",
      category: "Telecommunications",
      date: "March 15, 2024",
      excerpt: "Exploring how 5G technology is revolutionizing connectivity and enabling new business models across industries.",
    },
    {
      title: "Cloud Migration Best Practices for Enterprises",
      category: "Cloud Computing",
      date: "March 10, 2024",
      excerpt: "A comprehensive guide to successful cloud migration strategies and avoiding common pitfalls.",
    },
    {
      title: "AI-Driven Cybersecurity: The Next Frontier",
      category: "Cybersecurity",
      date: "March 5, 2024",
      excerpt: "How artificial intelligence is enhancing threat detection and response capabilities.",
    },
    {
      title: "Digital Transformation in Healthcare",
      category: "Healthcare",
      date: "February 28, 2024",
      excerpt: "Leveraging technology to improve patient outcomes and operational efficiency.",
    },
    {
      title: "Edge Computing: Bringing Intelligence Closer",
      category: "Technology",
      date: "February 20, 2024",
      excerpt: "Understanding the benefits and use cases of edge computing in modern infrastructure.",
    },
    {
      title: "Sustainable IT: Green Technology Solutions",
      category: "Sustainability",
      date: "February 15, 2024",
      excerpt: "How businesses can reduce their carbon footprint through sustainable IT practices.",
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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Innovation & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest trends, research, and thought leadership in technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-primary hover:underline cursor-pointer">
                      Read more →
                    </span>
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
