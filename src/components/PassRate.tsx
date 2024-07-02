import { Button } from './Button'

export function PassHate() {
  return (
    <section className="relative flex h-[60rem] items-end justify-end overflow-y-hidden bg-red-900 bg-woman-happy bg-[center_0] bg-no-repeat p-12 text-gray-100 [background-size:auto_60%] sm:[background-size:auto_80%] md:h-[37.5rem] md:items-center md:bg-[-14rem_0] md:[background-size:auto_120%] lg:bg-[-18rem_-3rem] lg:px-16 lg:[background-size:auto_150%] xl:px-20">
      <div className="text-center md:w-1/2 md:text-left">
        <h2 className="mb-2 text-3xl font-medium xl:text-4xl">
          <strong className="block text-xl xl:text-2xl">
            Taxa de aprovação elevada
          </strong>
          A mais eficaz do mercado
        </h2>
        <p className="mb-2 xl:text-lg">
          A Nossa Tecnologia avançada permite que em pagamentos via cartão, o
          hub inteligente faça tentativas e alterne em todas processadoras
          parceiras disponíveis, assim buscando a aprovação da compra do seu
          lead. Com essa funcionalidade a taxa de aprovação da VirtuPay
          ultrapassa 97% de eficácia.
        </p>
        <Button paddingSize="lg" className="mt-4 md:mt-12">
          Abra sua conta
        </Button>
      </div>
    </section>
  )
}
