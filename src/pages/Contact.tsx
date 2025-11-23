import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-body text-foreground">Email</p>
                      <p className="font-body text-muted-foreground">
                        smutskeanu4@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-body text-foreground">Phone</p>
                      <p className="font-body text-muted-foreground">
                        0665304773
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-display text-xl text-foreground mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 font-body text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
