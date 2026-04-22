import {
  Fuel,
  Flame,
  Warehouse,
  UtensilsCrossed,
  Wind,
  Train,
  Ship,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import oilGasImg from "@/assets/oil-gas-industry.png";
import storageTerminalsImg from "@/assets/storage-terminals.png";
import renewableEnergyImg from "@/assets/renewable-energy.png";
import railIndustryImg from "@/assets/rail-industry.png";
import shippingMarineImg from "@/assets/shipping-marine.png";
import foodProcessingImg from "@/assets/food-processing.png";
import industryHero from "@/assets/industry-hero.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";


export const industrySolutionLinks = [
  { title: "Oil & Gas Industry", slug: "oil-gas-industry" },
  { title: "Power & Steam Generation", slug: "power-steam-generation" },
  { title: "Storage & Logistics Terminals", slug: "storage-logistics-terminals" },
  { title: "Food Processing Industry", slug: "food-processing-industry" },
  { title: "Renewable Energy & Geothermal", slug: "renewable-energy-geothermal" },
  { title: "Rail Industry", slug: "rail-industry" },
  { title: "Shipping & Marine Industry", slug: "shipping-marine-industry" },
];

const IndustrySolutions = () => {
  const industries = [
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

  const engineeringServices = [
    "Alternating Current Field Measurement",
    "API 579 Murban Fitness for Service",
    "API 653 Above Ground Storage Tank Inspection",
    "API 580 Murban Risk-Based Service",
    "Boiler Inspection Service",
    "Lifting Equipment Thorough Examination and Certification",
    "RT Radiographic Services",
    "Magnetic Particle Testing",
    "Surface Hardness Testing",
    "Dye Penetrant Testing",
    "Fluorescent Magnet Particle Testing",
    "Floormap 3D MFL Scanning",
    "Paint and Coating Inspection",
    "PMI Testing",
    "Murban SIMS Tank Inspection Software",
    "Sphere Tank Inspections",
    "3D Laser Scanning Services",
    "Tank Calibration Services",
    "Murban Tank Inspection Database",
    "Thermal Camera Inspection",
    "Pressure Testing",
    "UAV Drone Inspection",
    "Fabrication and Engineering Services",
    "Ultrasonic Flaw Testing C Scan",
    "Murban Phased Array Testing",
    "Ultrasonic Thickness Measurement",
    "Visual Inspection",
    "API 510 Pressure Vessel Inspection",
    "API 570 Piping Inspection",
    "Gas Detection",
    "Detailed Engineering",
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industryHero}
            alt="Pipeline construction"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <AnimateOnScroll direction="left">
              <Badge variant="outline" className="mb-8 px-6 py-2.5 text-sm font-medium tracking-wide border-primary/30 bg-primary/5 text-primary">
                Industry Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                <span className="text-foreground">Tailored</span><br />
                <span className="text-primary">Solutions</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={150}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
                Specialized inspection and integrity services designed for diverse industries across Africa.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={250}>
              <div className="flex flex-wrap gap-3">
                {industrySolutionLinks.map((industry, index) => (
                  <a
                    key={industry.slug}
                    href={`#${industry.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    {industry.title}
                  </a>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering specialized expertise across multiple sectors
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <AnimateOnScroll key={index} direction="up" delay={100}>
                <Card id={industrySolutionLinks[index]?.slug} className="group scroll-mt-28 transition-all duration-400 border-border/40 overflow-hidden bg-card rounded-[2rem] hover:shadow-card-hover hover:-translate-y-1">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <industry.icon className="h-7 w-7 text-white" />
                          </div>
                          <Badge className="bg-primary text-primary-foreground">{`Industry ${index + 1}`}</Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{industry.title}</h3>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Assets Covered</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{industry.assetsCovered}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Key Services</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {industry.services.slice(0, 6).map((service, idx) => (
                            <div key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="text-primary mr-2 mt-0.5">•</span>
                              <span className="leading-snug">{service}</span>
                            </div>
                          ))}
                        </div>
                        {industry.services.length > 6 && (
                          <p className="text-xs text-primary mt-2">+{industry.services.length - 6} more services</p>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Why It Matters</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{industry.whyItMatters}</p>
                      </div>
                      <Button variant="outline" asChild className="rounded-full mt-4">
                        <Link to="/contact">
                          Get a Quote <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication & Engineering Services Overview */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          <AnimateOnScroll direction="up">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
                Engineering & Fabrication
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Complete Engineering Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced engineers provide comprehensive design and drafting services, including structural analysis,
                layout plans, material selection, and complete project documentation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringServices.slice(0, 12).map((service, i) => (
              <AnimateOnScroll key={service} direction="up" delay={(i % 6) * 50}>
                <Card className="h-full border-border/40 bg-card rounded-xl hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 flex items-center h-full">
                    <span className="text-sm font-medium leading-snug">{service}</span>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="up">
            <div className="text-center">
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

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
                Ready to Discuss Your Industry Needs?
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Our team of experts is ready to provide tailored solutions for your specific industry challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="rounded-full px-10 bg-white text-secondary hover:bg-white/90 shadow-xl">
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-10 border-white/30 text-white hover:bg-white/10">
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

export default IndustrySolutions;
