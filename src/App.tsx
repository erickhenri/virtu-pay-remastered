import { WhatsappLogo } from '@phosphor-icons/react'
import { BillingBoards } from './components/homepage/BillingBoards'
import { BillingStructure } from './components/homepage/BillingStructure'
import { Button } from './components/Button'
import { CommonQuestions } from './components/homepage/CommonQuestions'
import { Header } from './components/homepage/Header'
import { Home } from './components/homepage/Home'
import { MainSolutions } from './components/homepage/MainSolutions'
import { PassHate } from './components/homepage/PassRate'
import { Reasons } from './components/homepage/Reasons'
import { SecurePayments } from './components/homepage/SecurePayments'
import { Footer } from './components/homepage/Footer'

export function App() {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Header />
      <Home />
      <MainSolutions />
      <Reasons />
      <div className="flex flex-col gap-2 bg-red-600 px-8 py-6 text-center text-gray-100 sm:px-12 sm:py-8 lg:gap-4 lg:px-16 lg:py-14 xl:px-20">
        <span className="font-medium lg:text-xl xl:text-2xl">
          Aumente a sua conversão e expectativa de experiência
        </span>
        <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl">
          Integração com Checkouts Externos
        </h2>
        <p className="font-medium lg:text-xl xl:text-2xl">
          Oferecemos também integrações externas com checkouts Parceiros para
          Otimizar o seu negócio de forma simples e eficáz.
        </p>
      </div>
      <PassHate />
      <BillingStructure />
      <SecurePayments />
      <BillingBoards />
      <CommonQuestions />
      <div className="flex flex-col items-center justify-center gap-6 bg-gray-100 p-12 pb-6 text-red-900 lg:p-16 lg:pb-8 xl:p-20 xl:pb-10">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl xl:text-4xl">
          Ainda ficou com alguma dúvida?
        </h2>
        <span className="text-sm sm:text-base xl:text-xl">
          Chame nosso suporte no WhatsApp.
        </span>
        <Button
          paddingSize="lg"
          className="flex items-center gap-2 from-green-700 via-green-500 to-green-700 font-normal"
        >
          Falar com o suporte
          <WhatsappLogo size={32} />
        </Button>
      </div>
      <Footer />
    </div>
  )
}
