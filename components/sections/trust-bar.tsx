import { Lock, PhoneCall, Truck, MessageSquareText } from "lucide-react";

const ITEMS = [
  { icon: Lock, label: "Secure checkout" },
  { icon: MessageSquareText, label: "UK-based product advice" },
  { icon: Truck, label: "Delivery available across the UK" },
  { icon: PhoneCall, label: "Call before ordering for fitment advice" },
];

// Repeated so the marquee loops seamlessly at translateX(-50%)
const LOOP = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function TrustBar() {
  return (
    <div className="relative overflow-hidden bg-espresso text-white/80">
      <div className="flex w-max animate-marquee items-center gap-x-3 py-2.5 will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none">
        {LOOP.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex shrink-0 items-center gap-x-3 text-xs font-medium">
            <span className="flex items-center gap-2 px-1">
              <Icon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              {label}
            </span>
            <span className="text-white/25" aria-hidden="true">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
