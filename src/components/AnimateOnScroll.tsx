import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const getInitialTransform = (direction: Direction) => {
  switch (direction) {
    case "left": return "translateX(-60px)";
    case "right": return "translateX(60px)";
    case "up": return "translateY(40px)";
    case "down": return "translateY(-40px)";
  }
};

const AnimateOnScroll = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0,0,0)" : getInitialTransform(direction),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
