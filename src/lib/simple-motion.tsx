import { forwardRef, useEffect, useRef } from "react";

type MotionPathProps = React.SVGProps<SVGPathElement> & {
  initial?: {
    pathLength?: number;
    opacity?: number;
  };
  animate?: {
    pathLength?: number;
    opacity?: number | number[];
    pathOffset?: number[];
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
    repeat?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
  };
};

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & {
  initial?: {
    opacity?: number;
    y?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
  };
};

type MotionSpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  initial?: {
    opacity?: number;
    y?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
  };
};

const MotionPath = forwardRef<SVGPathElement, MotionPathProps>((props, ref) => {
  const { initial, animate, transition, style, ...rest } = props;
  const innerRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const element = innerRef.current;
    if (!element || !element.getTotalLength) {
      return;
    }

    const length = element.getTotalLength();
    const duration = transition?.duration ?? 1.25;
    const delay = transition?.delay ?? 0;
    const ease = transition?.ease === "easeOut" ? "cubic-bezier(0.0, 0, 0.2, 1)" : "ease";

    element.style.strokeDasharray = `${length}`;
    if (initial?.pathLength === 0 || animate?.pathLength === 1) {
      element.style.strokeDashoffset = `${length}`;
    }

    const timeout = window.setTimeout(() => {
      element.style.transition = `stroke-dashoffset ${duration}s ${ease}`;
      element.style.strokeDashoffset = "0";
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [initial?.pathLength, animate?.pathLength, transition?.duration, transition?.delay, transition?.ease, props.d]);

  return (
    <path
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          // eslint-disable-next-line no-param-reassign
          (ref as React.MutableRefObject<SVGPathElement | null>).current = node;
        }
      }}
      style={{ strokeDasharray: "100%", strokeDashoffset: "100%", ...style }}
      {...rest}
    />
  );
});

MotionPath.displayName = "MotionPath";

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => {
  const { initial, animate, transition, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = innerRef.current;
    if (!element) return;

    const duration = transition?.duration ?? 1;
    const delay = transition?.delay ?? 0;

    // Set initial state
    if (initial?.opacity !== undefined) {
      element.style.opacity = String(initial.opacity);
    }
    if (initial?.y !== undefined) {
      element.style.transform = `translateY(${initial.y}px)`;
    }

    const timeout = window.setTimeout(() => {
      element.style.transition = `all ${duration}s ease`;
      if (animate?.opacity !== undefined) {
        element.style.opacity = String(animate.opacity);
      }
      if (animate?.y !== undefined) {
        element.style.transform = `translateY(${animate.y}px)`;
      }
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [initial, animate, transition]);

  return (
    <div
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
      style={style}
      {...rest}
    />
  );
});

MotionDiv.displayName = "MotionDiv";

const MotionSpan = forwardRef<HTMLSpanElement, MotionSpanProps>((props, ref) => {
  const { initial, animate, transition, style, ...rest } = props;
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = innerRef.current;
    if (!element) return;

    const duration = transition?.duration ?? 1;
    const delay = transition?.delay ?? 0;

    // Set initial state
    if (initial?.opacity !== undefined) {
      element.style.opacity = String(initial.opacity);
    }
    if (initial?.y !== undefined) {
      element.style.transform = `translateY(${initial.y}px)`;
    }

    const timeout = window.setTimeout(() => {
      element.style.transition = `all ${duration}s ease`;
      if (animate?.opacity !== undefined) {
        element.style.opacity = String(animate.opacity);
      }
      if (animate?.y !== undefined) {
        element.style.transform = `translateY(${animate.y}px)`;
      }
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [initial, animate, transition]);

  return (
    <span
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLSpanElement | null>).current = node;
        }
      }}
      style={style}
      {...rest}
    />
  );
});

MotionSpan.displayName = "MotionSpan";

export const motion = {
  path: MotionPath,
  div: MotionDiv,
  span: MotionSpan,
};

export type { MotionPathProps, MotionDivProps, MotionSpanProps };
