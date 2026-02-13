import { useState } from "react";
import { MapPin } from "lucide-react";
import Africa from "@react-map/africa";

const highlightedCountries = [
  "Kenya", "Uganda", "Tanzania", "Ethiopia", "Rwanda", "Burundi",
  "Zambia", "Eritrea", "Seychelles", "Madagascar", "Ghana",
  "Democratic Republic of the Congo", "Malawi", "Djibouti", "Zimbabwe", "Somalia",
];

const displayNames: Record<string, string> = {
  "Democratic Republic of the Congo": "DRC",
};

const AfricaMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Build color map for highlighted countries
  const cityColors: Record<string, string> = {};
  highlightedCountries.forEach((country) => {
    cityColors[country] = "hsl(358, 71%, 35%)"; // Murban red
  });
  // Kenya gets a darker shade as HQ
  cityColors["Kenya"] = "hsl(358, 71%, 25%)";

  // Override hovered country color
  if (hoveredCountry && highlightedCountries.includes(hoveredCountry)) {
    cityColors[hoveredCountry] = "hsl(358, 71%, 45%)";
  }

  const displayList = highlightedCountries.map((c) => ({
    key: c,
    label: displayNames[c] || c,
  }));

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden bg-muted/20 border border-border p-4 md:p-8 flex items-center justify-center">
        <Africa
          type="select-single"
          size={typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 500}
          mapColor="hsl(0, 0%, 80%)"
          strokeColor="hsl(0, 0%, 96%)"
          strokeWidth={0.8}
          hoverColor="hsl(358, 71%, 45%)"
          selectColor="hsl(358, 71%, 35%)"
          hints={true}
          hintTextColor="#ffffff"
          hintBackgroundColor="hsl(358, 71%, 35%)"
          hintPadding="4px 10px"
          hintBorderRadius={4}
          cityColors={cityColors}
          onSelect={(country) => {
            if (country && highlightedCountries.includes(country)) {
              setHoveredCountry(country);
            }
          }}
          disableClick={true}
          disableHover={false}
        />
      </div>

      {/* Legend grid */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">Hover over highlighted countries to explore our operations</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm max-w-3xl mx-auto">
          {displayList.map(({ key, label }) => (
            <div
              key={key}
              className={`transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-2 ${
                hoveredCountry === key
                  ? "text-primary-foreground bg-primary font-bold scale-105 shadow-md"
                  : key === "Kenya"
                  ? "text-primary font-semibold bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <MapPin className={`h-3.5 w-3.5 flex-shrink-0 ${
                hoveredCountry === key ? "text-primary-foreground" : key === "Kenya" ? "text-primary" : "text-primary/60"
              }`} />
              {label}{key === "Kenya" ? " (HQ)" : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMap;
