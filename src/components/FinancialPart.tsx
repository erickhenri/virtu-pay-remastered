import { Button } from './Button'

export function FinancialPart() {
  return (
    <section className="z-10 flex flex-col items-end bg-gray-100 py-48 text-gray-100">
      <div className="w-1/2 rounded-l-2xl bg-red-600 px-16 py-32">
        <h2 className="text-4xl font-semibold">
          Facilitamos a parte financeira da sua empresa de uma forma inteligente
        </h2>
      </div>
      <div className="-mt-12 h-48 w-2/5 rounded-l-2xl bg-gray-100 shadow-2xl" />
      <Button paddingSize="xl" className="-mt-4 mr-32 text-2xl">
        Abra sua conta
      </Button>
    </section>
  )
}
