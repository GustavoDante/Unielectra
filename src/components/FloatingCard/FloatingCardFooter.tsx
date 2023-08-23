import { FormatCurrency } from '@/hooks/FormatCurrency'
import { CardFooter } from '../ui/card'
import { ReactNode } from 'react'

interface FloatingCardFooterProps {
  children?: ReactNode
}
export function FloatingCardFooter({ children }: FloatingCardFooterProps) {
  return (
    <CardFooter className="flex-wrap">
      <div className="w-full flex justify-between py-2">
        <span>Subtotal:</span>
        <span>{FormatCurrency(21312)}</span>
      </div>
      <div className="w-full flex flex-wrap gap-2">{children}</div>
      <div className="mt-2 flex justify-center w-full">
        <p className="text-sm">
          reembolso garantido em <strong>30 dias</strong>
        </p>
      </div>
    </CardFooter>
  )
}
