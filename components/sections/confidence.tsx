import { Headset, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Spotlight, StaggerGroup, StaggerItem } from "@/components/shared/motion";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    copy: "Order with confidence through a secure, encrypted checkout.",
  },
  {
    icon: Headset,
    title: "Expert appliance advice",
    copy: "Talk to our UK-based team about sizing, fuel and finishes before you buy.",
  },
  {
    icon: Truck,
    title: "UK delivery support",
    copy: "Delivery available across the UK, with help planning the details.",
  },
  {
    icon: Wrench,
    title: "Removal & installation",
    copy: "Optional disconnection, old-cooker removal and fitting on request.",
  },
];

export function Confidence() {
  return (
    <section className="relative border-y border-sand bg-linen/40">
      <div className="container-tight py-14 lg:py-16">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, copy }) => (
            <StaggerItem key={title}>
              <Spotlight radiusClass="rounded-2xl">
                <div className="group h-full rounded-2xl border border-sand bg-cream p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.05] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {copy}
                  </p>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
