"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ShoppingBag } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Self-contained "Add to basket" interaction with tactile feedback.
 * TODO (integration): wire onClick to your real cart/checkout endpoint,
 * or link to the product page's add-to-cart action.
 */
export function AddToCartButton({
  className,
  size = "lg",
  variant = "default",
  label = "Add to Cart",
  showIcon = true,
}: {
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  label?: string;
  showIcon?: boolean;
}) {
  const [added, setAdded] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function handleClick() {
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 2200);
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      aria-live="polite"
      className={cn("relative overflow-hidden", className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            Added to basket
          </motion.span>
        ) : (
          <motion.span
            key="label"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {showIcon && <ShoppingBag className="h-4 w-4" />}
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
