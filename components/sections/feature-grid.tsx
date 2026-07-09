import { PhoneCall } from "lucide-react";
import { FEATURES, PRODUCT } from "@/lib/product";
import { Icon } from "@/components/shared/icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { Magnetic, Spotlight, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeatureGrid() {
  return (
    <section id="features" className="relative">
      <div className="container-tight py-16 lg:py-24">
        <SectionHeading
          kicker="Built to perform"
          title="Every detail earns its place"
          intro="This is a cooker designed to be used hard and enjoyed daily — from the five-burner gas hob to the soft-close of the oven door."
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <StaggerItem
              key={feature.title}
              className={cn(feature.span && "lg:col-span-2")}
            >
              <Spotlight radiusClass="rounded-2xl">
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-sand bg-cream p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift",
                    feature.span &&
                      "lg:flex-row lg:items-center lg:gap-8 lg:bg-gradient-to-br lg:from-white lg:to-linen"
                  )}
                >
                  <div className={cn(feature.span && "lg:flex-1")}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                      <Icon name={feature.icon} className="h-6 w-6" />
                    </span>
                    <h3
                      className={cn(
                        "mt-5 font-semibold text-ink",
                        feature.span ? "text-2xl" : "text-lg"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-600">
                      {feature.copy}
                    </p>
                  </div>

                  {/* Spotlight tile: a tidy cooktop motif */}
                  {feature.span && (
                    <div className="mt-6 hidden shrink-0 lg:mt-0 lg:block">
                      <div className="grid grid-cols-3 gap-3 rounded-xl border border-white/15 bg-ink p-5">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <span
                            key={i}
                            className={cn(
                              "flex h-11 w-11 items-center justify-center rounded-full border border-white/15",
                              i === 4 && "col-start-2"
                            )}
                          >
                            <span
                              className={cn(
                                "rounded-full bg-white/80",
                                i === 4 ? "h-5 w-5 bg-white" : "h-3.5 w-3.5"
                              )}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Mid-page CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-sand bg-gradient-to-r from-linen to-white p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-xl font-semibold text-ink">
              Ready to make it the heart of your kitchen?
            </h3>
            <p className="mt-1 text-sm text-stone-600">
              Not sure about sizing or connections? Call our team before you order.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Magnetic>
              <AddToCartButton size="default" />
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="default">
                <a href={PRODUCT.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call to Order
                </a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
