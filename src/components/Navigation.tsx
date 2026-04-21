import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
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

  const navLinks: Array<{ name: string; path: string; external?: boolean }> = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industry Solutions", path: "/industry-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Portal", path: "https://portal.murban-eng.com/#/", external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" 
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
              className="h-10 w-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={40}
              height={40}
            />
            <span className="flex flex-col leading-none font-sans">
              <span className="text-xl font-bold tracking-tight text-primary transition-colors">MURBAN</span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-secondary">ENGINEERING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
              const active = isActive(link.path);
              const baseLinkClass = scrolled
                ? active 
                  ? "text-foreground bg-muted" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                : active 
                  ? "text-foreground bg-foreground/10" 
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5";

              if (link.external) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${baseLinkClass}`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={link.path === "/" ? handleHomeClick : undefined}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${baseLinkClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 bg-background/95 backdrop-blur-xl rounded-b-3xl shadow-xl border-x border-b border-border/30">
            <div className="space-y-1 border-t border-border/30 pt-4 px-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.external) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/50 rounded-xl"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      if (link.path === "/") {
                        handleHomeClick();
                      }
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
