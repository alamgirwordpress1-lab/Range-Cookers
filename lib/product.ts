/**
 * Single source of truth for the product.
 * Editing values here updates every section of the page — and keeps the
 * structure friendly for a later port into WordPress / Elementor.
 */

export type FinishId = "matt-black" | "matt-white" | "stainless-steel";

export interface Finish {
  id: FinishId;
  name: string;
  swatchClass: string; // CSS utility that renders the material
  short: string; // one-liner used in chips/summaries
  copy: string; // longer descriptive paragraph
  suits: string;
}

export const PRODUCT = {
  series: "Bertazzoni Master Series",
  name: "Master 90cm Range Cooker Single Oven Dual Fuel",
  type: "90cm dual fuel range cooker",
  price: 1879.06,
  rrp: 1999.0,
  // NOTE: placeholder contact details — replace before publishing.
  phoneDisplay: "0161 000 0000",
  phoneHref: "tel:+441610000000",
};

export const FINISHES: Finish[] = [
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    swatchClass: "brushed-steel",
    short: "Stainless Steel",
    copy: "The professional classic. Brushed stainless catches the light, wipes clean and sits comfortably alongside almost any worktop, cabinetry or splashback.",
    suits: "Best for: timeless, professional-style and transitional kitchens.",
  },
  {
    id: "matt-black",
    name: "Matt Black",
    swatchClass: "matt-black",
    short: "Matt Black",
    copy: "A confident, contemporary statement. The soft matt finish absorbs light rather than reflecting it, anchoring a scheme of deep tones, natural wood and warm metals.",
    suits: "Best for: bold, modern and industrial-leaning kitchens.",
  },
  {
    id: "matt-white",
    name: "Matt White",
    swatchClass: "matt-white",
    short: "Matt White",
    copy: "Calm, bright and understated. Matt white keeps the range feeling light and architectural — a natural fit for Scandinavian, coastal and country-modern spaces.",
    suits: "Best for: bright, airy and Scandi-inspired kitchens.",
  },
];

export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  blurb: string;
}

export const SERVICES: ServiceOption[] = [
  {
    id: "disconnection",
    name: "Disconnection Service",
    price: 48,
    blurb:
      "Have your existing appliance safely disconnected on the day, so there is no scramble to arrange it yourself.",
  },
  {
    id: "removal",
    name: "Range Cooker Removal",
    price: 60,
    blurb:
      "We take your old range cooker away for you, leaving a clear, ready space for the new one.",
  },
  {
    id: "installation",
    name: "Installation & Commission",
    price: 150,
    blurb:
      "Connection and commissioning onto your existing gas and electrical services by an installer — ready to cook.",
  },
];

export interface Feature {
  title: string;
  copy: string;
  icon: string; // lucide icon name mapped in the component
  span?: boolean; // spans two columns in the bento grid
}

export const FEATURES: Feature[] = [
  {
    title: "5 gas burners",
    copy: "A full-width gas hob with five burners gives you room to run several pans at once — from a gentle sauce to a rolling boil.",
    icon: "flame",
    span: true,
  },
  {
    title: "Dual-ring power burner",
    copy: "The central dual-ring burner scales from a delicate low simmer right up to full, high-output power for fast searing and wok work.",
    icon: "target",
  },
  {
    title: "103L multifunction oven",
    copy: "A generously sized 103-litre electric oven swallows large trays, roasting tins and celebration bakes with ease.",
    icon: "cookingPot",
  },
  {
    title: "11 cooking functions",
    copy: "Convection, baking, grilling, fast pre-heat, defrosting and a dedicated pizza function — eleven modes for everyday and occasion cooking.",
    icon: "sliders",
  },
  {
    title: "Triple-glazed door",
    copy: "Three layers of glass help keep heat where it belongs — inside the oven — for a cooler, safer door front.",
    icon: "layers",
  },
  {
    title: "Soft-motion, anti-slam",
    copy: "A soft-motion hinge draws the door gently closed and stops it slamming — a small detail you notice every single day.",
    icon: "doorClosed",
  },
  {
    title: "Cast iron pan supports",
    copy: "Heavy cast iron supports hold pans steady and take the weight of everyday family cooking without flexing.",
    icon: "grip",
  },
  {
    title: "Energy rating A",
    copy: "An A-rated oven balances performance with sensible running costs, cooking to temperature efficiently.",
    icon: "leaf",
  },
];

export interface CookingMode {
  id: string;
  name: string;
  icon: string;
  benefit: string;
}

