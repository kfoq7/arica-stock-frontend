import { PaymentCard } from '@/components/payment-card'
import { ProductSelected } from '@/components/product-selected'

export default function NewSale() {
  return (
    <div className="w-full space-y-4">
      <button className="rounded-md bg-blue-800/70 px-3 py-2 text-white">
        Add new Products
      </button>

      <div className="flex gap-x-4">
        <ProductSelected />
        <PaymentCard />
      </div>
    </div>
  )
}
