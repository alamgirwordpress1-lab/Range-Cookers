"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import { NAV_LINKS, PRODUCT } from "@/lib/product";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="SMG Surfaces & Appliances — home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-sm font-semibold tracking-tight text-cream">
        SMG
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-serif text-base font-semibold text-ink">
          SMG Surfaces
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-500">
          &amp; Appliances
        </span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-sand bg-porcelain/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-porcelain/60 backdrop-blur-sm"
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-tight flex h-full items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-stone-600 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href={PRODUCT.phoneHref}>
              <PhoneCall className="h-4 w-4" />
              Call to Order
            </a>
          </Button>
          <AddToCartButton
            size="sm"
            label="Add to Cart"
            className="hidden sm:inline-flex"
          />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-cream text-ink transition-colors hover:bg-linen lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-x-0 top-full border-b border-sand bg-porcelain shadow-lift lg:hidden"
          >
            <nav
              className="container-tight flex flex-col gap-1 py-4"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-linen"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2.5">
                <AddToCartButton className="w-full" size="default" />
                <Button asChild variant="outline" size="default" className="w-full">
                  <a href={PRODUCT.phoneHref} onClick={() => setOpen(false)}>
                    <PhoneCall className="h-4 w-4" />
                    Call to Order — {PRODUCT.phoneDisplay}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
