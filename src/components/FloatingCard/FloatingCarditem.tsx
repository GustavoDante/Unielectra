import { FormatCurrency } from '@/hooks/FormatCurrency'
import Image from 'next/image'

interface FoatingCardItemProps {
  icon: string
  title: string
  price: number
}

export function FloatingCarditem({ icon, title, price }: FoatingCardItemProps) {
  return (
    <div className="flex items-start rounded-md space-x-4 justify-between hover:bg-slate-200 p-2 text-accent-foreground transition-all">
      <div className="flex gap-2 items-center">
        <Image src={icon} width={50} height={50} alt="foto de produto" />
        <div className="space-y-1 text-start">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">
            {FormatCurrency(price)}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-end p-1">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="inline fill-current text-[#AAAAAA] hover:text-red-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
        </svg>
      </div>
    </div>
  )
}
