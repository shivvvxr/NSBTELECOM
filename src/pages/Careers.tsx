import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      title: "Senior Network Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Austin, TX",
      type: "Full-time",
    },
    {
      title: "IT Consultant",
      department: "Consulting",
      location: "Chicago, IL",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build your career with a global leader in technology and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted rounded-lg p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why NSB TELECOM?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Innovation Culture</h3>
                <p className="text-sm">Work on cutting-edge projects that shape the future of technology</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Global Impact</h3>
                <p className="text-sm">Make a difference for clients across 50+ countries worldwide</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Career Growth</h3>
                <p className="text-sm">Continuous learning opportunities and clear career progression paths</p>
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">Current Openings</h2>
          <div className="grid gap-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-3">
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge>{job.type}</Badge>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
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
