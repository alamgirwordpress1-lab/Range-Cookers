import { PhoneCall, ShieldCheck, Truck, Wrench } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import { SectionHeading } from "@/components/shared/section-heading";
import { Magnetic, Reveal, Spotlight, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";

const CARDS = [
  {
    icon: Truck,
    title: "UK delivery available",
    copy: "We deliver across the UK. Delivery timing and options are confirmed at checkout. [Placeholder: insert your delivery lead times and coverage.]",
  },
  {
    icon: PhoneCall,
    title: "Call before you order",
    copy: "If you're unsure about the 90cm size, your gas or electrical connection, or installation, please call us first so we can get you the right setup.",
  },
  {
    icon: Wrench,
    title: "Removal & installation",
    copy: "Add optional disconnection, old-cooker removal and installation onto existing services, so delivery day is handled end to end.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & support",
    copy: "Covered by the manufacturer's warranty, with our UK-based team on hand for advice. [Placeholder: insert your exact warranty and returns terms.]",
  },
];

export function DeliverySupport() {
  return (
    <section id="delivery" className="relative border-t border-sand bg-linen/40">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Delivery & support"
          title="Buy with a real team behind you"
          intro="A premium appliance deserves a considered delivery. Here's how we help you order the right thing and receive it smoothly."
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {CARDS.map(({ icon: Icon, title, copy }) => (
            <StaggerItem key={title}>
              <Spotlight radiusClass="rounded-2xl">
                <div className="group flex h-full gap-4 rounded-2xl border border-sand bg-cream p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.05] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {copy}
                    </p>
                  </div>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.05} className="mt-6">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-ink p-7 text-white sm:flex-row sm:p-9">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                Prefer to talk it through first?
              </h3>
              <p className="mt-1.5 text-sm text-white/70">
                Our UK-based team can advise on sizing, connections and fitting
                before you commit.
              </p>
            </div>
            <Magnetic className="w-full shrink-0 sm:w-auto">
              <Button asChild variant="onDark" size="lg" className="w-full sm:w-auto">
                <a href={PRODUCT.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  {PRODUCT.phoneDisplay}
                </a>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
