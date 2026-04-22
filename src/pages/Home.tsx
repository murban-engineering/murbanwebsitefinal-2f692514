import {
  ArrowRight,
  LineChart,
  Globe2,
  Activity,
  Cpu,
  FileSearch,
  Hammer,
  BrainCircuit,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import projectImage from "@/assets/project-showcase.jpg";
import Testimonials from "@/components/Testimonials";
import totalenergiesLogo from "@/assets/totalenergies-logo.png";
import kengenLogo from "@/assets/kengen-logo.png";
import bolloreLogo from "@/assets/bollore-logo.png";
import kpcLogo from "@/assets/kpc-logo.png";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import modernOilFactory from "@/assets/modern-oil-factory.jpg";
import modernOilFactory3 from "@/assets/modern-oil-factory-3.jpg";

import industrialPlant from "@/assets/industrial-plant.jpg";

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "General NDT",
      description: "Comprehensive non-destructive testing using magnetic particle, dye penetrant, ultrasonic, and radiographic methods for structural integrity assurance.",
      forText: "Oil & gas, power plants, refineries, marine",
      slug: "ndt-inspection-services",
      tag: "General NDT",
    },
    {
      icon: Cpu,
      title: "Advanced NDT",
      description: "Cutting-edge inspection techniques including Phased Array UT, TOFD, ACFM, and AUT for complex geometry and high-integrity assets.",
      forText: "Subsea, aerospace, high-pressure systems",
      slug: "phased-array-ultrasonic-testing",
      tag: "Advanced NDT",
    },
    {
      icon: FileSearch,
      title: "Engineering Assessments",
      description: "API 570, API 653, fitness-for-service evaluations and risk-based inspection programs to extend asset life and ensure code compliance.",
      forText: "Process plants, storage terminals, pipelines",
      slug: "api-570-piping-inspection-and-certification",
      tag: "Engineering Assessments",
    },
    {
      icon: Hammer,
      title: "Engineering & Fabrication",
      description: "Structural fabrication, tank construction, piping works and project management delivered to international codes and standards.",
      forText: "Industrial plants, refineries, construction projects",
      slug: "tank-calibration-services",
      tag: "Engineering & Fabrication",
    },
  ];

  const stats = [
    { value: "2007", label: "Established" },
    { value: "20", label: "Years Experience" },
    { value: "35+", label: "Countries Worldwide" },
    { value: "6,500+", label: "Inspections" },
  ];
  const marqueeStats = [...stats, ...stats];

  const differentiators = [
    {
      icon: BrainCircuit,
      title: "Signature Delivery Experience",
      description:
        "Our cross-functional squads embed alongside your team to accelerate approvals, procurement and commissioning.",
    },
    {
      icon: LineChart,
      title: "Data-Driven Decisions",
      description:
        "Live project analytics and predictive modelling ensure you are always ahead of risk and budget curveballs.",
    },
    {
      icon: Leaf,
      title: "Sustainability by Design",
      description:
        "We engineer for carbon, water and energy performance from day zero, ensuring compliance and positive impact.",
    },
  ];

  const process = [
    {
      title: "Discover",
      description: "Immersive workshops to align scope, metrics and stakeholders from day one.",
    },
    {
      title: "Design",
      description: "Iterative co-design with digital twins, rapid prototyping and compliance reviews.",
    },
    {
      title: "Deliver",
      description: "On-site leadership coupled with smart monitoring to keep execution seamless.",
    },
    {
      title: "Optimize",
      description: "Operational intelligence, retro-commissioning and continuous performance tuning.",
    },
  ];

  const projects = [
    {
      title: "Regional Smart Logistics Hub",
      description:
        "A 120,000 sqm logistics campus integrating autonomous warehousing, renewable microgrids and resilient structures.",
      impact: "32% faster fulfilment, 18% energy reduction",
    },
    {
      title: "Urban Mixed-Use Tower",
      description:
        "Iconic high-rise featuring adaptive façade systems, community amenities and net-zero ready mechanical systems.",
      impact: "LEED Platinum pre-certified, 24-month delivery",
    },
    {
      title: "Industrial Utilities Upgrade",
      description:
        "Mission-critical plant revitalization ensuring continuity, safety compliance and digital oversight.",
      impact: "Zero downtime transition, predictive maintenance deployed",
    },
  ];

  const clientLogos = [
    { name: "TotalEnergies", logo: totalenergiesLogo, width: "w-28" },
    { name: "KenGen", logo: kengenLogo, width: "w-24" },
    { name: "Bolloré Africa Logistics", logo: bolloreLogo, width: "w-36" },
    { name: "KPC", logo: kpcLogo, width: "w-20" },
  ];

  const marqueeLogos = [...clientLogos, ...clientLogos];

  const transformationHighlights = [
    {
      icon: Globe2,
      title: "Immersive Digital Oversight",
      description:
        "Unified command centres with predictive analytics that surface insights for every stakeholder in real time.",
      stat: "98% uptime across active sites",
    },
    {
      icon: Leaf,
      title: "Regenerative Design Systems",
      description:
        "Low-carbon materials, adaptive envelopes and net-positive water strategies embedded at concept stage.",
      stat: "40% average energy intensity reduction",
    },
    {
      icon: ShieldCheck,
      title: "Lifecycle Assurance",
      description:
        "Asset integrity programmes, NDT and digital twins that extend operational life and mitigate unplanned downtime.",
      stat: "ISO 55001-aligned stewardship",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed right-4 top-24 z-20">
        <ThemeToggle id="home-theme-toggle" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={industrialPlant}
            alt="Industrial engineering infrastructure"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32">
          <AnimateOnScroll direction="left" className="max-w-2xl lg:max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
              Asset Integrity & NDT Specialists
            </span>
            
            <h1 className="mt-10 flex flex-col items-start leading-none font-sans">
              <span className="text-5xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl">MURBAN</span>
              <span className="mt-3 text-sm font-semibold tracking-[0.35em] text-secondary sm:text-lg sm:tracking-[0.45em] md:text-xl">ENGINEERING</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions for oil & gas, energy, marine, and industrial sectors across Africa.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-2xl px-8 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 btn-press">
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-2xl bg-background/60 px-8 backdrop-blur-md border-border/50 hover:bg-background/80 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="rounded-2xl px-8 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/project-gallery">View Our Projects</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up" delay={200}>
            <div className="overflow-hidden rounded-3xl">
              <div className="flex w-max items-center gap-4 px-6 py-6 motion-reduce:animate-none animate-marquee [animation-direction:reverse]">
                {marqueeStats.map((stat, index) => (
                  <div
                    key={`${stat.label}-${index}`}
                    className="min-w-[220px] rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/20"
                  >
                    <span className="text-3xl font-bold text-primary">{stat.value}</span>
                    <span className="mt-2 block text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by industry leaders
            </p>
            <div className="logo-marquee overflow-hidden rounded-2xl">
              <div className="logo-marquee-track flex w-max items-center gap-16 py-4">
                {marqueeLogos.map((client, index) => (
                  <img
                    key={`${client.name}-${index}`}
                    src={client.logo}
                    alt={client.name}
                    className={`${client.width} h-auto opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:scale-105`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={180}
                    height={72}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="right">
            <div className="mx-auto mb-20 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What We Do
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl tracking-tight">
                Our Services
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Featured offerings pulled directly from our core services catalog.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <AnimateOnScroll
                key={service.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border/40 bg-card p-8 shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover hover:border-primary/30 cursor-pointer"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <hr className="my-6 border-border/50" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">For:</span>{" "}
                    <span className="text-muted-foreground">{service.forText}</span>
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="mt-16 text-center">
              <Button size="lg" asChild className="rounded-2xl px-8 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="mx-auto mb-20 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl tracking-tight">
                What sets us apart
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item, i) => (
              <AnimateOnScroll
                key={item.title}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 120}
              >
                <div className="group rounded-3xl border border-border/40 bg-card p-10 shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover hover:border-primary/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="left">
            <div className="mx-auto mb-20 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Project Gallery
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl tracking-tight">
                Our work in the field
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimateOnScroll direction="left" delay={0}>
              <div className="group overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:shadow-card-hover">
                <img
                  src={fieldWork1}
                  alt="Field work 1"
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={320}
                />
              </div>
            </AnimateOnScroll>
       
          
            <AnimateOnScroll direction="right" delay={300}>
              <div className="group overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:shadow-card-hover">
                <img
                  src={fieldWork3}
                  alt="Field work 3"
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={320}
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild className="rounded-2xl px-8 border-border/50 transition-all duration-300 hover:-translate-y-0.5">
                <Link to="/project-gallery">View Full Gallery</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <AnimateOnScroll direction="right">
        <Testimonials />
      </AnimateOnScroll>

      {/* CTA Section */}
       <section className="relative py-32 overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img src={industrialPlant} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" width={1920} height={600} />
           <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-primary/70" />
        </div>
        <AnimateOnScroll direction="up" className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-white/85 leading-relaxed">
            Let&apos;s discuss how we can help you build infrastructure that drives real progress.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-10 rounded-2xl bg-white text-secondary px-10 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-white/95 hover:shadow-2xl hover:-translate-y-1 btn-press"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Home;
