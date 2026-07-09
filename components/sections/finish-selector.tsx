"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { FINISHES } from "@/lib/product";
import { SectionHeading } from "@/components/shared/section-heading";
import { Magnetic, Reveal, Spotlight, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { RangeCooker } from "@/components/shared/range-cooker";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { useSelection } from "@/components/providers/selection-provider";
import { cn } from "@/lib/utils";

export function FinishSelector() {
  const { finish, finishId, setFinishId } = useSelection();

  return (
    <section id="finishes" className="relative border-y border-sand bg-linen/40">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Three finishes"
          title="Choose the finish that suits your kitchen"
          intro="Every finish shares the same Master Series build — the difference is the mood it sets in the room. Select one to preview it across the page."
        />

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {FINISHES.map((f) => {
            const active = f.id === finishId;
            return (
              <StaggerItem key={f.id}>
                <Spotlight radiusClass="rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setFinishId(f.id)}
                    aria-pressed={active}
                    className={cn(
                      "group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-cream text-left shadow-soft transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      active ? "border-ink ring-1 ring-ink" : "border-sand"
                    )}
                  >
                    {/* material swatch */}
                    <div className={cn("relative h-40 w-full overflow-hidden", f.swatchClass)}>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <AnimatePresence>
                        {active && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white shadow-soft"
                          >
                            <Check className="h-4 w-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-ink">{f.name}</h3>
                        <span
                          className={cn(
                            "text-xs font-medium",
                            active ? "text-ink" : "text-stone-400"
                          )}
                        >
                          {active ? "Selected" : "Select"}
                        </span>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                        {f.copy}
                      </p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-ink">
                        {f.suits}
                      </p>
                    </div>
                  </button>
                </Spotlight>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Your selected finish */}
        <Reveal delay={0.05} className="mt-6">
          <div className="grid items-center gap-6 rounded-2xl border border-sand bg-gradient-to-br from-linen to-white p-6 sm:grid-cols-[220px_1fr] sm:p-8">
            <div className="rounded-2xl border border-sand bg-cream p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={finishId}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RangeCooker finishId={finishId} className="max-h-40" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                Your selected finish
              </span>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {finish.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-600">
                {finish.suits} A matching range hood and backsplash are also
                available to complete the look.
              </p>
              <div className="mt-5">
                <Magnetic>
                  <AddToCartButton size="default" label={`Add ${finish.name} to Cart`} />
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
