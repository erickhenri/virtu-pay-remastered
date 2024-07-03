import { List } from '@phosphor-icons/react'
import Logo from '../assets/vitupay-logotipo.png'
import { Button } from '../Button'
import { useState } from 'react'

export function Header() {
  const [changeMenu, setChangeMenu] = useState(false)

  return (
    <header className="fixed z-20 flex w-screen items-center justify-between bg-red-600 px-6 py-2 shadow-lg">
      <a href="#home">
        <img src={Logo} alt="" className="h-8 w-auto cursor-pointer xl:h-12" />
      </a>
      <span className="font-semibold text-[#41faf9] xl:text-lg">
        SITE NÃO OFICIAL!!!
      </span>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4 font-medium text-white">
          <li className="cursor-pointer transition-colors hover:text-gray-100">
            <a href="#solutions">Soluções</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-100">
            <a href="#rates">Taxas</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-100">
            <a href="#about">Sobre</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-100">
            Reembolso
          </li>
          <Button theme="red">VirtuBank</Button>
          <Button theme="red">Criar uma conta</Button>
        </ul>
      </nav>
      <div className="lg:hidden">
        <List
          size={24}
          className="text-white transition-colors hover:text-gray-100"
          onClick={() => setChangeMenu((prevChange) => !prevChange)}
        />
        <ul
          className={`${changeMenu ? '' : 'translate-x-[105%]'} absolute right-0 top-12 flex w-screen flex-col items-center gap-4 bg-gray-100 p-4 font-medium shadow-lg transition-transform duration-500 sm:w-auto`}
        >
          <li
            className="cursor-pointer transition-colors hover:text-red-500"
            onClick={() => setChangeMenu(false)}
          >
            <a href="#solutions">Soluções</a>
          </li>
          <li
            className="cursor-pointer transition-colors hover:text-red-500"
            onClick={() => setChangeMenu(false)}
          >
            <a href="#rates">Taxas</a>
          </li>
          <li
            className="cursor-pointer transition-colors hover:text-red-500"
            onClick={() => setChangeMenu(false)}
          >
            <a href="#about">Sobre</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-red-500">
            Reembolso
          </li>
          <Button theme="red">VirtuBank</Button>
          <Button theme="red">Criar uma conta</Button>
        </ul>
      </div>
    </header>
  )
}
