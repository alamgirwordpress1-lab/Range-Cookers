"use client";

import * as React from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useFinePointer } from "@/components/shared/motion";

/**
 * Minimal black-and-white cursor: a ring that trails the pointer and uses
 * `mix-blend-difference` so it stays visible on both black and white
 * sections. It grows over interactive elements. Desktop only, and fully
 * disabled for reduced-motion users (native cursor is restored).
 */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const x = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.5 });
  const y = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.5 });
  const [active, setActive] = React.useState(false);
  const [down, setDown] = React.useState(false);

  React.useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(!!target?.closest("a, button, [data-cursor], input, label"));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
    >
      <motion.span
        animate={{ scale: down ? 0.8 : active ? 2.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
        style={{ backgroundColor: active ? "rgba(255,255,255,0.9)" : "transparent" }}
      />
    </motion.div>
  );
}
