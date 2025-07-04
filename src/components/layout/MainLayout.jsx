import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">

      <Header/>

      <main className="flex-grow p-8 md:p-16">
        {children}
      </main>

      <Footer/>
    </div>
  )
}

export default MainLayout
