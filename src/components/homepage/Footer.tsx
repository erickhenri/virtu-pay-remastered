import Logo from '../assets/vitupay-logotipo.png'

export function Footer() {
  return (
    <footer className="bg-footer flex flex-col items-start gap-5 bg-red-900 bg-[50%] bg-no-repeat p-8 sm:p-12 lg:p-16 xl:p-20">
      <img
        src={Logo}
        alt="logo virtual pay"
        className="mx-auto h-12 object-contain sm:mx-0"
      />

      <div className="flex w-full flex-col items-center gap-8 text-center text-sm text-white sm:flex-row sm:justify-between sm:gap-0 sm:text-left">
        <div>
          <span className="mb-4 block text-base font-bold">Recursos</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Reembolso
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Centro de ajuda
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Programas de parceiros
            </li>
          </ul>
        </div>
        <div>
          <span className="mb-4 block text-base font-bold">Produto</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Soluções
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Integrações
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Segmentos
            </li>
          </ul>
        </div>
        <div>
          <span className="mb-4 block text-base font-bold">Termos</span>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Termos de uso
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Termos de compliance
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-300">
              Outros
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
