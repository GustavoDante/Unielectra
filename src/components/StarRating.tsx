import Image from 'next/image'
import StarIcon from '../../public/icons/star.svg'

interface StarRatingProps {
  rating: number
}
export function StarRating({ rating }: StarRatingProps) {
  // Limitando o rating entre 1 e 5
  const clampedRating = Math.min(Math.max(rating, 1), 5)

  return (
    <div className="flex py-3">
      {Array.from({ length: clampedRating }, (_, index) => (
        <Image
          key={index}
          src={StarIcon}
          alt="Estrela"
          className="w-5 h-5 mr-1"
        />
      ))}
    </div>
  )
}
