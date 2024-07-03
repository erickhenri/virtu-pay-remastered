import { questions } from '../../database/questions'
import { Question } from './Question'

export function CommonQuestions() {
  return (
    <div
      id="about"
      className="bg-red-900 p-8 pb-0 sm:p-12 lg:p-16 xl:p-20 xl:pb-0"
    >
      <h2 className="text-center text-2xl font-bold text-gray-100 sm:text-3xl xl:text-4xl">
        Perguntas frequentes
      </h2>
      <div className="translate-y-10 divide-y divide-red-900 rounded-xl bg-gradient-to-t from-white to-gray-300 p-8 text-red-900 shadow-xl sm:p-12 lg:translate-y-14 lg:p-16 xl:p-20">
        {questions.map(({ question, answer }) => (
          <Question key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  )
}
