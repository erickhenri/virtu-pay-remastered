import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'rounded-full font-semibold text-white transition-all',
  variants: {
    theme: {
      blue: 'bg-gradient-to-l to-blue-700 via-blue-600 via-70% from-blue-700 hover:bg-[50%_0] transition-all [background-size:300%_300%]',
      red: 'bg-red-900 hover:bg-red-700',
    },
    paddingSize: {
      sm: 'px-2 py-1',
      base: 'px-3 py-2',
      lg: 'px-5 py-3',
      xl: 'px-8 py-5',
    },
  },
  defaultVariants: {
    theme: 'blue',
    paddingSize: 'base',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    className?: string
    children: ReactNode
  }

export function Button({
  className,
  children,
  theme,
  paddingSize,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ className, theme, paddingSize })} {...rest}>
      {children}
    </button>
  )
}
