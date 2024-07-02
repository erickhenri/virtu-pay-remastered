import { Barcode, CreditCard, PixLogo } from '@phosphor-icons/react'
import { Button } from './Button'

export function BillingStructure() {
  return (
    <section
      id="rates"
      className="flex flex-col items-center gap-8 bg-gray-100 bg-mash bg-cover bg-no-repeat p-8 sm:gap-12 sm:p-12 lg:p-16 xl:gap-16 xl:bg-[center_-12rem] xl:p-20"
    >
      <h2 className="text-center text-2xl font-bold text-red-600 sm:text-3xl xl:text-4xl">
        Entendendo os diferentes modelos e <br /> estruturas de cobrança
      </h2>

      <div className="grid max-w-[80rem] grid-cols-1 gap-3 text-xs md:grid-cols-3 lg:gap-6 lg:text-sm xl:gap-8">
        <div className="order-1 flex flex-col items-center gap-4 rounded-xl bg-gradient-to-t from-blue-600 to-blue-700 p-4 text-white md:order-1 xl:rounded-2xl">
          <span className="font-medium">CARTÃO DE CRÉDITO (D+2)</span>
          <span className="text-3xl font-semibold lg:text-4xl xl:text-5xl">
            8,79%
          </span>
          <span className="font-light">por transação</span>
        </div>
        <div className="order-3 flex flex-col items-center gap-4 rounded-xl bg-gradient-to-t from-blue-600 to-blue-700 p-4 text-white md:order-2 xl:rounded-2xl">
          <span className="font-medium">BOLETO (D+0)</span>
          <span className="text-3xl font-semibold lg:text-4xl xl:text-5xl">
            4,49%
          </span>
        </div>
        <div className="order-5 flex flex-col items-center gap-4 rounded-xl bg-gradient-to-t from-blue-600 to-blue-700 p-4 text-white md:order-3 xl:rounded-2xl">
          <span className="font-medium">PIX (D+0)</span>
          <span className="text-3xl font-semibold lg:text-4xl xl:text-5xl">
            5,99%
          </span>
        </div>
        <div className="order-2 rounded-xl bg-white/50 p-4 text-red-900 shadow-xl md:order-4">
          <div className="mb-4 flex items-center gap-5">
            <CreditCard
              size={36}
              className="rounded bg-red-900 p-1 text-white"
            />
            <span className="font-semibold xl:text-xl">
              Transparência nos custos
            </span>
          </div>
          <p className="text-justify">
            Sem taxas ocultas, proporcionando clareza e confiança aos clientes.
          </p>
        </div>
        <div className="order-4 rounded-xl bg-white/50 p-4 text-red-900 shadow-xl md:order-5">
          <div className="mb-4 flex items-center gap-5">
            <Barcode size={36} className="rounded bg-red-900 p-1 text-white" />
            <span className="font-semibold xl:text-xl">
              Acessibilidade financeira
            </span>
          </div>
          <p className="text-justify">
            O boleto bancário é uma alternativa de pagamento usada no Brasil,
            especialmente por pessoas sem cartão de crédito, débito ou conta
            bancária, oferecendo acessibilidade e conveniência.
          </p>
        </div>
        <div className="order-6 rounded-xl bg-white/50 p-4 text-red-900 shadow-xl md:order-6">
          <div className="mb-4 flex items-center gap-5">
            <PixLogo size={36} className="rounded bg-red-900 p-1 text-white" />
            <span className="font-semibold xl:text-xl">
              Praticidade no uso diário
            </span>
          </div>
          <p className="text-justify">
            Nosso PIX com saque automático torna as transações financeiras do
            dia a dia mais convenientes e rápidas.
          </p>
        </div>
      </div>
      <Button paddingSize="lg" className="mx-auto">
        Abra sua conta
      </Button>
    </section>
  )
}
