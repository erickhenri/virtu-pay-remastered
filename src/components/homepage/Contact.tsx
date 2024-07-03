import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '../Button'

export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-6 bg-gray-100 p-12 pb-6 text-red-900 lg:p-16 lg:pb-8 xl:p-20 xl:pb-10"
    >
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
  )
}
