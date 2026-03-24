import Header from './components/header'
import Main from './components/main'
import Whatsapp from './components/whatsapp'
import Footer from './components/footer'

export default function App() {

  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <Main />
      <Whatsapp />
      <Footer />
    </div>
  )
}