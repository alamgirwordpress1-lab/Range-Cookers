"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RangeCooker } from "@/components/shared/range-cooker";
import { useSelection } from "@/components/providers/selection-provider";
import { CountUp, Reveal, Spotlight } from "@/components/shared/motion";

const HIGHLIGHTS = [
  { k: "90cm", label: "Statement width" },
  { k: "Cast iron", label: "Pan supports" },
  { k: "Master", label: "Series styling" },
];

const ANNOTATIONS = [
  { label: "90cm statement width", className: "left-2 top-6 sm:left-4" },
  { label: "Dual-ring power burner", className: "right-2 top-1/3 sm:right-4" },
  { label: "Cast iron pan supports", className: "bottom-24 left-2 sm:left-6" },
];

export function Lifestyle() {
  const { finishId } = useSelection();
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="container-tight relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <span className="kicker kicker-on-dark">In your kitchen</span>
          <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            A range cooker that becomes the centrepiece of the kitchen.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              At a full 90cm wide, the Master sits with real presence. It fills
              the gap between cabinetry the way a proper range should —
              substantial, deliberate and beautifully finished, so it reads as
              built-in rather than added on.
            </p>
            <p>
              Brushed stainless detailing, heavy cast iron pan supports and the
              clean lines of the Master Series give it a quiet, professional
              confidence. It looks the part before you have cooked a thing — and
              earns its place every day after.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/12 pt-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {h.k === "90cm" ? (
                    <>
                      <CountUp value={90} />
                      cm
                    </>
                  ) : (
                    h.k
                  )}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Annotated showroom visual */}
        <Reveal delay={0.1}>
          <div className="relative">
            <Spotlight
              tone="dark"
              lift={false}
              radiusClass="rounded-[2rem]"
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-panel sm:p-10"
            >
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <RangeCooker finishId={finishId} className="mx-auto max-h-[400px]" />
              </motion.div>
            </Spotlight>

            {ANNOTATIONS.map((a, i) => (
              <motion.span
                key={a.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className={`absolute z-20 flex items-center gap-2 rounded-full border border-white/15 bg-charcoal/80 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur ${a.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {a.label}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
