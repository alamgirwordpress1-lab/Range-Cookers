"use client";

import { PhoneCall } from "lucide-react";
import { PRODUCT, SPEC_GROUPS } from "@/lib/product";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  CountUp,
  Magnetic,
  Reveal,
  Spotlight,
  StaggerGroup,
  StaggerItem,
} from "@/components/shared/motion";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HEADLINE_STATS = [
  { value: 90, suffix: "cm", label: "Statement width" },
  { value: 103, suffix: "L", label: "Oven capacity" },
  { value: 5, suffix: "", label: "Gas burners" },
  { value: 11, suffix: "", label: "Cooking functions" },
];

function SpecList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-sand">
      {items.map((item) => (
        <div
          key={item.label}
          className="group flex items-center justify-between gap-4 py-2.5 transition-colors"
        >
          <dt className="text-sm text-stone-600 transition-colors group-hover:text-ink">
            {item.label}
          </dt>
          <dd className="text-sm font-medium text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Specifications() {
  return (
    <section id="specifications" className="relative border-y border-sand bg-linen/40">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Specifications"
          title="The technical detail, made readable"
          intro="Everything you need to check it fits your kitchen and your connections."
        />

        {/* Animated headline stats */}
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HEADLINE_STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <Spotlight radiusClass="rounded-2xl">
                <div className="h-full rounded-2xl border border-sand bg-cream p-6 shadow-soft">
                  <div className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    <CountUp value={stat.value} />
                    <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-stone-500">
                    {stat.label}
                  </p>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Desktop / tablet: grouped cards */}
        <StaggerGroup className="mt-6 hidden gap-5 md:grid md:grid-cols-2">
          {SPEC_GROUPS.map((group, i) => (
            <StaggerItem key={group.title}>
              <Spotlight radiusClass="rounded-2xl">
                <div className="h-full rounded-2xl border border-sand bg-cream p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink/10 bg-ink/[0.05] text-xs font-semibold text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <SpecList items={group.items} />
                  </div>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Mobile: accordion */}
        <div className="mt-8 md:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue={SPEC_GROUPS[0].title}
            className="space-y-3"
          >
            {SPEC_GROUPS.map((group) => (
              <AccordionItem key={group.title} value={group.title}>
                <AccordionTrigger>{group.title}</AccordionTrigger>
                <AccordionContent>
                  <SpecList items={group.items} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Specs-area CTA */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sand bg-cream p-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-stone-600">
              Unsure whether the 90cm width or your gas/electric connections will
              work? A quick call before ordering saves any surprises.
            </p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Button asChild variant="dark" size="default">
                  <a href={PRODUCT.phoneHref}>
                    <PhoneCall className="h-4 w-4" />
                    Call to Order
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <AddToCartButton size="default" variant="soft" showIcon={false} />
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
