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
import { formatGBP } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { RangeCooker } from "@/components/shared/range-cooker";
import { Magnetic } from "@/components/shared/motion";
import { useSelection } from "@/components/providers/selection-provider";
import { cn } from "@/lib/utils";

const HERO_CHIPS = [
  { icon: Check, label: "In stock" },
  { icon: Lock, label: "Secure checkout" },
  { icon: Truck, label: "UK delivery support" },
  { icon: Wrench, label: "Installation options available" },
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
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <section id="overview" ref={ref} className="relative overflow-hidden">
      {/* soft showroom lighting, no gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-porcelain to-porcelain" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
      </div>

      <div className="container-tight grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-20">
        {/* Copy column */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="kicker"
          >
            {PRODUCT.series}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Master 90cm Range Cooker
            <span className="block text-stone-500">Single Oven Dual Fuel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-lg leading-relaxed text-stone-600"
          >
            A range cooker built to anchor the whole kitchen. Five gas burners for
            proper control, a roomy 103-litre electric oven for everyday family
            cooking, and the quiet, substantial feel of the Bertazzoni Master
            Series — in the finish that suits your space.
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-1"
          >
            <span className="font-serif text-4xl font-semibold text-ink">
              {formatGBP(PRODUCT.price)}
            </span>
            <span className="pb-1 text-sm text-stone-500">incl. VAT</span>
            <span className="pb-1 text-base text-stone-500 line-through">
              RRP {formatGBP(PRODUCT.rrp)}
            </span>
            <span className="mb-0.5 rounded-full border border-ink/15 bg-ink/[0.04] px-3 py-1 text-xs font-semibold text-ink">
              Save {formatGBP(PRODUCT.rrp - PRODUCT.price)}
            </span>
          </motion.div>

          {/* Finish selector */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                Finish
              </span>
              <span className="text-sm font-medium text-ink">{finish.name}</span>
            </div>
            <div className="mt-3">
              <FinishDots />
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Magnetic>
              <AddToCartButton size="lg" className="sm:min-w-[13rem]" />
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href={PRODUCT.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call to Order
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          {/* Trust chips */}
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-stone-600"
              >
                <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual column */}
        <motion.div style={{ y }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-sand bg-gradient-to-b from-white to-linen p-6 shadow-lift sm:p-10">
              {/* soft floor reflection */}
              <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.10),rgba(0,0,0,0))]" />
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <RangeCooker finishId={finishId} className="mx-auto max-h-[420px]" />
              </motion.div>
            </div>

            {/* floating finish label card */}
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-sand bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:left-8">
              <span className={cn("h-9 w-9 rounded-full border border-sand", finish.swatchClass)} />
              <span className="flex flex-col leading-tight">
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-stone-500">
                  Shown in
                </span>
                <span className="text-sm font-semibold text-ink">
                  {finish.name}
                </span>
              </span>
            </div>

            {/* PRODUCT IMAGE NOTE: replace the SVG above with real photography per finish */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
