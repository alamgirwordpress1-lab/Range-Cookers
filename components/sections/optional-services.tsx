"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Info, Plus } from "lucide-react";
import { PRODUCT, SERVICES } from "@/lib/product";
import { formatGBP } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Spotlight, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { useSelection } from "@/components/providers/selection-provider";
import { cn } from "@/lib/utils";

export function OptionalServices() {
  const { services, toggleService, servicesTotal, estimatedTotal } =
    useSelection();

  const selected = SERVICES.filter((s) => services[s.id]);

  return (
    <section className="relative bg-porcelain">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Optional services"
          title="Take the hassle out of delivery day"
          intro="These add-ons are here to make swapping your cooker straightforward — not to upsell you. Add only what you need, or call us if you're unsure."
        />

        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const on = !!services[s.id];
            return (
              <StaggerItem key={s.id}>
                <Spotlight radiusClass="rounded-2xl">
                  <button
                    type="button"
                    onClick={() => toggleService(s.id)}
                    aria-pressed={on}
                    className={cn(
                      "flex h-full w-full flex-col rounded-2xl border bg-cream p-6 text-left shadow-soft transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      on ? "border-ink ring-1 ring-ink" : "border-sand"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-ink">{s.name}</h3>
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                          on
                            ? "border-ink bg-ink text-white"
                            : "border-sand bg-linen text-stone-500"
                        )}
                      >
                        {on ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                      {s.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 font-serif text-xl font-semibold text-ink">
                      +{formatGBP(s.price)}
                    </span>
                  </button>
                </Spotlight>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Live estimate */}
        <Reveal delay={0.05} className="mt-6">
          <div className="grid gap-8 rounded-2xl border border-sand bg-cream p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_320px]">
            <div>
              <h3 className="text-lg font-semibold text-ink">Your estimate</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li className="flex items-center justify-between text-stone-600">
                  <span>Master 90cm Range Cooker</span>
                  <span className="font-medium text-ink">
                    {formatGBP(PRODUCT.price)}
                  </span>
                </li>
                <AnimatePresence initial={false}>
                  {selected.map((s) => (
                    <motion.li
                      key={s.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-between overflow-hidden text-stone-600"
                    >
                      <span>{s.name}</span>
                      <span className="font-medium text-ink">+{formatGBP(s.price)}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
                {servicesTotal > 0 && (
                  <li className="flex items-center justify-between border-t border-sand pt-2.5 text-xs text-stone-500">
                    <span>Services subtotal</span>
                    <span>{formatGBP(servicesTotal)}</span>
                  </li>
                )}
              </ul>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-stone-500">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink" />
                Indicative estimate including VAT. Availability of fitting
                services can depend on your location — please confirm when you
                order or call our team.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-ink p-6 text-white">
              <div>
                <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Estimated total
                </span>
                <motion.p
                  key={estimatedTotal}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-1 font-serif text-4xl font-semibold"
                >
                  {formatGBP(estimatedTotal)}
                </motion.p>
                <p className="mt-1 text-xs text-white/50">
                  {selected.length > 0
                    ? `Includes ${selected.length} service${selected.length > 1 ? "s" : ""}`
                    : "Cooker only — add services above"}
                </p>
              </div>
              <AddToCartButton size="default" variant="inverted" className="mt-6 w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
