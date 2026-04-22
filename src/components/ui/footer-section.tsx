import * as React from "react";
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { createServiceSlug } from "@/pages/Services";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Industry Solutions", to: "/industry-solutions" },
  { label: "Project Gallery", to: "/project-gallery" },
  { label: "Certifications", to: "/certifications" },
  { label: "FAQ", to: "/faq" },
];

const servicePath = (title: string) => `/services/${createServiceSlug(title)}`;

const serviceLinks = [
  { label: "NDT Inspection", to: servicePath("NDT Inspection Services") },
  { label: "Phased Array Testing", to: servicePath("Murban Phased Array Testing") },
  { label: "API 653 Tank Inspection", to: servicePath("API 653 Aboveground Storage Tank Inspection and Certification") },
  { label: "API 570 Piping", to: servicePath("API 570 Piping Inspection and Certification") },
  { label: "3D Laser Scanning", to: servicePath("3D Laser Scanning Services") },
  { label: "Tank Calibration", to: servicePath("Tank Calibration Services") },
];

const linkedInCompanyUrl = "https://ke.linkedin.com/company/murban-engineering";

function Footerdemo() {
  return (
    <footer className="relative border-t border-border/30 bg-card text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 group mb-6">
                <img
                  src="/murbanlogo.ico"
                  alt="Murban"
                  className="h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <span className="flex flex-col leading-none">
                  <span className="text-2xl font-bold tracking-tight text-primary">MURBAN</span>
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">Engineering</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
                Specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions for critical infrastructure across Africa.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@murban-eng.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                info@murban-eng.com
              </a>
              <a href="tel:+254202650618" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                +254 20 265 0618
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                Mombasa, Kenya
              </div>
            </div>

            {/* Social & Theme */}
            <div className="flex items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="outline" size="icon" className="rounded-xl border-border/50 bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                      <a href={linkedInCompanyUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <ThemeToggle id="footer-theme" className="bg-muted/50 rounded-xl" />
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Company</h3>
            <nav className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Services</h3>
            <nav className="space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              ))}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-2"
              >
                View all services <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Start a Project</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Ready to discuss your inspection needs? Our team is here to help.
            </p>
            <Button asChild className="w-full rounded-xl shadow-sm">
              <Link to="/contact">
                Get in Touch
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="https://portal.murban-eng.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground border border-border/50 rounded-xl transition-colors"
            >
              Client Portal
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Murban Engineering Services. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center gap-6 text-xs">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              Powered by{" "}
              <a
                href="https://nyotaai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                Nyota AI
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
