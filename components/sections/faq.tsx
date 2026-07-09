import { FAQS } from "@/lib/product";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="relative bg-porcelain">
      <div className="container-tight py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker="Good to know"
            title="Questions, answered honestly"
            intro="If your question isn't here, please call us before ordering — we would rather get it right first time."
          />

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.04} y={16}>
                <AccordionItem value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
