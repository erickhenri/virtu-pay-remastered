import Plates from '../../assets/plates.png'

export function BillingBoards() {
  return (
    <div
      id="boards"
      className="flex flex-col items-center justify-center gap-8 bg-gray-100 p-8 sm:gap-12 sm:p-12 lg:gap-16 lg:p-16 xl:gap-20 xl:p-20"
    >
      <h2 className="text-center text-3xl font-bold text-red-600 xl:text-4xl">
        Placas de faturamento
      </h2>
      <img src={Plates} alt="" />
    </div>
  )
}
