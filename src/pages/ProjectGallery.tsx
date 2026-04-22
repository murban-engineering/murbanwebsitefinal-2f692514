import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import railIndustryImg from "@/assets/rail-industry.png";
import fieldWork1 from "@/assets/field-work-1.jpg";
import fieldWork2 from "@/assets/field-work-2.jpg";
import fieldWork3 from "@/assets/field-work-3.jpg";
import fieldWork4 from "@/assets/field-work-4.jpg";
import fieldWork5 from "@/assets/field-work-5.jpg";
import fieldWork6 from "@/assets/field-work-6.jpg";
import constructionBlueprints from "@/assets/construction-blueprints.jpg";
import industrialPlant from "@/assets/industrial-plant.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  results: string[];
}

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All", "Oil & Gas", "Storage Terminals", "Renewable Energy", "Rail Industry", "Marine & Shipping",
  ];

  const projects: Project[] = [
    {
      id: 1, title: "TotalEnergies Pipeline Integrity Assessment", category: "Oil & Gas", location: "Mombasa, Kenya", year: "2023",
      description: "Comprehensive pipeline inspection and integrity assessment for critical crude oil transportation infrastructure using advanced PAUT and MFL techniques.",
      image: fieldWork1,
      results: ["Zero unplanned downtime", "15 critical repairs identified", "10+ years asset life extension"],
    },
    {
      id: 2, title: "KPC Storage Tank Calibration & Inspection", category: "Storage Terminals", location: "Nairobi, Kenya", year: "2023",
      description: "API 653 compliant storage tank inspection and 3D laser scanning calibration for fuel depot operations across 72 sites.",
      image: fieldWork2,
      results: ["72 sites inspected on schedule", "99.7% inventory accuracy", "Full regulatory compliance"],
    },
    {
      id: 3, title: "KenGen Geothermal Rig Inspection", category: "Renewable Energy", location: "Olkaria, Kenya", year: "2023",
      description: "NDT inspection and certification of drilling rig components for geothermal energy production in high-temperature environments.",
      image: fieldWork4,
      results: ["100% safety compliance", "2 failures prevented", "Continuous operations maintained"],
    },
    {
      id: 4, title: "Railway Fuel Tank Wagon Certification", category: "Rail Industry", location: "Tanzania", year: "2024",
      description: "Tank calibration and structural inspection for 50 fuel transportation rail wagons using UT and RT testing methods.",
      image: railIndustryImg,
      results: ["50 wagons certified", "8 immediate repairs identified", "5-year life extension"],
    },
    {
      id: 5, title: "Bolloré Marine Terminal Expansion", category: "Marine & Shipping", location: "Djibouti", year: "2023",
      description: "Marine terminal cargo tank inspection and loading arm integrity assessment with UAV inspection technology.",
      image: fieldWork3,
      results: ["SOLAS/IMO compliance", "Zero operational disruption", "3-year coating extension"],
    },
    {
      id: 6, title: "Custom Platform Fabrication & Installation", category: "Oil & Gas", location: "Mombasa, Kenya", year: "2024",
      description: "Design, fabrication, and installation of working platforms for offshore facility maintenance with 3D modeling.",
      image: fieldWork5,
      results: ["On schedule & budget", "All safety inspections passed", "Enhanced worker efficiency"],
    },
    {
      id: 7, title: "Multi-Site Inspection Program", category: "Storage Terminals", location: "East Africa", year: "2023",
      description: "Regional inspection program covering fuel depots across 5 East African countries with centralized management.",
      image: fieldWork6,
      results: ["150+ tanks inspected", "Standardized reporting", "23 critical issues detected"],
    },
    {
      id: 8, title: "Engineering Design & Quality Assurance", category: "Oil & Gas", location: "Kenya", year: "2024",
      description: "Comprehensive design review and quality assurance for major infrastructure project with detailed blueprint analysis.",
      image: constructionBlueprints,
      results: ["First-review approval", "Zero rework required", "Ahead of schedule delivery"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 relative bg-background">
      {/* Hero Section - Evasion Style */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/construction-concept-image-helmet-rolled-blueprints-wooden-boards-retro-style.jpg"
            alt="Construction concept"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <AnimateOnScroll direction="left">
              <Badge variant="outline" className="mb-8 px-6 py-2.5 text-sm font-medium tracking-wide border-primary/30 bg-primary/5 text-primary">
                Project Gallery
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                <span className="text-foreground">Our</span><br />
                <span className="text-primary">Projects</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delay={150}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Showcasing our expertise across industries and regions throughout Africa.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <AnimateOnScroll key={project.id} direction="up" delay={(i % 6) * 80}>
                <Card className="group h-full overflow-hidden border-border/40 bg-card rounded-[1.5rem] hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-medium">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white line-clamp-2">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="pt-4 border-t border-border/40">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Results</h4>
                      <ul className="space-y-1.5">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "35+", label: "Countries Served" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "20+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Let&apos;s discuss how we can deliver exceptional results for your next challenge.
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

export default ProjectGallery;
