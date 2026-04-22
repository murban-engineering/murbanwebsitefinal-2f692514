import { useState, useRef } from "react";
import { Mail, MapPin, Send, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";
import contactHero from "@/assets/contact-hero.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    "NDT Inspection Services",
    "API 653 Tank Inspection",
    "API 510 Pressure Vessel",
    "API 570 Piping Inspection",
    "Phased Array Testing",
    "3D Laser Scanning",
    "UAV Inspection",
    "Engineering & Fabrication",
    "Tank Calibration",
    "General Inquiry",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({ ...prev, file: "File size must be less than 10MB" }));
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setErrors(prev => ({ ...prev, file: "Please upload PDF, Word document, or image files only" }));
        return;
      }
      setSelectedFile(file);
      setErrors(prev => ({ ...prev, file: "" }));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeLocations = [
    {
      title: "Mombasa HQ",
      addressLine1: "Port Reitz Road, Off Airport Road",
      addressLine2: "P.O. Box 99215 – 80107",
      city: "Mombasa, Kenya",
      tel: "+254 202650168",
      mob: "+254 724966694",
    },
    {
      title: "Nairobi Office",
      addressLine1: "Kofisi Karen Road",
      addressLine2: "P.O. Box 856 00606",
      city: "Nairobi, Kenya",
      tel: "+254 203673821",
      mob: "+254 703041821",
    },
  ];

  const features = [
    { icon: Clock, title: "24hr Response", description: "Quick turnaround on all inquiries" },
    { icon: CheckCircle2, title: "Free Consultation", description: "No-obligation project assessment" },
    { icon: MapPin, title: "On-Site Service", description: "We come to your location" },
  ];

  return (
    <div className="min-h-screen pt-20 relative bg-background">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Industrial storage facility"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <AnimateOnScroll direction="left">
              <Badge variant="outline" className="mb-8 px-6 py-2.5 text-sm font-medium tracking-wide border-primary/30 bg-primary/5 text-primary">
                Contact Us
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                <span className="text-foreground">Get in</span><br />
                <span className="text-primary">Touch</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={150}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Ready to discuss your inspection needs? Our team is here to help with your next project.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={feature.title} className="border-border/40 bg-card/80 backdrop-blur-sm rounded-2xl hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimateOnScroll direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                
                <Card className="border-border/40 rounded-[2rem] overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-2 rounded-xl ${errors.name ? "border-destructive" : ""}`}
                          />
                          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-2 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                          />
                          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`mt-2 rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                          />
                        </div>
                        <div>
                          <Label htmlFor="serviceType" className="text-sm font-medium">Service Type *</Label>
                          <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                            <SelectTrigger className={`mt-2 rounded-xl ${errors.serviceType ? "border-destructive" : ""}`}>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service} value={service}>{service}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.serviceType && <p className="text-destructive text-sm mt-1">{errors.serviceType}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`mt-2 rounded-xl ${errors.message ? "border-destructive" : ""}`}
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Attach File</Label>
                        <div className="mt-2">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          {!selectedFile ? (
                            <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} className="w-full rounded-xl">
                              Upload Document or Image
                            </Button>
                          ) : (
                            <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-muted/30">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{selectedFile.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                              </div>
                              <Button type="button" variant="ghost" size="sm" onClick={handleRemoveFile}>Remove</Button>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">PDF, Word, or images up to 10MB</p>
                          {errors.file && <p className="text-destructive text-sm mt-1">{errors.file}</p>}
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full rounded-xl" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Locations</h2>
                  <p className="text-muted-foreground mb-8">Visit us at one of our offices or reach out via email.</p>
                </div>

                {officeLocations.map((office, index) => (
                  <Card key={office.title} className="border-border/40 rounded-2xl hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{office.title}</h3>
                          <p className="text-muted-foreground text-sm">{office.city}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <p>{office.addressLine1}</p>
                        <p>{office.addressLine2}</p>
                      </div>
                      <div className="space-y-2">
                        <a href={`tel:${office.tel.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                          <Phone className="h-4 w-4" />
                          {office.tel}
                        </a>
                        <a href={`tel:${office.mob.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                          <Phone className="h-4 w-4" />
                          {office.mob}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Email Card */}
                <Card className="border-border/40 rounded-2xl bg-primary/5 hover:shadow-card-hover transition-all duration-400">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                        <a href="mailto:info@murban-eng.com" className="text-lg font-semibold text-primary hover:underline">
                          info@murban-eng.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border-border/40 rounded-2xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      title="Murban Engineering Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.0!2d39.6308!3d-4.0742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c15%3A0x3b46b3c6a9bd771b!2sPort%20Reitz%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske&zoom=14"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={industrialPlant} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Need Urgent Support?
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Our team is available 24/7 for emergency inspection services across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="rounded-full px-10 bg-white text-secondary hover:bg-white/90">
                  <a href="tel:+254724966694">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-10 border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">
                    View Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Contact;
