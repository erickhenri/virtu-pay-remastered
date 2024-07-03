import { Button } from '../Button'
import PageDashboard from '../assets/page-dashboard.png'

export function Home() {
  return (
    <section
      id="home"
      className="relative mt-8 flex flex-col items-center justify-center bg-no-repeat p-8 shadow sm:mt-12 sm:p-12 lg:flex-row lg:items-center lg:justify-normal lg:px-16 lg:py-32 xl:px-20 xl:py-64"
    >
      <div className="flex flex-col items-center gap-5 text-center lg:w-2/5 lg:items-baseline lg:text-left">
        <h1 className="text-2xl font-medium text-red-500 sm:text-3xl xl:text-4xl">
          <strong className="block">Acelere Seu Sucesso: </strong>
          Escale ao Infinito de forma <strong>inteligente</strong>
        </h1>
        <img
          src={PageDashboard}
          alt="Pagina de dashboard"
          className="w-full lg:hidden"
        />
        <ul className="grid max-w-max grid-cols-2 justify-between gap-1 text-left text-sm font-medium text-blue-700 xl:text-base">
          <li>• Saques rápidos</li>
          <li>• Suporte 24/7</li>
          <li>• Recebimentos D+0</li>
          <li>• Checkout exclusivo!</li>
        </ul>
        <p className="text-sm font-medium text-red-500 xl:text-base">
          Temos um Ecosistema com várias adquirentes automatizadas via Api,
          aumentando a sua taxa de aprovação
        </p>
        <Button paddingSize="lg" className="mx-auto">
          Abra sua conta
        </Button>
      </div>
      <img
        src={PageDashboard}
        alt="Pagina de dashboard"
        className="absolute -right-4 hidden h-[90%] lg:block"
      />
    </section>
  )
}
