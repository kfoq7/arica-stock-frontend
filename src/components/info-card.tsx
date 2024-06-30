import { WalletIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  value: string
  className?: string
}

export function InfoCard({ title, value, className }: Props) {
  return (
    <div
      className={cn(
        'w-full rounded-md border-t-4 border-[#158d07] bg-white drop-shadow-md',
        className
      )}
    >
      <div className="divide-y divide-gray-300/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div>{value}</div>
          </div>

          <WalletIcon className="size-10 fill-green-300/40" />
        </div>

        <div className="px-5 py-3 font-light text-gray-500/90">
          Más información
        </div>
      </div>
    </div>
  )
}
