import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing",
    description: "Pricing Page Description",
    keywords: [ 'Pricing Page', 'Paquetes' ]
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page !</span>
    </> 
  )
}
