"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import { formatGBP } from "@/lib/utils";
import { AddToCartButton } from "@/components/shared/add-to-cart-button";
import { useSelection } from "@/components/providers/selection-provider";

export function MobileCta() {
  const [show, setShow] = React.useState(false);
  const { finish } = useSelection();

  React.useEffect(() => {
    const onScroll = () => {
      // Appear once the hero is scrolled past, hide again near the very bottom
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 220;
      setShow(y > window.innerHeight * 0.75 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-porcelain/95 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="container-tight flex items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-stone-500">
                Master 90cm · {finish.name}
              </p>
              <p className="font-serif text-lg font-semibold leading-tight text-ink">
                {formatGBP(PRODUCT.price)}
              </p>
            </div>
            <a
              href={PRODUCT.phoneHref}
              aria-label="Call to order"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <PhoneCall className="h-5 w-5" />
            </a>
            <AddToCartButton size="default" label="Add to Cart" className="shrink-0" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
