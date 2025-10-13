import { Building2, Wrench, Shield, Users, Lightbulb, BarChart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Comprehensive structural design, analysis, and assessment services for buildings and infrastructure.",
      features: [
        "Structural design and calculations",
        "Load analysis and optimization",
        "Seismic and wind engineering",
        "Foundation design",
        "Structural health monitoring",
      ],
    },
    {
      icon: Wrench,
      title: "MEP Engineering",
      description: "Integrated mechanical, electrical, and plumbing system design for optimal building performance.",
      features: [
        "HVAC system design",
        "Electrical distribution systems",
        "Plumbing and drainage design",
        "Fire protection systems",
        "Energy efficiency optimization",
      ],
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, timeline adherence, and budget control.",
      features: [
        "Project planning and scheduling",
        "Resource allocation",
        "Risk management",
        "Quality assurance",
        "Stakeholder coordination",
      ],
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert engineering consultation for complex technical challenges and feasibility studies.",
      features: [
        "Technical feasibility studies",
        "Design review and optimization",
        "Code compliance verification",
        "Value engineering",
        "Expert witness services",
      ],
    },
    {
      icon: Lightbulb,
      title: "Sustainable Design",
      description: "Green building design and LEED certification support for environmentally conscious projects.",
      features: [
        "LEED certification support",
        "Energy modeling and analysis",
        "Renewable energy integration",
        "Sustainable material selection",
        "Environmental impact assessment",
      ],
    },
    {
      icon: BarChart,
      title: "Building Information Modeling",
      description: "Advanced BIM services for enhanced project visualization, coordination, and lifecycle management.",
      features: [
        "3D modeling and visualization",
        "Clash detection and coordination",
        "Quantity takeoffs",
        "4D scheduling integration",
        "Facility management integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Comprehensive engineering solutions designed to meet your project needs with precision and expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border">
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures project success from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and project goals" },
              { step: "02", title: "Design", desc: "Creating innovative solutions tailored to your needs" },
              { step: "03", title: "Development", desc: "Executing the plan with precision and expertise" },
              { step: "04", title: "Delivery", desc: "Ensuring successful project completion and support" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-secondary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Ready to start your project? Contact us today to discuss how our engineering expertise can help bring your vision to life.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
