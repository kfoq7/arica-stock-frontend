export function PaymentCard() {
  return (
    <div className="w-[600px] space-y-2 rounded-md bg-white px-4 py-3 drop-shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tighter">Subtotal</div>

        <span className="text-lg">$88.50</span>
      </div>
      <div className="flex items-center justify-between">
        <div>Descuentos</div>
        <span>$88.50</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-red-300">Total</div>
        <span>$84.15</span>
      </div>

      <div>
        <div>
          <span>$5.00</span>
        </div>
        <div>$79.15</div>
      </div>

      <div>
        <h3>Agregar pago</h3>

        <div>Payment</div>
      </div>
    </div>
  )
}
