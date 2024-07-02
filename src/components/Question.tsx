import { CaretDown } from '@phosphor-icons/react'
import { useState } from 'react'

interface QuestionProps {
  question: string
  answer: string
}

export function Question({ question, answer }: QuestionProps) {
  const [changeAnswer, setChangeAnswer] = useState(false)

  return (
    <div className="text-xs sm:text-base">
      <div
        className="flex cursor-pointer items-center justify-between gap-3 py-4"
        onClick={() => setChangeAnswer((prevChange) => !prevChange)}
      >
        <span className="font-medium">{question}</span>
        <CaretDown size={24} />
      </div>
      <p
        className={`${changeAnswer ? 'mb-4 opacity-100' : 'h-0 scale-0 opacity-0'} transition-opacity duration-500`}
      >
        {answer}
      </p>
    </div>
  )
}
