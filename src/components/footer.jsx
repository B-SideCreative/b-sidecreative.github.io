import logo from '../assets/Logo_B.ico'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from 'react-icons/io5';
import { AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="text-white lg:px-36 md:px-16 px-6 py-4 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 max-w-full">
                <div className='flex items-center gap-2 order-1 sm:order-1'>
                    <img src={logo} alt="Logo B Side" className='h-6 sm:h-8' />
                    <div className="text-left">
                    </div>
                </div>

                <div className="order-3 sm:order-2 grow sm:grow-0">
                    <p className='text-xs sm:text-xs lg:text-sm'>
                        &copy; {new Date().getFullYear()} B-side Creative. Todos os direitos reservados.
                    </p>
                </div>

                <div className='flex items-center gap-3 sm:gap-4 order-2 sm:order-3'>
                    <a href="https://www.instagram.com/bside.creative/e/" target="_blank" rel="noopener noreferrer"
                        className='text-xl sm:text-2xl hover:text-gray-400 transition-colors duration-300'>
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@bsidecreative?lang=pt-BR" target="_blank" rel="noopener noreferrer"
                        className='text-xl sm:text-2xl hover:text-gray-400 transition-colors duration-300'>
                        <IoLogoTiktok />
                    </a>

                    <a href="mailto:bsidecreativecontato@gmail.com" target="_blank" rel="noopener noreferrer"
                        className='text-xl sm:text-2xl hover:text-gray-400 transition-colors duration-300'>
                        <MdEmail />
                    </a>
                </div>
            </div>
        </footer>
    );
}