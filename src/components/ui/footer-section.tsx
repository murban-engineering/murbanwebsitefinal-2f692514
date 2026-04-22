import * as React from "react";
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createServiceSlug } from "@/pages/Services";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Industry Solutions", to: "/industry-solutions" },
  { label: "Project Gallery", to: "/project-gallery" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

const servicePath = (title: string) => `/services/${createServiceSlug(title)}`;

const primaryServices = [
  { label: "NDT Inspection Services", to: servicePath("NDT Inspection Services") },
  { label: "Phased Array Testing", to: servicePath("Murban Phased Array Testing") },
  { label: "API 653 Tank Inspection", to: servicePath("API 653 Aboveground Storage Tank Inspection and Certification") },
  { label: "Pipeline Inspection", to: servicePath("API 570 Piping Inspection and Certification") },
  { label: "3D Laser Scanning", to: servicePath("3D Laser Scanning Services") },
  { label: "Tank Calibration", to: servicePath("Tank Calibration Services") },
];

const resourceLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/faq" },
  { label: "Client Portal", to: "https://portal.murban-eng.com/#/", external: true },
];

const linkedInCompanyUrl = "https://ke.linkedin.com/company/murban-engineering";

function Footerdemo() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 bg-secondary text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Stay Updated with Murban
              </h3>
              <p className="text-white/70">
                Get the latest news on our services, industry insights, and project updates.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 h-12 w-full md:w-72 focus:border-primary"
              />
              <Button className="rounded-full h-12 px-6 shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 group">
                <img
                  src="/murbanlogo.ico"
                  alt="Murban Engineering"
                  className="h-12 w-12 rounded-xl"
                  width={48}
                  height={48}
                />
                <span className="flex flex-col leading-none">
                  <span className="text-2xl font-bold text-white">MURBAN</span>
                  <span className="text-xs font-semibold tracking-[0.25em] text-white/60">ENGINEERING</span>
                </span>
              </Link>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              A specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). 
              Delivering reliable inspection solutions across Africa since 2007.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+254202650618" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+254 20 265 0618</span>
              </a>
              <a href="mailto:info@murban-eng.com" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@murban-eng.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Off Airport Road, Mombasa<br />Port Reitz, Kenya</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Company</h4>
            <nav className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-white/70 hover:text-primary transition-all duration-200 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Services</h4>
            <nav className="space-y-3">
              {primaryServices.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-white/70 hover:text-primary transition-all duration-200 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources & Social */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Resources</h4>
            <nav className="space-y-3 mb-8">
              {resourceLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.to}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-200 hover:translate-x-1"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-white/70 hover:text-primary transition-all duration-200 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h4>
              <a
                href={linkedInCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-primary/20 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Theme Toggle */}
            <div className="mt-6">
              <ThemeToggle id="footer-theme-toggle" className="bg-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-white/50">
              © {currentYear} Murban Engineering Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-white/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link to="/faq" className="text-white/50 hover:text-primary transition-colors">
                FAQ
              </Link>
              <span className="text-white/20">|</span>
              <a
                href="https://nyotaai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
              >
                Powered by Nyota AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
