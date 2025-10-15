import { useState } from "react";
import { MapPin } from "lucide-react";

const AfricaMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries = [
    { name: "Kenya", cx: "68", cy: "52" },
    { name: "Uganda", cx: "62", cy: "48" },
    { name: "Tanzania", cx: "65", cy: "56" },
    { name: "Ethiopia", cx: "68", cy: "40" },
    { name: "Rwanda", cx: "60", cy: "50" },
    { name: "Burundi", cx: "60", cy: "52" },
    { name: "Zambia", cx: "58", cy: "66" },
    { name: "Eritrea", cx: "68", cy: "34" },
    { name: "Seychelles", cx: "80", cy: "54" },
    { name: "Madagascar", cx: "75", cy: "68" },
    { name: "Ghana", cx: "32", cy: "42" },
    { name: "DRC", cx: "52", cy: "52" },
    { name: "Malawi", cx: "64", cy: "66" },
    { name: "Djibouti", cx: "72", cy: "36" },
    { name: "Zimbabwe", cx: "60", cy: "70" },
    { name: "Somalia", cx: "74", cy: "44" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Africa continent outline - simplified SVG path */}
        <path
          d="M 48 10 
             C 50 10, 52 11, 54 12
             L 58 15
             C 62 18, 65 22, 67 26
             L 70 32
             C 72 36, 73 40, 73 44
             L 73 50
             C 73 54, 74 58, 76 62
             L 78 68
             C 79 72, 78 76, 76 80
             L 72 86
             C 68 90, 62 92, 56 92
             L 48 92
             C 42 92, 36 90, 32 87
             L 26 82
             C 22 78, 20 73, 20 68
             L 20 62
             C 20 58, 18 54, 16 50
             L 14 44
             C 13 40, 14 36, 16 32
             L 20 26
             C 23 22, 27 19, 32 17
             L 38 14
             C 41 12, 44 10, 48 10 Z"
          className="fill-muted/40 stroke-border stroke-[0.5]"
        />
        
        {/* Decorative gradient overlay */}
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <ellipse cx="50" cy="50" rx="35" ry="42" fill="url(#mapGlow)" />

        {/* Country markers */}
        {countries.map((country) => (
          <g
            key={country.name}
            onMouseEnter={() => setHoveredCountry(country.name)}
            onMouseLeave={() => setHoveredCountry(null)}
            className="cursor-pointer transition-all duration-200"
          >
            {/* Pulse animation for hovered marker */}
            {hoveredCountry === country.name && (
              <circle
                cx={country.cx}
                cy={country.cy}
                r="2.5"
                className="fill-primary animate-ping opacity-75"
              />
            )}
            
            {/* Main marker */}
            <circle
              cx={country.cx}
              cy={country.cy}
              r="1.5"
              className={`transition-all duration-200 ${
                hoveredCountry === country.name
                  ? "fill-primary stroke-primary-foreground stroke-[0.5] scale-125"
                  : "fill-primary/80 stroke-background stroke-[0.3]"
              }`}
              style={{
                filter: hoveredCountry === country.name 
                  ? "drop-shadow(0 0 3px hsl(var(--primary)))" 
                  : "none",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Country name tooltip */}
      {hoveredCountry && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-card border border-border px-4 py-2 rounded-xl shadow-lg animate-fade-in backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">{hoveredCountry}</span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span>Hover over markers to see country names</span>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {countries.map((country) => (
            <div
              key={country.name}
              className={`transition-all duration-200 ${
                hoveredCountry === country.name
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {country.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMap;
