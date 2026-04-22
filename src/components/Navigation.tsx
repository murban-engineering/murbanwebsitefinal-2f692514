import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu, ArrowUpRight } from "lucide-react";
import { allServices } from "@/pages/Services";
import { industrySolutionLinks } from "@/pages/IndustrySolutions";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = useMemo(
    () =>
      allServices.slice(0, 12).map((service) => ({
        label: service.title,
        to: `/services/${service.slug}`,
      })),
    []
  );

  const navLinks: Array<{ name: string; path: string; external?: boolean }> = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industry-solutions" },
    { name: "Gallery", path: "/project-gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/services") {
      return location.pathname === "/services" || location.pathname.startsWith("/services/");
    }
    if (path === "/industry-solutions") {
      return location.pathname === "/industry-solutions";
    }
    return location.pathname === path;
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/murbanlogo.ico"
              alt="Murban Engineering Logo"
              className="h-10 w-10 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              width={40}
              height={40}
            />
            <span className="flex flex-col leading-none font-sans">
              <span className="text-xl font-bold tracking-tight text-primary transition-colors">MURBAN</span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">Engineering</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              
              if (link.path === "/services" || link.path === "/industry-solutions") {
                const dropdownLinks =
                  link.path === "/services"
                    ? serviceLinks
                    : industrySolutionLinks.map((industry) => ({
                        label: industry.title,
                        to: `/industry-solutions#${industry.slug}`,
                      }));

                return (
                  <div key={link.path} className="relative group">
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                        active
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block group-focus-within:block z-50">
                      <div className="w-80 max-h-[28rem] overflow-auto rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl p-2 shadow-xl">
                        {dropdownLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors group/item"
                          >
                            <span>{item.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                        {link.path === "/services" && (
                          <Link
                            to="/services"
                            className="flex items-center justify-center rounded-xl px-4 py-3 mt-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
                          >
                            View All Services
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={link.path === "/" ? handleHomeClick : undefined}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA + Portal */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://portal.murban-eng.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portal
            </a>
            <Button asChild size="sm" className="rounded-full px-6 shadow-sm">
              <Link to="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm p-2.5 shadow-sm transition-all duration-200 hover:bg-muted active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 bg-background/98 backdrop-blur-xl rounded-b-3xl shadow-xl border-x border-b border-border/30">
            <div className="space-y-1 border-t border-border/30 pt-4 px-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.path === "/services" || link.path === "/industry-solutions") {
                  const subLinks =
                    link.path === "/services"
                      ? serviceLinks.slice(0, 8)
                      : industrySolutionLinks.map((industry) => ({
                          label: industry.title,
                          to: `/industry-solutions#${industry.slug}`,
                        }));

                  return (
                    <div key={link.path} className="rounded-xl border border-border/40 overflow-hidden">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                          active
                            ? "text-foreground bg-muted"
                            : "text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="max-h-48 overflow-auto px-2 pb-2 space-y-0.5 bg-muted/30">
                        {subLinks.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      if (link.path === "/") handleHomeClick();
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                      active
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 px-2 space-y-2">
                <a
                  href="https://portal.murban-eng.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-xl border border-border/50"
                >
                  Client Portal
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors rounded-xl"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
