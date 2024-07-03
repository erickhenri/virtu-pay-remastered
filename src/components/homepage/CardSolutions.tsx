import { ShoppingCart } from '@phosphor-icons/react'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
}

export function CardSolutions({ title, children }: CardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-100 p-4 text-red-950 shadow-lg">
      <div className="flex items-center gap-5 text-xl font-semibold xl:text-3xl">
        <ShoppingCart
          size={36}
          className="rounded bg-red-900 p-1 text-gray-100"
        />
        <h3>{title}</h3>
      </div>
      <p className="text-xs xl:text-sm">{children}</p>
    </div>
  )
}
