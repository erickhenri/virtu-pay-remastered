import Padlock from '../../assets/padlock.png'

export function SecurePayments() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-red-600 p-8 pt-0 text-white sm:h-52 sm:flex-row sm:gap-6 md:px-12 lg:px-16 xl:px-20">
      <img src={Padlock} alt="" className="h-full" />
      <div className="max-w-[37rem] text-center sm:py-4 sm:text-left">
        <h2 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          Protegemos seus pagamentos
        </h2>
        <p className="text-xs font-semibold lg:text-sm xl:text-base xl:font-bold">
          Na Virtu Pay, nosso sistema antifraude avançado combina inteligência e
          tecnologia para garantir alta aprovação e segurança em sua loja
          online. Conte conosco para proteger suas transações.
        </p>
      </div>
    </div>
  )
}
