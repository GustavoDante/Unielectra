'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { ListItem } from './components/ListItem'
import {
  accessoriesComponents,
  systemComponents,
} from './components/NavigationOptions'
import { SenderButton } from './components/SenderButton'

export function NavigationBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-yellow-500 p-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sistema</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {systemComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={'#'}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Auxiliares e Acessórios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {accessoriesComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={'#'}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <SenderButton />
    </nav>
  )
}
