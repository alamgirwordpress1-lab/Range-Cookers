import {
  Cake,
  CookingPot,
  DoorClosed,
  Fan,
  Flame,
  Grip,
  Layers,
  Leaf,
  Pizza,
  Sliders,
  Snowflake,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string icon names stored in product data to Lucide components,
 * so the data layer stays free of JSX (handy for a future CMS/Elementor port).
 */
const ICONS: Record<string, LucideIcon> = {
  flame: Flame,
  target: Target,
  cookingPot: CookingPot,
  sliders: Sliders,
  layers: Layers,
  doorClosed: DoorClosed,
  grip: Grip,
  leaf: Leaf,
  fan: Fan,
  cake: Cake,
  zap: Zap,
  snowflake: Snowflake,
  pizza: Pizza,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Flame;
  return <Cmp className={className} aria-hidden="true" />;
}
