import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";

import { assetUrl } from "@/lib/asset-url";

export const Route = createFileRoute("/productdetails")({
  head: () => ({
    meta: [
      { title: "Ecoliners Lite Package | EcoAligners" },
      {
        name: "description",
        content:
          "Explore the Ecoliners Lite Package: 20 clear aligners in a thoughtfully designed package.",
      },
    ],
  }),
  component: ProductDetailsPage,
});

const ALIGNERS_PER_PACKAGE = 20;
const PRICE_PER_ALIGNER = 1000;
const PACKAGE_PRICE = ALIGNERS_PER_PACKAGE * PRICE_PER_ALIGNER;
const MAX_QUANTITY = 10;

const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const orderTotal = PACKAGE_PRICE * quantity;

  return (
    <main className="bg-lagoon-950 py-12 md:py-20">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-3xl border hairline bg-lagoon-900">
            <img
              src={assetUrl("/assets/product/EcolinersLitePackage.jpeg")}
              alt="Ecoliners Lite Package"
              className="aspect-square w-full object-cover"
              fetchPriority="high"
            />
          </div>

          <section aria-labelledby="product-title" className="py-2">
            <p className="eyebrow">Clear aligners · Lite package</p>
            <h1 id="product-title" className="display-2 mt-4">
              Ecoliners Lite Package
            </h1>
            <p className="prose-site mt-5">
              A simple way to begin your clear-aligner journey. The Ecoliners
              Lite Package includes 20 discreet aligners, thoughtfully made to
              fit into your everyday routine. Each aligner is designed for a
              comfortable, low-profile fit while you go about your day.
            </p>

            <div className="mt-8 grid gap-4 rounded-2xl border hairline bg-lagoon-900 p-5 sm:grid-cols-2">
              <div>
                <p className="mono-label uppercase tracking-[0.14em]">
                  Package includes
                </p>
                <p className="mt-2 text-lg font-semibold text-bone">
                  {ALIGNERS_PER_PACKAGE} aligners
                </p>
              </div>
              <div>
                <p className="mono-label uppercase tracking-[0.14em]">
                  Price per aligner
                </p>
                <p className="mt-2 text-lg font-semibold text-bone">
                  {formatPrice(PRICE_PER_ALIGNER)}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono-label uppercase tracking-[0.14em]">
                  Package price
                </p>
                <p className="mt-1 text-2xl font-semibold text-bone">
                  {formatPrice(PACKAGE_PRICE)}
                </p>
              </div>

              <div>
                <label
                  htmlFor="package-quantity"
                  className="mono-label mb-2 block uppercase tracking-[0.14em]"
                >
                  Quantity
                </label>
                <div className="flex h-11 items-center rounded-full border hairline bg-lagoon-900">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-bone transition-colors hover:text-mint disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <output
                    id="package-quantity"
                    aria-label="Package quantity"
                    aria-live="polite"
                    className="min-w-8 text-center font-mono text-sm text-bone"
                  >
                    {quantity}
                  </output>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.min(MAX_QUANTITY, current + 1),
                      )
                    }
                    disabled={quantity >= MAX_QUANTITY}
                    aria-label="Increase quantity"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-bone transition-colors hover:text-mint disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-baseline justify-between border-t hairline pt-5">
              <p className="mono-label uppercase tracking-[0.14em]">
                Order total
              </p>
              <p className="text-2xl font-semibold text-mint">
                {formatPrice(orderTotal)}
              </p>
            </div>

            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-7 w-full cursor-not-allowed rounded-full bg-mint px-6 py-4 font-mono text-sm font-semibold tracking-[0.08em] text-lagoon-950 opacity-50"
            >
              Buy now
            </button>
            <p className="mt-3 text-center text-sm text-fog">
              Online ordering is not available yet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
