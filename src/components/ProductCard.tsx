import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { FormatCurrency } from '@/hooks/FormatCurrency'
import { Button } from './ui/button'
import FullyHearthIcon from '../../public/icons/fully-hearth.svg'
import EmptyHearthicon from '../../public/icons/empty-hearth.svg'
import { StarRating } from './StarRating'
interface ProductCardProps {
  title: string
  icon: string
  price: number
  oldPrice: number
  feedback: number
}
export function ProductCard({
  title,
  icon,
  price,
  oldPrice,
  feedback,
}: ProductCardProps) {
  return (
    <Card className="group relative w-full max-w-sm m-auto bg-white shadow-xl">
      <CardContent>
        <Image
          src={icon}
          width={200}
          height={200}
          alt="Foto de produto"
          className="object-cover m-auto"
        />

        <span>
          <StarRating rating={feedback} />
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap justify-between align-baseline">
          <span className="font-bold text-xl">{FormatCurrency(price)}</span>
          <span className="line-through font-bold text-slate-500 self-end">
            {FormatCurrency(oldPrice)}
          </span>
        </div>
        <Button variant={'ghost'} className="mt-2 group absolute right-1 top-1">
          <Image
            src={FullyHearthIcon}
            alt="icone de coração"
            className="hidden group-hover:block"
          />
          <Image
            src={EmptyHearthicon}
            className="block group-hover:hidden"
            alt="icone de coração"
          />
        </Button>
        <div className="hidden w-full justify-around group-hover:flex group-hover:flex-wrap p-2 gap-y-1 absolute bottom-1 left-0">
          <Button variant={'yellow'} className="w-full">
            Comprar
          </Button>
          <Button variant={'ghost'} className="border bg-white w-full">
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
