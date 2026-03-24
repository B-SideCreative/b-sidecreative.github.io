import logo from '../assets/Logo_B.ico'
import React from 'react'
import { openWhatsapp } from '../controls/whatsapp'

export default function Header() {

  const [menu, setMenu] = React.useState(false);

  const handleWhatsappClick = () => {
    openWhatsapp();
    setMenu(false);
  };

  return (
    <div className='relative z-50'>
      <header className='text-white bg-linear-to-r from-black-2 to-black flex justify-between items-center py-4 lg:px-36 md:px-16 px-6 fixed w-full top-0 left-0 z-50'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo B Side" className='h-8' />
          <div>
            <h1 className='font-bold text-sm'>B-Side Creative</h1>
            <p className='text-xs'>Design & Audiovisual</p>
          </div>
        </div>
        <div className='gap-8 items-center hidden md:flex'>
          <a className='text-sm hover:underline hover:underline-offset-4 hover:decoration-2 font-bold' href="#main">
            Inicio
          </a>
          <a className='text-sm hover:underline hover:underline-offset-4 hover:decoration-2 font-bold' href="#services">
            Serviços
          </a>
          <a className='text-sm hover:underline hover:underline-offset-4 hover:decoration-2 font-bold' href="#portfólio">
            Portfólio
          </a>
          <a className='text-sm hover:underline hover:underline-offset-4 hover:decoration-2 font-bold' href="#about">
            Sobre
          </a>
          <a className='text-sm py-2 px-5 bg-white-2 hover:bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer' onClick={handleWhatsappClick}>
            Contato
          </a>
        </div>
        <div className='flex flex-col gap-1 md:hidden cursor-pointer' onClick={() => setMenu(!menu)}>
          <div className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${menu ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${menu ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${menu ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </header>

      {/* Menu Dropdown */}
      <div className={`md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-sm transition-all duration-300 overflow-hidden z-40 ${menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <nav className='flex flex-col py-4 px-6 gap-4'>
          <a
            className='text-white text-sm py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2 font-bold'
            href="#main"
            onClick={() => setMenu(false)}
          >
            Inicio
          </a>
          <a
            className='text-white text-sm py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2 font-bold'
            href="#services"
            onClick={() => setMenu(false)}
          >
            Serviços
          </a>
          <a
            className='text-white text-sm py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2 font-bold'
            href="#portfólio"
            onClick={() => setMenu(false)}
          >
            Portfólio
          </a>
          <a
            className='text-white text-sm py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2 font-bold'
            href="#about"
            onClick={() => setMenu(false)}
          >
            Sobre
          </a>
          <a
            className='text-sm py-3 px-4 bg-white-2 text-black font-bold rounded-lg transition-all duration-200 hover:scale-105 text-center mt-2 cursor-pointer'
            onClick={handleWhatsappClick}
          >
            Contato
          </a>
        </nav>
      </div>
    </div>
  )
}