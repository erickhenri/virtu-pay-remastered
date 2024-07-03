import { BillingBoards } from './components/homepage/BillingBoards'
import { BillingStructure } from './components/homepage/BillingStructure'
import { CommonQuestions } from './components/homepage/CommonQuestions'
import { Header } from './components/homepage/Header'
import { Home } from './components/homepage/Home'
import { MainSolutions } from './components/homepage/MainSolutions'
import { PassHate } from './components/homepage/PassRate'
import { Reasons } from './components/homepage/Reasons'
import { SecurePayments } from './components/homepage/SecurePayments'
import { Footer } from './components/homepage/Footer'
import { Contact } from './components/homepage/Contact'
import { Integration } from './components/homepage/Integration'

export function App() {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Header />
      <Home />
      <MainSolutions />
      <Reasons />
      <Integration />
      <PassHate />
      <BillingStructure />
      <SecurePayments />
      <BillingBoards />
      <CommonQuestions />
      <Contact />
      <Footer />
    </div>
  )
}
