"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COOKING_MODES } from "@/lib/product";
import { Icon } from "@/components/shared/icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Spotlight } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

export function CookingModes() {
  const [active, setActive] = React.useState(0);
  const mode = COOKING_MODES[active];

  return (
    <section className="relative bg-porcelain">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Cooking modes"
          title="Eleven functions, one intuitive oven"
          intro="Explore the modes you'll actually reach for. Select one to see how it helps."
        />

        <Reveal delay={0.05}>
          <Spotlight
            tone="dark"
            lift={false}
            size={420}
            radiusClass="rounded-[1.75rem]"
            className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-charcoal text-white shadow-panel"
          >
            <div className="grid lg:grid-cols-[minmax(0,320px)_1fr]">
              {/* Selector */}
              <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                <p className="px-2 pb-3 text-[0.7rem] uppercase tracking-[0.18em] text-white/45">
                  Select a function
                </p>
                <div
                  className="grid grid-cols-2 gap-2 lg:grid-cols-1"
                  role="tablist"
                  aria-label="Cooking modes"
                >
                  {COOKING_MODES.map((m, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={m.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActive(i)}
                        className={cn(
                          "group relative flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                          isActive
                            ? "border-white/70 bg-white/10"
                            : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.07]"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mode-active"
                            className="absolute inset-0 -z-0 rounded-xl ring-1 ring-white/60"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span
                          className={cn(
                            "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isActive
                              ? "bg-white text-ink"
                              : "bg-white/10 text-white/70 group-hover:text-white"
                          )}
                        >
                          <Icon name={m.icon} className="h-5 w-5" />
                        </span>
                        <span
                          className={cn(
                            "relative z-10 text-sm font-medium",
                            isActive ? "text-white" : "text-white/70"
                          )}
                        >
                          {m.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Display */}
              <div className="relative min-h-[320px] p-7 sm:p-10">
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),rgba(255,255,255,0))]" />

                <div className="relative flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                  <span>
                    Mode {String(active + 1).padStart(2, "0")} / {String(COOKING_MODES.length).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Ready
                  </span>
                </div>

                <div className="mt-2 h-px w-full bg-white/10">
                  <motion.div
                    className="h-px bg-white"
                    animate={{ width: `${((active + 1) / COOKING_MODES.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-8"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ink">
                      <Icon name={mode.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                      {mode.name}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                      {mode.benefit}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
