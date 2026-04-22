import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu, ArrowUpRight, Phone } from "lucide-react";
import { allServices } from "@/pages/Services";
import { industrySolutionLinks } from "@/pages/IndustrySolutions";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const serviceLinks = useMemo(
    () =>
      allServices.slice(0, 8).map((service) => ({
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
    { name: "Projects", path: "/project-gallery" },
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
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={handleHomeClick}>
              <div className="relative">
                <img
                  src="/murbanlogo.ico"
                  alt="Murban Engineering Logo"
                  className="h-10 w-10 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={40}
                  height={40}
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
                  MURBAN
                </span>
                <span className={`text-[10px] font-semibold tracking-[0.25em] transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                  ENGINEERING
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const hasDropdown = link.path === "/services" || link.path === "/industry-solutions";

                if (hasDropdown) {
                  const dropdownLinks = link.path === "/services"
                    ? serviceLinks
                    : industrySolutionLinks.map((industry) => ({
                        label: industry.title,
                        to: `/industry-solutions#${industry.slug}`,
                      }));

                  return (
                    <div key={link.path} className="relative group">
                      <Link
                        to={link.path}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          scrolled
                            ? active
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:text-primary hover:bg-muted"
                            : active
                              ? "text-white bg-white/20"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown */}
                      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="w-80 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl p-3 shadow-xl">
                          <div className="space-y-1">
                            {dropdownLinks.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 group/item"
                              >
                                <span>{item.label}</span>
                                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <Link
                              to={link.path}
                              className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                            >
                              View All {link.name}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
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
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? active
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-muted"
                        : active
                          ? "text-white bg-white/20"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://portal.murban-eng.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                Portal
              </a>
              <Button asChild size="sm" className="rounded-full px-6 shadow-md">
                <Link to="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden rounded-xl p-3 transition-all duration-200 active:scale-95 ${
                scrolled
                  ? "bg-muted text-foreground"
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-secondary/95 backdrop-blur-xl lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 pt-28 pb-8 h-full overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link, i) => {
              const active = isActive(link.path);
              const hasDropdown = link.path === "/services" || link.path === "/industry-solutions";

              if (hasDropdown) {
                const dropdownLinks = link.path === "/services"
                  ? serviceLinks
                  : industrySolutionLinks.map((industry) => ({
                      label: industry.title,
                      to: `/industry-solutions#${industry.slug}`,
                    }));

                return (
                  <div key={link.path} className="space-y-2">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between w-full px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                        active
                          ? "text-primary bg-primary/10"
                          : "text-white hover:bg-white/10"
                      }`}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {link.name}
                      <ChevronDown className="h-5 w-5" />
                    </Link>
                    <div className="ml-4 space-y-1 border-l-2 border-white/10 pl-4">
                      {dropdownLinks.slice(0, 5).map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-primary font-medium"
                      >
                        View All →
                      </Link>
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
                  className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-white hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 space-y-4">
            <Button asChild size="lg" className="w-full rounded-2xl h-14">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="h-5 w-5 mr-2" />
                Get a Quote
              </Link>
            </Button>
            <a
              href="https://portal.murban-eng.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Client Portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4">Contact Us</p>
            <a href="tel:+254202650618" className="block text-white text-lg font-medium mb-2">
              +254 20 265 0618
            </a>
            <a href="mailto:info@murban-eng.com" className="text-primary">
              info@murban-eng.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
