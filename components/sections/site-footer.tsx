import { Mail, MapPin, PhoneCall } from "lucide-react";
import { NAV_LINKS, PRODUCT } from "@/lib/product";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-porcelain">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-cream">
                SMG
              </span>
              <span className="font-serif text-lg font-semibold text-ink">
                SMG Surfaces &amp; Appliances
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
              Premium kitchen surfaces and appliances, supplied with genuine
              UK-based advice. We help you choose the right specification and
              receive it without the hassle.
            </p>

            {/* Contact — placeholder details, replace before publishing */}
            <ul className="mt-6 space-y-2.5 text-sm text-stone-600">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brass" aria-hidden="true" />
                <span>[Showroom address — add before publishing]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="h-4 w-4 text-brass" aria-hidden="true" />
                <a href={PRODUCT.phoneHref} className="hover:text-ink">
                  {PRODUCT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brass" aria-hidden="true" />
                <span>[Contact email — add before publishing]</span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-600 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              This product
            </h4>
            <p className="mt-4 text-sm font-medium text-ink">{PRODUCT.name}</p>
            <p className="mt-1 text-sm text-stone-600">{PRODUCT.series}</p>
            <p className="mt-3 text-sm text-stone-600">
              Available in Matt Black, Matt White and Stainless Steel, with a
              matching range hood and backsplash.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sand pt-6 text-xs text-stone-500 sm:flex-row sm:items-center">
          <p>© {year} SMG Surfaces &amp; Appliances. All rights reserved.</p>
          <p>
            Prices include VAT. Product images are illustrative. [Placeholder:
            add company registration / VAT details.]
          </p>
        </div>
      </div>
    </footer>
  );
}
