import {
  Fuel,
  Flame,
  Warehouse,
  UtensilsCrossed,
  Wind,
  Train,
  Ship,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";
import foodProcessingImg from "@/assets/food-processing.png";
import industryHero from "@/assets/industry-hero.jpg";

export const industrySolutionLinks = [
  { title: "Oil & Gas Industry", slug: "oil-gas-industry" },
  { title: "Power & Steam Generation", slug: "power-steam-generation" },
  { title: "Storage & Logistics Terminals", slug: "storage-logistics-terminals" },
  { title: "Food Processing Industry", slug: "food-processing-industry" },
  { title: "Renewable Energy & Geothermal", slug: "renewable-energy-geothermal" },
  { title: "Rail Industry", slug: "rail-industry" },
  { title: "Shipping & Marine Industry", slug: "shipping-marine-industry" },
];

type Industry = {
  icon: LucideIcon;
  title: string;
  image: string;
  assetsCovered: string;
  services: string[];
  whyItMatters: string;
};

const IndustryCard = ({ industry, index }: { industry: Industry; index: number }) => {
  const Icon = industry.icon;
  const isReversed = index % 2 !== 0;
  
  return (
    <Card 
      id={industrySolutionLinks[index]?.slug} 
      className="group scroll-mt-28 overflow-hidden border-border/40 bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
    >
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image Section */}
        <div className={`relative h-80 lg:h-auto min-h-[400px] overflow-hidden ${isReversed ? 'lg:col-start-2' : ''}`}>
          <img 
            src={industry.image} 
            alt={industry.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent lg:bg-gradient-to-r lg:from-secondary/90 lg:via-secondary/40 lg:to-transparent" />
          
          {/* Floating badge */}
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white">
              <Icon className="h-4 w-4" />
              Industry Focus
            </span>
          </div>
          
          {/* Title overlay on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{industry.title}</h3>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:col-start-1' : ''}`}>
          {/* Title - hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
              {industry.title}
            </h3>
          </div>
          
          {/* Assets Covered */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              Assets Covered
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {industry.assetsCovered}
            </p>
          </div>
          
          {/* Key Services - Compact grid */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              Key Services
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {industry.services.slice(0, 8).map((service, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-tight">{service}</span>
                </div>
              ))}
            </div>
            {industry.services.length > 8 && (
              <p className="mt-2 text-xs text-muted-foreground">
                + {industry.services.length - 8} more services
              </p>
            )}
          </div>
          
          {/* Why It Matters */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              Why It Matters
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
              {industry.whyItMatters}
            </p>
          </div>
          
          {/* CTA */}
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 group/link"
          >
            <span>Discuss your {industry.title.toLowerCase()} needs</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

const IndustrySolutions = () => {
  const industries: Industry[] = [
    {
      icon: Fuel,
      title: "Oil & Gas Industry",
      image: oilGasImg,
      assetsCovered: "Storage tanks, sphere tanks, pressure vessels, pipelines, marine terminals, FPSOs",
      services: [
        "API 653 Storage Tank Inspection",
        "Sphere Tank Inspection",
        "API 510 Pressure Vessel Inspection",
        "API 570 Pipeline Inspection",
        "Tank Bottom MFL Corrosion Mapping",
        "Fitness for Service Analysis",
        "UAV & Thermal Surveys",
        "3D Laser Scanning & Tank Calibration",
        "Coating Inspection & Corrosion Assessment",
        "Risk-Based Inspection & RBI Plans",
        "Radiography & Ultrasonic Testing",
        "PMI Testing for imported fittings",
        "Post-fire and post-buckling assessments",
      ],
      whyItMatters: "At Murban Engineering, we offer industry-leading inspection and integrity solutions tailored to the critical demands of the oil and gas sector. Our services span upstream, midstream, and downstream operations—from pipeline and pressure vessel inspections to storage tank calibration and corrosion assessment. Using advanced techniques like Phased Array Ultrasonic Testing (PAUT), Magnetic Flux Leakage (MFL), and Risk-Based Inspection (RBI), we help oil and gas operators extend asset life, avoid unplanned outages, and meet the highest standards of safety and compliance.",
    },
    {
      icon: Flame,
      title: "Power & Steam Generation",
      image: storageTerminalsImg,
      assetsCovered: "Boilers, heat exchangers, pressure vessels, steam lines",
      services: [
        "Boiler Internal & External Inspections",
        "Surface Hardness & Weld Flaw Detection",
        "Pressure Testing of High-Pressure Systems",
        "PMI & Material Traceability",
        "Thermal Surveys for Insulation Performance",
        "QA/QC during plant maintenance",
      ],
      whyItMatters: "The power industry relies on the continuous and safe operation of high-pressure systems. Our inspection and testing services are designed to support steam generation plants, turbines, and high-energy piping. We conduct in-depth assessments of boilers, heat exchangers, and pressure vessels using ultrasonic flaw detection, surface hardness testing, and pressure validation. These services ensure the structural integrity, operational efficiency, and safety of critical components under extreme conditions.",
    },
    {
      icon: Warehouse,
      title: "Storage & Logistics Terminals",
      image: storageTerminalsImg,
      assetsCovered: "Bulk liquid tanks, LPG spheres, loading lines, depot infrastructure",
      services: [
        "Storage Tank Calibration",
        "Volumetric Analysis with 3D Laser Scanning",
        "API 653 Inspections",
        "API 510 Inspections",
        "API 570 Inspections",
        "Paint and Coating Integrity Testing",
        "Third party verification and testing",
        "Engineering drawings – As built data",
        "Foundation and settlement monitoring",
        "NDT Testing",
      ],
      whyItMatters: "Bulk liquid and fuel terminals are complex facilities that demand accurate calibration, corrosion monitoring, and tank integrity assurance. Murban Engineering provides comprehensive solutions for tank farms, depots, and LPG storage facilities using technologies like 3D laser scanning, UAV-based inspections, and API 653-compliant tank assessments. Our goal is to help operators maintain regulatory compliance, safeguard stored products, and optimize infrastructure performance across the entire terminal lifecycle.",
    },
    {
      icon: UtensilsCrossed,
      title: "Food Processing Industry",
      image: foodProcessingImg,
      assetsCovered: "Stainless tanks, pressure vessels, food-grade pipelines, steam boilers",
      services: [
        "UT Thickness Surveys for Corrosion in Clean Systems",
        "Surface Hardness Testing for Safety Compliance",
        "3D Tank Calibration for Volume Control",
        "Radiographic Testing to check welds on hygiene-critical vessels",
        "QA/QC for stainless welding and fittings",
        "Non-contaminating NDT procedures (e.g., non-toxic DPI)",
      ],
      whyItMatters: "In food and beverage processing, cleanliness, accuracy, and structural integrity are non-negotiable. Murban supports this industry with non-contaminating inspection techniques, volumetric tank calibration, and material identification suited for food-grade environments. Whether it's ensuring weld quality in stainless vessels or verifying tank geometry for accurate mixing and batching, we bring precision, hygiene-compliant methods, and peace of mind to food manufacturers.",
    },
    {
      icon: Wind,
      title: "Renewable Energy & Geothermal",
      image: renewableEnergyImg,
      assetsCovered: "Geothermal drilling rigs, solar plants, wind support structures",
      services: [
        "NDT on Cementing and Casing Equipment",
        "QA/QC Inspections during rig fabrication and commissioning",
        "UT and MPI for welds and frames",
        "UAV Thermal Surveys for solar arrays",
        "Pressure Testing and PMI of drilling components",
        "Structural laser scanning for alignment and elevation",
      ],
      whyItMatters: "The renewable energy sector is expanding rapidly, and so is the need for safe, reliable, and long-lasting infrastructure. At Murban, we offer targeted inspection services for geothermal rigs, solar installations, and wind structures. From flaw detection in rig welds to thermal imaging of solar panels and structural surveys using UAVs and laser scanning, we ensure your green energy systems are safe, efficient, and compliant with modern engineering codes.",
    },
    {
      icon: Train,
      title: "Rail Industry",
      image: railIndustryImg,
      assetsCovered: "Rail wagons, bogies, bridges, storage depots, fuel tanks",
      services: [
        "UT and RT for railcar tanks and weld seams",
        "ACFM Inspection for wheels and axles",
        "Surface Hardness for load-bearing components",
        "Paint, Coating & Corrosion Inspection for rolling stock",
        "Lifting Equipment Certification for maintenance depots",
        "Tank Calibration for fuel and chemical wagons",
        "3D Scanning of structural members in railway bridges",
      ],
      whyItMatters: "Railway infrastructure must meet the demands of heavy loads, constant vibration, and dynamic stresses. Murban provides specialized inspection and certification services for railcars, bridges, depots, and fuel wagons. Our techniques—ranging from ultrasonic and radiographic testing to tank calibration and corrosion inspection—help operators ensure safety, prevent failures, and maintain smooth operations across the rail network.",
    },
    {
      icon: Ship,
      title: "Shipping & Marine Industry",
      image: shippingMarineImg,
      assetsCovered: "Cargo tanks, ballast tanks, marine pipelines, ship hulls, offshore loading arms, vessel pressure systems, tankers, offshore platforms",
      services: [
        "Ultrasonic Thickness Measurement (UTM) of hull plating and tanks",
        "Visual Inspection of cargo tanks, hatches, and decks",
        "Magnetic Particle & Dye Penetrant Testing of weld seams and load points",
        "Phased Array Ultrasonic Testing (PAUT) for deck and hull integrity",
        "3D Laser Scanning for tank geometry and deck mapping",
        "Internal UAV Inspection for difficult-to-access compartments",
        "Surface Hardness Testing on load-bearing components",
        "PMI Testing on imported or unknown marine-grade alloys",
        "Thermal Imaging for hot spot detection in engines and exhausts",
        "Paint & Coating Assessment in ballast and cargo tanks",
        "Pressure Testing of marine pipelines and fluid systems",
        "Lifting Gear and Lifesaving Equipment Certification",
        "Compliance inspections under SOLAS, IMO, and Classification Society standards",
      ],
      whyItMatters: "Marine environments expose vessels and offshore structures to accelerated wear from corrosion, mechanical loading, and extreme conditions. At Murban Engineering, we provide specialized marine inspection services that enhance safety, ensure class compliance, and support the longevity of your marine assets. Whether for in-service vessels, dockside inspections, or offshore operations, our NDT and engineering capabilities help mitigate risk, reduce repair costs, and maintain operational readiness at sea.",
    },
  ];

  const quickNavItems = [
    { label: "Oil & Gas", slug: "oil-gas-industry" },
    { label: "Power & Steam", slug: "power-steam-generation" },
    { label: "Storage Terminals", slug: "storage-logistics-terminals" },
    { label: "Food Processing", slug: "food-processing-industry" },
    { label: "Renewable Energy", slug: "renewable-energy-geothermal" },
    { label: "Rail Industry", slug: "rail-industry" },
    { label: "Marine & Shipping", slug: "shipping-marine-industry" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative py-36 md:py-44 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={industryHero}
            alt="Industrial pipeline construction"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-secondary/40" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimateOnScroll direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm mb-8">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
              Specialized Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1] text-white tracking-tight">
              Industry-Specific<br />Inspection Excellence
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/85 leading-relaxed mb-12">
              Tailored inspection and integrity solutions designed for the unique demands of diverse industries across Africa and beyond.
            </p>
            
            {/* Quick Navigation */}
            <nav aria-label="Industry quick navigation" className="flex flex-wrap items-center justify-center gap-3">
              {quickNavItems.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5"
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </AnimateOnScroll>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Sector Expertise
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                Industries We Serve
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering specialized expertise across multiple sectors with precision and reliability
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8 lg:space-y-12">
            {industries.map((industry, index) => (
              <AnimateOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"} delay={100}>
                <IndustryCard industry={industry} index={index} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: "7+", label: "Industry Sectors" },
                { value: "30+", label: "NDT Services" },
                { value: "100+", label: "Certified Inspectors" },
                { value: "1000+", label: "Projects Delivered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={industryHero} 
            alt="" 
            className="h-full w-full object-cover" 
            loading="lazy" 
            decoding="async" 
            width={1920} 
            height={1080} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-primary/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimateOnScroll direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Ready to Discuss Your<br />Industry Needs?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed">
              Our team of certified experts is ready to provide tailored inspection and engineering solutions for your specific industry challenges.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-10 rounded-2xl bg-white text-secondary px-10 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-white/95 hover:shadow-2xl hover:-translate-y-1"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default IndustrySolutions;
