import {
  Cpu,
  Fingerprint,
  Gear,
  Info,
  Question,
  ShoppingCart,
} from '@phosphor-icons/react'
import { CardSolutions } from './CardSolutions'

export function MainSolutions() {
  return (
    <section
      id="solutions"
      className="lg:bg-celular-mockup relative flex flex-col items-center gap-8 bg-red-900 bg-none bg-[-20rem_center] bg-no-repeat p-8 sm:gap-12 sm:p-12 lg:flex-row lg:justify-end lg:gap-0 lg:px-16 lg:py-28 xl:bg-[-16rem_center] xl:px-20 xl:py-36"
    >
      <h2 className="text-center text-3xl font-normal text-white lg:absolute lg:left-16 lg:top-10 lg:text-left xl:left-20 xl:top-20 xl:text-4xl">
        Conheça nossas <strong className="block">principais soluções</strong>
      </h2>
      <div className="z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
        <CardSolutions title="E-commerce" icon={ShoppingCart}>
          Gateway totalmente intuitivo ideal para a Implementação no seu
          ecommerce, maximize e otimize as suas vendas. Nossa plataforma foi
          criada com o intuito de lhe possibilitar escalar ao infinito sem se
          preocupar com limitações Financeiras.
        </CardSolutions>
        <CardSolutions title="Suporte" icon={Question}>
          Contamos com um Suporte Exclusivo por Contas, com 24 Horas de
          Prontidão para sanar dúvidas, Esclarecer questões sobre a sua operação
          e principalmente no auxilio para o seu negócio não parar.
        </CardSolutions>
        <CardSolutions title="Info produtos" icon={Info}>
          Oferecemos uma plataforma centralizada que também possibilita
          gerenciar e integrar produtos digitais como: info produtos(e-books e
          cursos online), iGaming e Rifas digitais.
        </CardSolutions>
        <CardSolutions title="Anti fraude" icon={Fingerprint}>
          Sistema Anti Fraude Sofisticado e totalmente competente, fazendo com
          que a sua operação tenha segurança e ainda garantindo taxa de
          aprovação superior a 97%. Pois contamos com um hub inteligente com
          várias adquirentes trabalhando simultaneamente e soluções
          pre-chargeback Visa e Martercard.
        </CardSolutions>
        <CardSolutions title="Processamentos" icon={Cpu}>
          Contamos com uma vasta lista de parceiros para simplificar, otimizar e
          potencializar o nosso ecossistema. São mais de 15 parceiros nos
          auxiliando no processamento para a sua operação não parar.
        </CardSolutions>
        <CardSolutions title="Painel de controle" icon={Gear}>
          Nosso Painel de Controle oferece uma interface totalmente intuitiva,
          equipada com todas as funcionalidades necessárias para que você
          obtenha o Êxito em seu negócio Digital.
        </CardSolutions>
      </div>
    </section>
  )
}
