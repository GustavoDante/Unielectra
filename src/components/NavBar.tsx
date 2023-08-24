import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { FloatingCard } from './FloatingCard'
import { NotificationLenght } from './NotificationLenght'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import EmptyHearthicon from '../../public/icons/empty-hearth.svg'
import CartIcon from '../../public/icons/cart.svg'
import PersonIcon from '../../public/icons/person.svg'
import { SenderButton } from './SenderButton'

export function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-7xl flex-wrap m-auto p-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Button variant="ghost" className="mr-2">
          <Image
            src="/solar-logo.png"
            alt="Vercel Logo"
            width={64}
            height={16}
            className="object-cover"
          />
        </Button>
      </div>
      <div className="hidden md:flex gap-2">
        <Input type="text" placeholder="Pesquisar produto" />
        <Button variant="yellow">Pesquisar</Button>
      </div>
      <div className="hidden md:flex gap-3">
        <button
          className="bg-white group relative hover:bg-gray-200 text-gray-800 font-semibold  py-2 px-4 border border-gray-400 rounded shadow"
          type="button"
        >
          <Image
            src={EmptyHearthicon}
            className="block"
            alt="icone de coração vazio"
          />
          <NotificationLenght length={3} />
          <FloatingCard.Root>
            <FloatingCard.Content>
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={1}
              />
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={2}
              />
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={2}
              />
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={2}
              />
            </FloatingCard.Content>
            <FloatingCard.Footer>
              <FloatingCard.Link text="Limpar lista" variant="secondary" />
            </FloatingCard.Footer>
          </FloatingCard.Root>
        </button>
        <button
          className="bg-white group relative hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="button"
        >
          <Image
            src={CartIcon}
            className="block"
            alt="icone de coração vazio"
          />
          <NotificationLenght length={10} />
          <FloatingCard.Root>
            <FloatingCard.Content>
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={1}
              />
              <FloatingCard.Item
                icon={'/placa.jpg'}
                price={234312}
                title="placas solares"
                key={2}
              />
            </FloatingCard.Content>
            <FloatingCard.Footer>
              <FloatingCard.Link text="Limpar lista" variant="secondary" />
              <FloatingCard.Link text="Ir para carrinho" />
            </FloatingCard.Footer>
          </FloatingCard.Root>
        </button>
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="button"
        >
          <Image
            src={PersonIcon}
            className="block"
            alt="icone de coração vazio"
          />
        </button>
      </div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="text-2xl">
              &#9776;
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="grid gap-4 my-10">
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex justify-center bg-white relative hover:bg-gray-200 text-gray-800 font-semibold  py-2 px-4 border border-gray-400 rounded shadow "
                  type="button"
                >
                  <Image
                    src={EmptyHearthicon}
                    className="block group-hover:hidden"
                    alt="icone de coração vazio"
                  />
                  <NotificationLenght length={3} />
                </button>

                <button
                  className="flex justify-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  type="button"
                >
                  <Image
                    src={PersonIcon}
                    className="block"
                    alt="icone de coração vazio"
                  />
                </button>
              </div>
              <button
                className=" flex justify-center bg-white relative hover:bg-gray-200 text-gray-800 font-semibold p-4 border border-gray-400 rounded shadow-lg"
                type="button"
              >
                <Image
                  src={CartIcon}
                  className="block"
                  alt="icone de coração vazio"
                />
                <NotificationLenght length={10} />
              </button>
              <div className="flex gap-2">
                <Input type="text" placeholder="Pesquisar produto" />
                <Button variant="yellow">Pesquisar</Button>
              </div>
              <div>
                <SenderButton />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
