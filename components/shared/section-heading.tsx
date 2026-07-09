import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  dark = false,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span
        className={cn(
          "kicker",
          align === "center" && "justify-center",
          dark && "kicker-on-dark"
        )}
      >
        {kicker}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-cream/70" : "text-stone-600"
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
