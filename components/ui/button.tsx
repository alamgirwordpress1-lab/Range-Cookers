import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        // Primary — solid black, inverts to outlined white on hover
        default:
          "border border-ink bg-ink text-white shadow-soft hover:bg-white hover:text-ink hover:shadow-lift",
        dark: "border border-ink bg-ink text-white shadow-soft hover:bg-white hover:text-ink hover:shadow-lift",
        // Outline on light surfaces — fills black on hover
        outline:
          "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
        // For use on dark surfaces — fills white on hover
        onDark:
          "border border-white/35 bg-transparent text-white hover:bg-white hover:text-ink",
        // Solid white primary for use on dark surfaces
        inverted:
          "border border-white bg-white text-ink shadow-soft hover:bg-transparent hover:text-white",
        soft: "bg-linen text-ink hover:bg-sand",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.8rem]",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
