import { ArrowRight, ArrowUpRight, Activity, Cpu, Wrench, Shield, Gauge, Waves, Radio, Thermometer, Zap, CheckCircle2, Play, ChevronRight } from "lucide-react";
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
import industrialPlant from "@/assets/industrial-plant.jpg";
import modernOilFactory from "@/assets/modern-oil-factory.jpg";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import storageTanks from "@/assets/storage-tanks.jpg";
import pipelineInspection from "@/assets/pipeline-inspection.jpg";
import oilRigVessel from "@/assets/oil-rig-vessel.jpg";

const Home = () => {
  // Featured Services - eCommerce style "products"
  const featuredServices = [
    {
      id: "ndt",
      name: "NDT Inspection",
      tagline: "General NDT",
      description: "Comprehensive non-destructive testing for structural integrity",
      price: "From $2,500",
      image: fieldWork1,
      slug: "ndt-inspection-services",
      badge: "Most Popular",
    },
    {
      id: "paut",
      name: "Phased Array",
      tagline: "Advanced NDT",
      description: "High-resolution flaw detection for complex geometries",
      price: "From $4,500",
      image: fieldWork5,
      slug: "phased-array-ultrasonic-testing",
      badge: "Advanced",
    },
  ];

  // Technology features - Evasion style
  const technologies = [
    { icon: Activity, label: "Precision", title: "Ultrasonic Testing", description: "Advanced UT techniques for internal flaw detection" },
    { icon: Cpu, label: "Innovation", title: "Phased Array UT", description: "Multi-element probes for complex geometry scanning" },
    { icon: Shield, label: "Safety", title: "Risk Assessment", description: "API 579/580 fitness-for-service evaluations" },
    { icon: Waves, label: "Analysis", title: "MFL Scanning", description: "Magnetic flux leakage for tank floor mapping" },
    { icon: Radio, label: "Detection", title: "Radiographic Testing", description: "X-ray and gamma imaging for weld inspection" },
    { icon: Thermometer, label: "Monitoring", title: "Thermal Imaging", description: "Infrared surveys for temperature anomalies" },
  ];

  // Service accessories/add-ons
  const accessories = [
    { name: "3D Laser Scanning", description: "High-accuracy spatial data capture", price: "$3,200", icon: Gauge },
    { name: "UAV Inspection", description: "Aerial inspection for hard-to-reach areas", price: "$2,800", icon: Zap },
    { name: "Tank Calibration", description: "Precise volumetric measurement", price: "$1,500", icon: Wrench },
    { name: "Coating Assessment", description: "Paint thickness and quality testing", price: "$800", icon: Shield },
    { name: "PMI Testing", description: "Positive material identification", price: "$1,200", icon: Activity },
    { name: "Pressure Testing", description: "System integrity verification", price: "$2,000", icon: Thermometer },
  ];

  // Stats - Evasion style specs
  const specs = [
    { label: "Experience", value: "20+", unit: "Years" },
    { label: "Projects", value: "6,500+", unit: "Completed" },
    { label: "Countries", value: "35+", unit: "Worldwide" },
    { label: "Certifications", value: "100%", unit: "Compliance" },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo },
    { name: "KenGen", logo: kengenLogo },
    { name: "Bolloré", logo: bolloreLogo },
    { name: "KPC", logo: kpcLogo },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={industrialPlant}
            alt="Industrial facility"
            className="h-full w-full object-cover scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Hero Content */}
            <AnimateOnScroll direction="up">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-8 px-6 py-2.5 text-sm font-medium tracking-wide border-primary/30 bg-primary/5 text-primary">
                  <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse-soft inline-block" />
                  Asset Integrity & NDT Specialists
                </Badge>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
                  <span className="text-primary">MURBAN</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                  Lightweight, durable<br />and <span className="text-foreground font-medium">inspection-ready.</span>
                </p>
              </div>
            </AnimateOnScroll>

            {/* Tagline */}
            <AnimateOnScroll direction="up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                  Meet <span className="text-primary">Inspection</span> & <span className="text-secondary">Engineering</span>.
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Featured Services - Product Cards */}
            <AnimateOnScroll direction="up" delay={200}>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                {featuredServices.map((service, index) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-[2rem] bg-card border border-border/50 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/30">
                      {/* Service Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      </div>
                      
                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-1.5">
                          {service.badge}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-sm font-medium text-primary mb-2">{service.tagline}</p>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{service.name}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowUpRight className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll direction="up" delay={300}>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">First-class inspection</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Murban Inspection & Engineering are high-tech asset integrity solutions designed for modern industry. Reliable, certified, and engineered for critical infrastructure across Africa.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Technology Section - Evasion Style Features Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Engineered for Excellence.<br />
                <span className="text-primary">Designed for Industry.</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <AnimateOnScroll key={tech.title} direction="up" delay={index * 80}>
                <Card className="group relative overflow-hidden rounded-[1.5rem] border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                        <tech.icon className="h-7 w-7 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs font-medium uppercase tracking-wider border-primary/30 text-primary">
                        {tech.label}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimateOnScroll direction="left">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Technology<br />
                  <span className="text-primary">Meets</span><br />
                  Industry.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Experience industrial inspection reimagined with cutting-edge technology. Our NDT solutions combine ultra-precise instrumentation, intelligent analysis, and certified expertise to elevate every assessment. From storage tanks to pipelines, your assets are in expert hands.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="rounded-full px-8 shadow-lg shadow-primary/25">
                    <Link to="/services">
                      Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                    <Link to="/contact">
                      <Play className="mr-2 h-4 w-4" /> Watch Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Images - Overlapping Grid */}
            <AnimateOnScroll direction="right" delay={200}>
              <div className="relative h-[600px]">
                <div className="absolute top-0 right-0 w-3/4 h-2/3 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={modernOilFactory} alt="Modern oil facility" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-2/3 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background">
                  <img src={fieldWork3} alt="Field inspection work" className="w-full h-full object-cover" />
                </div>
                {/* Stats Overlay */}
                <div className="absolute bottom-16 right-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-card-hover border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">98%</p>
                      <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Accessories/Add-ons Section - Evasion Style Carousel */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Essential Services</h2>
              <p className="text-muted-foreground text-lg">Comprehensive inspection solutions for every need</p>
            </div>
          </AnimateOnScroll>

          {/* Scrolling Cards */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
              {[...accessories, ...accessories].map((item, index) => (
                <AnimateOnScroll key={`${item.name}-${index}`} direction="up" delay={(index % 6) * 60}>
                  <Card className="flex-shrink-0 w-72 snap-center rounded-[1.5rem] border-border/50 bg-card hover:border-primary/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover">
                    <CardContent className="p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <p className="text-xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Specs Section - Evasion Style */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {specs.map((spec, index) => (
                <AnimateOnScroll key={spec.label} direction="up" delay={index * 100}>
                  <div className="text-center">
                    <p className="text-5xl md:text-6xl font-bold text-primary mb-2">{spec.value}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{spec.unit}</p>
                    <p className="text-xs text-muted-foreground mt-1">{spec.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            
            <AnimateOnScroll direction="up" delay={400}>
              <div className="text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Murban Engineering combines aerospace-grade precision with cutting-edge NDT technology — designed for operators who refuse to compromise on safety or performance in critical infrastructure.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery Section - Grid Layout */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                Project Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Work in the Field</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { img: storageTanks, title: "Storage Tank Inspection", category: "API 653" },
              { img: pipelineInspection, title: "Pipeline Assessment", category: "API 570" },
              { img: oilRigVessel, title: "Offshore Inspection", category: "Marine NDT" },
            ].map((project, index) => (
              <AnimateOnScroll key={project.title} direction="up" delay={index * 100}>
                <Link to="/project-gallery" className="group relative block">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-card">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <Badge className="mb-3 bg-primary text-primary-foreground">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <Link to="/project-gallery">
                  View Full Gallery <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted By - Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-12">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {clientLogos.map((client, index) => (
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section - Evasion Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={industrialPlant} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Let&apos;s discuss how we can support your asset integrity and inspection needs across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="rounded-full px-10 bg-white text-secondary hover:bg-white/90 shadow-xl">
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-10 border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">
                    View All Services
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

export default Home;
