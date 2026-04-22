import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Shield,
  Zap,
  Activity,
  Cpu,
  FileSearch,
  Hammer,
  ChevronDown,
  Play,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Testimonials from "@/components/Testimonials";

import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import modernOilFactory from "@/assets/modern-oil-factory.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";
import storageTanks from "@/assets/storage-tanks.jpg";

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "General NDT",
      description: "Comprehensive non-destructive testing using magnetic particle, dye penetrant, ultrasonic, and radiographic methods.",
      forText: "Oil & gas, power plants, refineries",
      slug: "ndt-inspection-services",
      number: "01",
    },
    {
      icon: Cpu,
      title: "Advanced NDT",
      description: "Cutting-edge inspection techniques including Phased Array UT, TOFD, ACFM, and AUT for complex assets.",
      forText: "Subsea, aerospace, high-pressure systems",
      slug: "phased-array-ultrasonic-testing",
      number: "02",
    },
    {
      icon: FileSearch,
      title: "Engineering Assessments",
      description: "API 570, API 653, fitness-for-service evaluations and risk-based inspection programs.",
      forText: "Process plants, storage terminals",
      slug: "api-570-piping-inspection-and-certification",
      number: "03",
    },
    {
      icon: Hammer,
      title: "Engineering & Fabrication",
      description: "Structural fabrication, tank construction, piping works delivered to international codes.",
      forText: "Industrial plants, refineries",
      slug: "tank-calibration-services",
      number: "04",
    },
  ];

  const stats = [
    { value: "2007", label: "Established", suffix: "" },
    { value: "20", label: "Years Experience", suffix: "+" },
    { value: "35", label: "Countries", suffix: "+" },
    { value: "6,500", label: "Inspections", suffix: "+" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Certified Excellence",
      description: "API, ISO, and ASME certified professionals delivering industry-leading standards.",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 emergency inspection services with mobile teams across Africa.",
    },
    {
      icon: Globe2,
      title: "Pan-African Reach",
      description: "Operations spanning 35+ countries with local expertise and global standards.",
    },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo },
    { name: "KenGen", logo: kengenLogo },
    { name: "Bolloré", logo: bolloreLogo },
    { name: "KPC", logo: kpcLogo },
  ];

  const projectImages = [
    { src: fieldWork1, alt: "Pipeline inspection", category: "Oil & Gas" },
    { src: fieldWork2, alt: "Tank inspection", category: "Storage" },
    { src: fieldWork3, alt: "Marine inspection", category: "Marine" },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={industrialPlant}
            alt="Industrial engineering infrastructure"
            className="h-full w-full object-cover scale-105"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-subtle" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float-subtle [animation-delay:2s]" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-sm font-medium text-white/90 tracking-wide">Asset Integrity Specialists</span>
                </div>

                {/* Main heading */}
                <div className="space-y-4">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
                    <span className="block">MURBAN</span>
                    <span className="block text-primary mt-2">ENGINEERING</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
                    Delivering excellence in NDT inspection, asset integrity, and engineering services across Africa since 2007.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    asChild 
                    className="group rounded-full px-8 h-14 text-base shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-500"
                  >
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="rounded-full px-8 h-14 text-base border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <Link to="/services">
                      Explore Services
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary border-2 border-white/20 flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold">Trusted by Industry Leaders</p>
                    <p className="text-white/60 text-sm">6,500+ inspections completed</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Hero image card */}
            <AnimateOnScroll direction="right" delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={modernOilFactory}
                    alt="Modern industrial facility"
                    className="w-full h-[500px] object-cover"
                    loading="eager"
                    decoding="async"
                    width={600}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-sm">Latest Project</p>
                        <p className="text-white font-semibold text-lg">Pipeline Integrity Assessment</p>
                      </div>
                      <Button variant="secondary" size="sm" asChild className="rounded-full">
                        <Link to="/project-gallery">
                          View <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Bento Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group relative rounded-3xl border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {stat.value}{stat.suffix}
                    </span>
                    <p className="mt-3 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted By - Elegant Marquee */}
      <section className="py-16 border-y border-border/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              {clientLogos.map((client) => (
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  className="h-8 md:h-10 w-auto opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section - Evasion Card Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Services
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  What We Do Best
                </h2>
              </div>
              <Button variant="outline" size="lg" asChild className="rounded-full w-fit">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll
                key={service.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full rounded-3xl border border-border/40 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1"
                >
                  {/* Card number */}
                  <div className="absolute top-6 right-6 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {service.number}
                  </div>
                  
                  <div className="relative p-8 md:p-10 flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">For:</span> {service.forText}
                      </span>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Clean Grid */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-20">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Built on Trust & Excellence
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} direction="up" delay={i * 150}>
                <div className="group text-center p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mx-auto mb-8 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Recent Projects
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Work That Speaks
                </h2>
              </div>
              <Button variant="outline" size="lg" asChild className="rounded-full w-fit">
                <Link to="/project-gallery">
                  View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {projectImages.map((project, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 100}>
                <Link to="/project-gallery" className="group relative block rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">{project.alt}</h3>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-secondary" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section - Premium Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={storageTanks}
            alt="Storage tanks at sunset"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
                Ready to Partner with Africa&apos;s Leading Inspection Experts?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Get in touch to discuss your next project. Our team is ready to deliver excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="rounded-full px-10 h-14 text-base bg-white text-secondary hover:bg-white/90 shadow-2xl"
                >
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="rounded-full px-10 h-14 text-base border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries Quick Links */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-muted-foreground font-medium">Industries we serve:</span>
              {["Oil & Gas", "Power Generation", "Storage Terminals", "Marine", "Rail", "Renewable Energy"].map((industry) => (
                <Link
                  key={industry}
                  to="/industry-solutions"
                  className="px-4 py-2 rounded-full border border-border/50 bg-card hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  {industry}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
