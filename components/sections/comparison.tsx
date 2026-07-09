"use client";

import { Check, Minus } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/product";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";

export function Comparison() {
  return (
    <section className="relative bg-porcelain">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="How it compares"
          title="Standard cooker vs Bertazzoni Master 90cm"
          intro="An honest look at what steps up when you move from a typical built-in cooker to a 90cm Master Series range."
        />

        {/* Desktop table */}
        <Reveal delay={0.05} className="mt-12 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-sand shadow-soft">
            {/* header */}
            <div className="grid grid-cols-[1.1fr_1fr_1.2fr]">
              <div className="bg-linen p-5" />
              <div className="border-l border-sand bg-linen p-5">
                <span className="text-sm font-semibold text-stone-600">
                  Typical standard cooker
                </span>
              </div>
              <div className="border-l border-white/15 bg-ink p-5">
                <span className="text-xs uppercase tracking-[0.14em] text-white/70">
                  Bertazzoni
                </span>
                <p className="text-sm font-semibold text-white">
                  Master 90cm Range
                </p>
              </div>
            </div>

            {/* rows */}
            <StaggerGroup>
              {COMPARISON_ROWS.map((row) => (
                <StaggerItem key={row.aspect}>
                  <div className="group grid grid-cols-[1.1fr_1fr_1.2fr] border-t border-sand transition-colors">
                    <div className="bg-cream p-5 text-sm font-medium text-ink transition-colors group-hover:bg-linen/70">
                      {row.aspect}
                    </div>
                    <div className="flex items-start gap-2.5 border-l border-sand bg-cream p-5 text-sm text-stone-600 transition-colors group-hover:bg-linen/70">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                      <span>{row.standard}</span>
                    </div>
                    <div className="flex items-start gap-2.5 border-l border-ink/10 bg-ink/[0.04] p-5 text-sm text-ink transition-colors group-hover:bg-ink/[0.08]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                      <span>{row.master}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <StaggerGroup className="mt-12 space-y-4 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <StaggerItem key={row.aspect}>
              <div className="overflow-hidden rounded-2xl border border-sand bg-cream shadow-soft">
                <div className="border-b border-sand bg-linen px-5 py-3 text-sm font-semibold text-ink">
                  {row.aspect}
                </div>
                <div className="grid gap-3 p-5">
                  <div className="flex items-start gap-2.5">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-stone-400">
                        Standard
                      </span>
                      <span className="text-sm text-stone-600">{row.standard}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg bg-ink/[0.05] p-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-ink">
                        Master 90cm
                      </span>
                      <span className="text-sm text-ink">{row.master}</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
