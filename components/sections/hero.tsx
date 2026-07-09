"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Check, Lock, PhoneCall, Truck, Wrench } from "lucide-react";
import { FINISHES, PRODUCT } from "@/lib/product";
import { cn, formatGBP } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { RangeCooker } from "@/components/shared/range-cooker";
import { Magnetic } from "@/components/shared/motion";
import { PixelCanvas } from "@/components/ui/pixel-perfect-hero";
import { useSelection } from "@/components/providers/selection-provider";

// Subtle greyscale field with a bright white accent (~1 in 5 pixels)
const PIXEL_COLORS = ["#2b2b2b", "#3a3a3a", "#4a4a4a", "#5c5c5c", "#f2f2f2"];

const HERO_CHIPS = [
  { icon: Check, label: "In stock" },
  { icon: Lock, label: "Secure checkout" },
  { icon: Truck, label: "UK delivery support" },
  { icon: Wrench, label: "Installation options available" },
];

const CREDENTIALS = [
  "Bertazzoni Master Series",
  "5 gas burners",
  "Dual-ring power burner",
  "103L multifunction oven",
  "11 cooking functions",
  "Triple-glazed door",
  "Cast iron supports",
  "Energy rating A",
];

export function FinishDots({
  size = "md",
  dark = false,
}: {
  size?: "sm" | "md";
  dark?: boolean;
}) {
  const { finishId, setFinishId } = useSelection();
  return (
    <div
      className="flex items-center gap-3"
      role="radiogroup"
      aria-label="Select a finish"
    >
      {FINISHES.map((f) => {
        const active = f.id === finishId;
        return (
          <button
            key={f.id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={f.name}
            title={f.name}
            onClick={() => setFinishId(f.id)}
            className={cn(
              "group relative rounded-full transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              dark
                ? "focus-visible:ring-white focus-visible:ring-offset-black"
                : "focus-visible:ring-ink focus-visible:ring-offset-white",
              active ? "scale-105" : "hover:scale-105"
            )}
          >
            <span
              className={cn(
                "block rounded-full border shadow-soft",
                f.swatchClass,
                size === "md" ? "h-11 w-11" : "h-8 w-8",
                active
                  ? dark
                    ? "border-white ring-2 ring-white ring-offset-2 ring-offset-black"
                    : "border-ink ring-2 ring-ink ring-offset-2 ring-offset-white"
                  : dark
                    ? "border-white/30"
                    : "border-sand"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export function Hero() {
  const { finish, finishId } = useSelection();
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      id="overview"
      ref={ref}
      className="relative isolate flex min-h-[calc(100dvh-7rem)] flex-col overflow-hidden bg-black text-white"
    >
      {/* Pixel-animation background + overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <PixelCanvas colors={PIXEL_COLORS} gap={10} speed={30} />
        {/* fade the field into pure black toward the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_78%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Content */}
      <div className="container-tight relative z-10 flex flex-1 flex-col items-center justify-center gap-5 py-10 text-center sm:gap-6 sm:py-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="kicker kicker-on-dark"
        >
          {PRODUCT.series}
        </motion.span>

        {/* Glass shimmer headline */}
        <div>
          <h1 className="sr-only">
            {PRODUCT.name} — {PRODUCT.series}
          </h1>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="hero-glass-text flex flex-wrap items-baseline justify-center gap-x-5 gap-y-0 px-1 text-[2.9rem] leading-[0.92] sm:gap-x-8 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="font-serif font-medium italic">Master</span>
            <span className="font-sans font-extrabold tracking-tighter">90cm</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-white/55 sm:text-xs"
          >
            Range Cooker · Single Oven · Dual Fuel
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          A range cooker built to anchor the whole kitchen — five gas burners for
          proper control, a roomy 103-litre electric oven, and the quiet,
          substantial feel of the Bertazzoni Master Series.
        </motion.p>

        {/* Product centrepiece */}
        <motion.div
          style={{ y: productY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)]" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <RangeCooker
              finishId={finishId}
              className="mx-auto max-h-[180px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)] sm:max-h-[210px]"
            />
          </motion.div>
          <div className="mt-2 flex items-center justify-center gap-2.5">
            <span
              className={cn(
                "h-6 w-6 rounded-full border border-white/25",
                finish.swatchClass
              )}
            />
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/55">
              Shown in{" "}
              <span className="font-medium text-white">{finish.name}</span>
            </span>
          </div>
        </motion.div>

        {/* Glass control strip: price · finish · CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md sm:p-5"
        >
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:gap-6">
            {/* Price */}
            <div className="text-center sm:text-left">
              <div className="flex items-end justify-center gap-2 sm:justify-start">
                <span className="font-serif text-3xl font-semibold text-white">
                  {formatGBP(PRODUCT.price)}
                </span>
                <span className="pb-1 text-xs text-white/50">incl. VAT</span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2 sm:justify-start">
                <span className="text-sm text-white/40 line-through">
                  RRP {formatGBP(PRODUCT.rrp)}
                </span>
                <span className="rounded-full border border-white/20 px-2 py-0.5 text-[0.7rem] font-semibold text-white">
                  Save {formatGBP(PRODUCT.rrp - PRODUCT.price)}
                </span>
              </div>
            </div>

            {/* Finish */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/45">
                Finish
              </span>
              <FinishDots dark size="sm" />
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2.5">
              <Magnetic>
                <AddToCartButton variant="glass" size="default" />
              </Magnetic>
              <Magnetic>
                <Button asChild variant="glassOutline" size="default">
                  <a href={PRODUCT.phoneHref}>
                    <PhoneCall className="h-4 w-4" />
                    <span className="hidden sm:inline">Call to Order</span>
                    <span className="sm:hidden">Call</span>
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </motion.div>

        {/* Trust chips */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60"
        >
          {HERO_CHIPS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-white" aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Credentials marquee */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center py-3.5 will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS].map(
              (c, i) => (
                <span
                  key={i}
                  className="flex items-center gap-x-6 pl-6 text-[0.7rem] uppercase tracking-[0.2em] text-white/50"
                >
                  {c}
                  <span aria-hidden className="text-white/25">
                    ✳
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
