import { Button } from '../Button'

export function Reasons() {
  return (
    <section
      id="reasons"
      className="bg-man-phone relative flex h-[64rem] flex-col justify-end overflow-y-hidden bg-gray-100 bg-[65%_10%] bg-no-repeat p-8 text-gray-100 [background-size:auto_60%] sm:h-[72rem] sm:bg-[65%_5rem] sm:p-12 md:h-auto md:items-end md:justify-normal md:bg-[-14rem_13rem] md:px-0 md:py-24 md:[background-size:auto_90%] lg:bg-[-18rem_8rem] lg:[background-size:auto_110%] xl:bg-[-26rem_-4rem] xl:py-32 xl:[background-size:auto]"
    >
      <h2 className="flex-1 text-center text-2xl text-red-900 sm:text-3xl md:hidden xl:text-4xl">
        Motivos que nos tornam
        <strong className="block">líder no mercado</strong>
      </h2>
      <div className="flex flex-col items-center md:w-2/3 md:items-end lg:w-1/2">
        <div className="flex w-full flex-col gap-4 rounded-2xl bg-red-500 p-6 pb-12 text-xs sm:text-sm md:rounded-l-2xl lg:p-8 lg:pb-20 xl:text-base">
          <h2 className="hidden text-3xl md:block xl:text-4xl">
            Motivos que nos tornam
            <strong className="block">líder no mercado</strong>
          </h2>
          <p className="text-justify">
            O checkout transparente da Virtu Pay foi projetado pensando em você
            que procura um checkout rápido, intuitivo e totalmente editável para
            você deixá-lo a cara da sua empresa
          </p>
          <p className="text-justify">
            Aperfeiçoamos todos os apectos e funcionalidades para assegurar que
            o seu cliente desfrute da melhor experiência de compra, de uma forma
            descomplicada, eficiente e eficaz
          </p>
        </div>
        <ul className="z-10 -mt-8 flex w-[90%] flex-col gap-1 rounded-2xl bg-red-600 p-8 text-sm font-medium shadow-[-4px_-4px_12px_4px_rgba(0,0,0,0.5)] sm:w-4/5 sm:text-base md:rounded-l-2xl xl:text-lg">
          <li>• Checkout altamente veloz</li>
          <li>• Integração de domínios</li>
          <li>• Builder em todas as funcionalidades</li>
          <li>• Ferramentas externas</li>
        </ul>
        <Button paddingSize="lg" className="mx-auto mt-8">
          Abra sua conta
        </Button>
      </div>
    </section>
  )
}
