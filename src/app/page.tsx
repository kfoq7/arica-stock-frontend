'use client'

import { PaymentCard } from '@/components/payment-card'
import { ProductSelected } from '@/components/product-selected'

export default function Home() {
  return (
    <div className="w-full space-y-4">
      <div className="flex gap-x-4">
        <ProductSelected />
        <PaymentCard />
      </div>
    </div>
  )
}
