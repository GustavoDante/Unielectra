import { Card } from '../ui/card'

export function FloatingCardRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[350px] bg-white border-t-[2px] absolute -right-[55px] top-10 z-50 hidden group-hover:block">
      <Card>{children}</Card>
    </div>
  )
}
