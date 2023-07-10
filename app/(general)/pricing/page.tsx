import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing title',
  description: 'SEO Description',
  keywords: ['Pricing Page', 'Precios']
};

export default function PricingPage() {
  return (
    <span className="text-7xl">Pricing Page</span>
  )
}