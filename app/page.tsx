import { SelectionProvider } from "@/components/providers/selection-provider";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { TrustBar } from "@/components/sections/trust-bar";
import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Confidence } from "@/components/sections/confidence";
import { Lifestyle } from "@/components/sections/lifestyle";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CookingModes } from "@/components/sections/cooking-modes";
import { FinishSelector } from "@/components/sections/finish-selector";
import { OptionalServices } from "@/components/sections/optional-services";
import { Specifications } from "@/components/sections/specifications";
import { Comparison } from "@/components/sections/comparison";
import { DeliverySupport } from "@/components/sections/delivery-support";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";
import { MobileCta } from "@/components/sections/mobile-cta";

export default function Home() {
  return (
    <SelectionProvider>
      <span id="top" className="absolute top-0" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <TrustBar />
      <SiteHeader />
      <main>
        <Hero />
        <Confidence />
        <Lifestyle />
        <FeatureGrid />
        <CookingModes />
        <FinishSelector />
        <OptionalServices />
        <Specifications />
        <Comparison />
        <DeliverySupport />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </SelectionProvider>
  );
}
