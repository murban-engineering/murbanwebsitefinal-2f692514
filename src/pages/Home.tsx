import { ArrowRight, CheckCircle, Building2, Wrench, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-engineering.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import projectImage from "@/assets/project-showcase.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Comprehensive structural design and analysis for commercial and residential projects.",
    },
    {
      icon: Wrench,
      title: "MEP Engineering",
      description: "Mechanical, electrical, and plumbing systems designed for optimal efficiency.",
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, timeline, and budget adherence.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert engineering consultation for complex technical challenges.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "200+", label: "Expert Engineers" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const clients = ["Emaar", "Dubai Properties", "Aldar", "Damac", "Nakheel"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Engineering Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10 animate-fade-in">
          <div className="max-w-3xl text-secondary-foreground">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Engineering Excellence, Delivered
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transforming visions into reality with innovative solutions and unmatched expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-background/10 backdrop-blur-sm border-secondary-foreground/20 text-secondary-foreground hover:bg-background/20">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Engineering the Future
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 25 years of experience, Murban Engineering has established itself as a trusted partner in delivering complex engineering projects across the region.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Innovative solutions backed by cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Dedicated team of certified engineering professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Commitment to sustainability and environmental responsibility</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src={projectImage}
                alt="Featured Project"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can bring your vision to life
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
