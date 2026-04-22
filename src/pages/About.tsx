import {
  BadgeCheck,
  Crosshair,
  Telescope,
  ShieldCheck,
  HeartHandshake,
  FlameKindling,
  UsersRound,
  TrendingUp,
  MapPin,
  Award,
  Users,
  Globe,
  Target,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AfricaMap from "@/components/AfricaMap";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import portSunset from "@/assets/port-sunset.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";

const About = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Globe, value: "35+", label: "Countries" },
    { icon: Users, value: "500+", label: "Projects Annually" },
    { icon: Target, value: "100%", label: "Safety Compliance" },
  ];

  const foundationValues = [
    {
      icon: HeartHandshake,
      title: "Respect & Diversity",
      description: "We treat our team, clients, communities, and the environment with the highest respect.",
    },
    {
      icon: ShieldCheck,
      title: "Ethics & Integrity",
      description: "We uphold the highest standards of honesty and ethical business practices.",
    },
    {
      icon: Crosshair,
      title: "Safety & Sustainability",
      description: "Safety and sustainability define how we operate and protect our environment.",
    },
  ];

  const driveValues = [
    {
      icon: FlameKindling,
      title: "Passion for Innovation",
      description: "We constantly explore new technologies, methods, and ideas to improve how we deliver value.",
    },
    {
      icon: UsersRound,
      title: "Customer Obsession",
      description: "We go beyond meeting expectations — we anticipate needs and build lasting relationships.",
    },
    {
      icon: TrendingUp,
      title: "Drive for Results",
      description: "We focus on delivering measurable, impactful outcomes with speed and excellence.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative bg-background">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portSunset}
            alt="Port machinery at sunset"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <AnimateOnScroll direction="left">
              <Badge variant="outline" className="mb-8 px-6 py-2.5 text-sm font-medium tracking-wide border-primary/30 bg-primary/5 text-primary">
                About Us
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                <span className="text-foreground">About</span><br />
                <span className="text-primary">Murban</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={150}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Specialist in Asset Integrity, Inspection, and Non-Destructive Testing — serving critical infrastructure across Africa since 2007.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="border-border/40 bg-card/80 backdrop-blur-sm rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 max-w-6xl mx-auto">
            <AnimateOnScroll direction="left">
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                    Who We Are
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Company Profile</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Murban Engineering is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the oil & gas, energy, marine, and industrial sectors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience, we operate across Africa. Our services help clients extend asset life, ensure regulatory compliance, and minimize downtime.
                </p>
                <Card className="border-border/40 bg-muted/30 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">We operate through two divisions:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">Murban Inspection Services</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">Murban Engineering Services</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="/_MG_2642%20-%20Copy%20(2).jpg"
                    alt="Murban Engineering inspection team"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-card-hover border border-border/50">
                  <p className="text-3xl font-bold text-primary mb-1">2007</p>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-32 relative bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up" className="text-center mb-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Where We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operating across 35+ countries throughout Africa
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={200}>
            <AfricaMap />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Purpose */}
            <AnimateOnScroll direction="up">
              <Card className="border-border/40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[2rem] overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We exist to enhance safety, reliability, and performance in critical infrastructure through innovative inspection and engineering solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            
            {/* Vision & Mission Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll direction="left" delay={100}>
                <Card className="h-full border-border/40 rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                  <CardContent className="p-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                      <Telescope className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the undisputed leaders in specialized Non-Destructive Testing, inspection, and related services through innovation, experience, and advanced technology.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right" delay={200}>
                <Card className="h-full border-border/40 rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                  <CardContent className="p-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                      <Crosshair className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We deliver value to our clients by executing world-class asset integrity services that maximize uptime and safety.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Field Work Gallery */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                Excellence in Action
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Field Work</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Delivering precision and safety across Africa&apos;s critical infrastructure
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll direction="left" delay={100}>
              <div className="group relative overflow-hidden rounded-[2rem] bg-card hover:shadow-card-hover transition-all duration-400">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={fieldWork2}
                    alt="Industrial tank inspection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">Advanced NDT Inspections</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our certified technicians utilize cutting-edge non-destructive testing equipment for comprehensive asset integrity assessments.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={200}>
              <div className="group relative overflow-hidden rounded-[2rem] bg-card hover:shadow-card-hover transition-all duration-400">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={fieldWork5}
                    alt="Precision measurement"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">Precision Engineering</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From dimensional verification to corrosion mapping, our teams deliver accurate measurements and detailed analysis.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={industrialPlant} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-white/30 bg-white/10 text-white">
                Our Foundation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Values</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our Compass: How We Work and What We Stand For
              </p>
            </div>
          </AnimateOnScroll>

          {/* Foundation Values */}
          <div className="mb-20">
            <AnimateOnScroll direction="up">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Foundation Values</h3>
              <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
                These define how we treat our team, clients, communities, and the environment.
              </p>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {foundationValues.map((value, index) => (
                <AnimateOnScroll key={value.title} direction="up" delay={index * 100}>
                  <Card className="h-full border-border/20 bg-card/95 backdrop-blur-sm rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
                        <value.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* What Drives Us */}
          <div>
            <AnimateOnScroll direction="up">
              <h3 className="text-2xl font-bold mb-10 text-center text-white">What Drives Us</h3>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {driveValues.map((value, index) => (
                <AnimateOnScroll key={value.title} direction="up" delay={index * 100}>
                  <Card className="h-full border-border/20 bg-card/95 backdrop-blur-sm rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                        <value.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let&apos;s discuss how Murban Engineering can support your inspection and integrity needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="rounded-full px-10 shadow-lg">
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-10">
                  <Link to="/services">
                    View Services
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

export default About;
