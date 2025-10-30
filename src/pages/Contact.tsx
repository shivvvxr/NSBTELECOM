import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const createContact = useMutation(api.contacts.create);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      await createContact(data);
      toast.success("Thank you! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border text-center glass-card glass-hover">
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Visit Us</CardTitle>
                <CardDescription>
                  Shakti Khand 1, Indirapuram<br />
                  Ghaziabad, Uttar Pradesh
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border text-center glass-card glass-hover">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
                <CardDescription>
                  nsb85428@gmail.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border text-center glass-card glass-hover">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Business Hours</CardTitle>
                <CardDescription>
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM IST
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border max-w-3xl mx-auto glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required className="glass-input" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required className="glass-input" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" className="glass-input" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" className="glass-input" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select name="service">
                      <SelectTrigger className="glass-input">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="telecom">Telecom Infrastructure</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="security">Cybersecurity</SelectItem>
                        <SelectItem value="ai">AI & Data Analytics</SelectItem>
                        <SelectItem value="support">Managed IT Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" rows={5} required className="glass-input" />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}