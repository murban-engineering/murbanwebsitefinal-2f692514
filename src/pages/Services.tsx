import { 
  Gauge, GitBranch, Database, Disc, ScanLine, Activity, Magnet, 
  Lightbulb, Droplet, Radio, Paintbrush, TestTube, Grid3x3, 
  Scan, Thermometer, Cpu, CheckCircle, TrendingUp, Flame, 
  ArrowUp, Wind, CircleGauge, Map, Globe, Hammer, Plane,
  Ruler, ShoppingCart, Settings, Building2, Zap, Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const ndtServices = [
    {
      icon: Gauge,
      title: "Tank Calibration Services",
      description: "Accurate volume measurement and calibration for storage tanks of all types.",
    },
    {
      icon: GitBranch,
      title: "API 570 Piping Inspection & Certification",
      description: "Comprehensive inspection and certification for piping systems to meet API 570 standards.",
    },
    {
      icon: Database,
      title: "API 653 Aboveground Storage Tank Inspection & Certification",
      description: "Ensuring the structural integrity and compliance of aboveground storage tanks.",
    },
    {
      icon: Disc,
      title: "API 510 Pressure Vessel Inspection",
      description: "Safety and compliance inspections for pressure vessels in operation.",
    },
    {
      icon: ScanLine,
      title: "Ultrasonic Flaw Testing (C-Scan)",
      description: "Detailed internal flaw mapping using advanced ultrasonic scanning technology.",
    },
    {
      icon: Activity,
      title: "Ultrasonic Flaw Testing (B-Scan)",
      description: "Detecting subsurface defects and discontinuities through B-Scan ultrasonic methods.",
    },
    {
      icon: Magnet,
      title: "Magnetic Particle Testing (MT)",
      description: "Accurate detection of surface flaws using magnetic field techniques.",
    },
    {
      icon: Lightbulb,
      title: "Fluorescent Magnetic Particle Testing (FMPT)",
      description: "Enhanced surface crack detection using fluorescent particles under UV light.",
    },
    {
      icon: Droplet,
      title: "Dye Penetrant Testing (PT)",
      description: "Surface defect detection using visible or fluorescent dye penetrants.",
    },
    {
      icon: Radio,
      title: "Radiographic Testing (RT)",
      description: "Non-destructive radiographic inspection for internal structural flaws.",
    },
    {
      icon: Paintbrush,
      title: "Paint & Coating Inspection",
      description: "Verification of coating thickness, quality, and protective performance.",
    },
    {
      icon: TestTube,
      title: "Positive Material Identification (PMI)",
      description: "Advanced alloy and material composition verification to prevent mix-ups.",
    },
    {
      icon: Grid3x3,
      title: "Phased Array Ultrasonic Testing (PAUT)",
      description: "State-of-the-art ultrasonic inspection for detailed flaw detection and mapping.",
    },
    {
      icon: Scan,
      title: "3D Laser Scanning",
      description: "High-precision 3D measurements for structural modeling and analysis.",
    },
    {
      icon: Thermometer,
      title: "Thermal Camera Inspection",
      description: "Infrared heat mapping to identify temperature variations and anomalies.",
    },
    {
      icon: Cpu,
      title: "Alternating Current Field Measurement (ACFM)",
      description: "Surface crack detection using electromagnetic field analysis.",
    },
    {
      icon: CheckCircle,
      title: "API 579 Fitness for Service (FFS)",
      description: "Assessment of equipment condition to determine safe operational status.",
    },
    {
      icon: TrendingUp,
      title: "API 580 Risk-Based Inspection (RBI)",
      description: "Risk-focused inspection strategies to optimize maintenance schedules and safety.",
    },
    {
      icon: Flame,
      title: "Boiler Inspection Services",
      description: "Detailed safety and compliance inspections for industrial boilers.",
    },
    {
      icon: ArrowUp,
      title: "Lifting Equipment Examination & Certification",
      description: "Thorough examination and certification for cranes, hoists, and lifting gear.",
    },
    {
      icon: Wind,
      title: "Gas Detection Services",
      description: "Detection and monitoring of gas leaks using advanced sensor technology.",
    },
    {
      icon: CircleGauge,
      title: "Pressure Testing",
      description: "Verification of system integrity and performance under controlled pressure.",
    },
    {
      icon: Map,
      title: "Floormap 3D MFL Scanning",
      description: "3D magnetic flux leakage scanning to detect tank floor corrosion or defects.",
    },
    {
      icon: Globe,
      title: "Sphere Tank Inspections",
      description: "Comprehensive inspection of spherical tanks for safety and performance assurance.",
    },
    {
      icon: Hammer,
      title: "Surface Hardness Testing",
      description: "Measurement of metal surface hardness and strength characteristics.",
    },
    {
      icon: Plane,
      title: "UAV (Drone) Inspection",
      description: "Drone-based inspection for hard-to-reach or hazardous areas, reducing downtime and risk.",
    },
  ];

  const fabricationServices = [
    {
      icon: Ruler,
      title: "Detailed Engineering",
      description: "Technical planning, design, and documentation for industrial projects.",
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Strategic sourcing of high-quality materials and equipment to meet project requirements.",
    },
    {
      icon: Settings,
      title: "Fabrication",
      description: "Precision cutting, welding, and assembly of custom metal structures and components.",
    },
    {
      icon: Building2,
      title: "Construction & Erection",
      description: "On-site assembly, erection, and installation of fabricated structures and systems.",
    },
    {
      icon: Zap,
      title: "Specialized Welding",
      description: "Advanced welding methods (TIG, MIG, SMAW, SAW) for critical and specialized applications.",
    },
    {
      icon: Sparkles,
      title: "Surface Preparation & Paint Works",
      description: "Professional surface cleaning, coating, and industrial painting for corrosion protection and durability.",
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
            Advanced NDT inspection and complete engineering solutions for critical infrastructure
          </p>
        </div>
      </section>

      {/* NDT Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              🔧 NDT Inspection & Testing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering advanced Non-Destructive Testing (NDT) and inspection solutions that ensure the integrity, reliability, and safety of your assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ndtServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border">
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              ⚙️ Fabrication & Engineering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete, turnkey engineering and fabrication solutions — from design to construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricationServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border">
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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
