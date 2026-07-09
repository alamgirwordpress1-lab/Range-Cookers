"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** True only on devices with a precise hovering pointer (desktop mice). */
export function useFinePointer() {
  const [fine, setFine] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return fine;
}

/**
 * Fade + rise reveal on scroll. Falls back to a plain fade when the user
 * prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Wraps a group of StaggerItem children and animates them in sequence. */
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const itemVariants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE },
    },
  };
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/** Simple hover-lift wrapper for interactive cards. */
export function HoverLift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Magnetic wrapper — the child drifts subtly toward the cursor on hover.
 * Disabled entirely on touch devices and for reduced-motion users.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const ref = React.useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.3 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.3 });

  if (reduce || !fine) {
    return <span className={cn("inline-flex", className)}>{children}</span>;
  }

  function handleMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.span>
  );
}

/**
 * Spotlight card — a soft radial highlight follows the cursor inside the
 * card, plus an optional hover-lift. `tone` picks the glow colour for
 * light vs dark surfaces.
 */
export function Spotlight({
  children,
  className,
  radiusClass = "rounded-2xl",
  tone = "light",
  lift = true,
  size = 260,
}: {
  children: React.ReactNode;
  className?: string;
  radiusClass?: string;
  tone?: "light" | "dark";
  lift?: boolean;
  size?: number;
}) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: "50%", y: "50%", active: false });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: `${e.clientX - r.left}px`,
      y: `${e.clientY - r.top}px`,
      active: true,
    });
  }

  const glow =
    tone === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.055)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={fine ? handleMove : undefined}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      whileHover={reduce || !lift ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={cn("relative h-full", className)}
    >
      {fine && !reduce && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-10 transition-opacity duration-300",
            radiusClass
          )}
          style={{
            opacity: pos.active ? 1 : 0,
            background: `radial-gradient(${size}px circle at ${pos.x} ${pos.y}, ${glow}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

/** Vertical parallax as the element scrolls through the viewport. */
export function ParallaxY({
  children,
  distance = 60,
  className,
}: {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance]
  );
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Counts a number up from zero when it scrolls into view. */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.2,
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const d = duration * 1000;
    const tick = (t: number) => {
      const p = Math.min((t - start) / d, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