export const COOKING_MODES: CookingMode[] = [
  {
    id: "convection",
    name: "Convection",
    icon: "fan",
    benefit:
      "Fan-forced heat circulates evenly around the cavity, so you can cook on more than one shelf at a time with consistent, even results.",
  },
  {
    id: "baking",
    name: "Baking",
    icon: "cake",
    benefit:
      "Balanced top and bottom heat gives cakes, breads and pastry a steady rise and an even, golden finish.",
  },
  {
    id: "grill",
    name: "Grill",
    icon: "flame",
    benefit:
      "Intense radiant heat from above is ideal for browning, toasting and finishing dishes with a proper crisp top.",
  },
  {
    id: "fast-preheat",
    name: "Fast pre-heat",
    icon: "zap",
    benefit:
      "Brings the oven up to temperature quickly, so there is less waiting between deciding to cook and getting food in.",
  },
  {
    id: "defrost",
    name: "Defrost",
    icon: "snowflake",
    benefit:
      "Gently circulates room-temperature air to thaw food evenly, without starting to cook the edges.",
  },
  {
    id: "pizza",
    name: "Pizza function",
    icon: "pizza",
    benefit:
      "Concentrated base heat crisps the bottom of a pizza while the top cooks through — closer to a proper stone-baked result at home.",
  },
];

export interface SpecGroup {
  title: string;
  items: { label: string; value: string }[];
}

export const SPEC_GROUPS: SpecGroup[] = [
  {
    title: "Dimensions & build",
    items: [
      { label: "Width", value: "90cm" },
      { label: "Pan supports", value: "Cast iron" },
      { label: "Door", value: "Triple-glazed" },
    ],
  },
  {
    title: "Hob",
    items: [
      { label: "Hob type", value: "Gas" },
      { label: "Cooking zones", value: "5" },
    ],
  },
  {
    title: "Oven",
    items: [
      { label: "Oven type", value: "Electric multifunction" },
      { label: "Oven capacity", value: "103L" },
      { label: "Oven lights", value: "Double" },
      { label: "Shelves", value: "2 chromed wire shelves" },
      { label: "Tray", value: "1 enamelled tray" },
    ],
  },
  {
    title: "Energy & electrical",
    items: [
      { label: "Energy rating", value: "A" },
      { label: "Voltage", value: "220 / 240V" },
      { label: "Frequency", value: "50 / 60Hz" },
      { label: "Absorbed power", value: "3500W" },
    ],
  },
];

export interface ComparisonRow {
  aspect: string;
  standard: string;
  master: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    aspect: "Design presence",
    standard: "Typically 50–60cm, sits quietly in a run of units.",
    master: "A full 90cm range that reads as a considered centrepiece.",
  },
  {
    aspect: "Hob flexibility",
    standard: "Often four zones, limited room for large pans.",
    master: "Five gas burners, including a dual-ring power burner.",
  },
  {
    aspect: "Oven capacity",
    standard: "Commonly around 60–70L in a standard built-in oven.",
    master: "A roomy 103L multifunction cavity for larger cooking.",
  },
  {
    aspect: "Door feel",
    standard: "Single or double glazing; can be prone to slamming.",
    master: "Triple-glazed with a soft-motion, anti-slam close.",
  },
  {
    aspect: "Cooking control",
    standard: "A handful of basic settings.",
    master: "11 functions covering everyday and occasion cooking.",
  },
  {
    aspect: "Installation support",
    standard: "Usually arranged separately by the customer.",
    master: "Optional disconnection, removal and fitting available.",
  },
  {
    aspect: "Premium finish",
    standard: "Limited finish options.",
    master: "Matt Black, Matt White or Stainless Steel.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Is this a dual fuel cooker?",
    a: "Yes. It pairs a five-burner gas hob with an electric multifunction oven — dual fuel gives you the responsive control of a gas flame with the even, consistent heat of an electric oven.",
  },
  {
    q: "What finishes are available?",
    a: "Three: Matt Black, Matt White and Stainless Steel. You can preview each finish on this page, and a matching range hood and backsplash are also available to complete the look.",
  },
  {
    q: "Does it include installation?",
    a: "Installation is an optional add-on. Installation & Commission onto your existing gas and electrical services is available for £150. If you are unsure what you need, please call us before ordering.",
  },
  {
    q: "Can my old cooker be removed?",
    a: "Yes. You can add a Disconnection Service (£48) and Range Cooker Removal (£60) so your old appliance is safely disconnected and taken away on delivery.",
  },
  {
    q: "What size kitchen opening do I need?",
    a: "This is a 90cm-wide freestanding range cooker, so you will need an appropriately sized gap with suitable gas and electrical connections nearby. If you are unsure about your space, call us with your measurements before ordering.",
  },
  {
    q: "Is it suitable for everyday family cooking?",
    a: "Very much so. The five-burner hob, 103-litre oven and cast iron supports are built for regular, real-world family cooking — while the 11 functions cover everything from a weeknight bake to a weekend roast.",
  },
  {
    q: "Can I call before ordering?",
    a: "Please do. Our UK-based team can talk through sizing, gas and electrical connections, finishes and fitting so you can order with confidence. Details are in the header and footer of this page.",
  },
];

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Finishes", href: "#finishes" },
  { label: "Specifications", href: "#specifications" },
  { label: "Delivery", href: "#delivery" },
  { label: "FAQ", href: "#faq" },
];
