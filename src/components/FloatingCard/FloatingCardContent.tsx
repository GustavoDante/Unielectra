import { ReactNode } from 'react'
import { CardContent } from '../ui/card'

interface FloatingCardContentProps {
  children?: ReactNode
}

export function FloatingCardContent({ children }: FloatingCardContentProps) {
  return (
    <CardContent className="grid gap-1 p-0">
      <div className="h-[310px] overflow-y-auto rounded-md p-2">{children}</div>
    </CardContent>
  )
}
