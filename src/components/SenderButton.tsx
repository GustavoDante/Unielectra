import Image from 'next/image'
import Arrowicon from '../../public/icons/arrow.svg'

export function SenderButton() {
  return (
    <div className=" w-full px-3 bg-black rounded-md h-[40px] flex justify-center items-center cursor-pointer hover:scale-105 transition-all">
      <div className="flex space-x-2 items-center">
        <span className="text-sm text-white">Seja um vendedor</span>
        <span>
          <Image src={Arrowicon} alt="icone de seta" />
        </span>
      </div>
    </div>
  )
}
