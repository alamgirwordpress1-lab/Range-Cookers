"use client";

import { Headset, Lock, PhoneCall, Truck } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import { formatGBP } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { RangeCooker } from "@/components/shared/range-cooker";
import { FinishDots } from "@/components/sections/hero";
import { Magnetic, Reveal, Spotlight } from "@/components/shared/motion";
import { useSelection } from "@/components/providers/selection-provider";

const REASSURANCE = [
  { icon: Lock, label: "Secure checkout" },
  { icon: Headset, label: "Expert UK advice" },
  { icon: Truck, label: "UK delivery support" },
];

export function FinalCta() {
  const { finish, finishId } = useSelection();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),rgba(255,255,255,0))]" />

      <div className="container-tight relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <span className="kicker kicker-on-dark">Ready when you are</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-[2.9rem]">
            Make the Master 90cm the heart of your kitchen
          </h2>

          <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="font-serif text-4xl font-semibold text-white">
              {formatGBP(PRODUCT.price)}
            </span>
            <span className="pb-1 text-sm text-white/50">incl. VAT</span>
            <span className="pb-1 text-base text-white/40 line-through">
              RRP {formatGBP(PRODUCT.rrp)}
            </span>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                Finish
              </span>
              <span className="text-sm font-medium text-white">{finish.name}</span>
            </div>
            <div className="mt-3">
              <FinishDots dark />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <AddToCartButton size="lg" variant="inverted" className="sm:min-w-[13rem]" />
            </Magnetic>
            <Magnetic>
              <Button asChild variant="onDark" size="lg">
                <a href={PRODUCT.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call to Order
                </a>
              </Button>
            </Magnetic>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {REASSURANCE.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-md">
            <Spotlight
              tone="dark"
              lift={false}
              radiusClass="rounded-[2rem]"
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 shadow-panel"
            >
              <RangeCooker finishId={finishId} className="mx-auto max-h-[380px]" />
            </Spotlight>
            <div className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl border border-white/12 bg-charcoal/90 px-4 py-3 shadow-panel backdrop-blur">
              <span className={`h-8 w-8 rounded-full border border-white/15 ${finish.swatchClass}`} />
              <span className="text-sm font-semibold text-white">{finish.name}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
