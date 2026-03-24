import { useState, useEffect } from 'react';
import bg from '../assets/bg.png'
import Services from './services';
import About from './about';
import Contact from './contact';
import Protifolio from './protifolio';
import Brands from './brands';
import { openWhatsapp } from '../controls/whatsapp';

export default function Main() {
    const [typedText, setTypedText] = useState('');
    const fullText = "Olhamos para o que ignoram.\nCriamos o que ninguém esquece.";

    const handleWhatsappClick = () => {
        openWhatsapp();
    };

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex < fullText.length) {
                setTypedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, 25);

        return () => clearInterval(timer);
    }, []);

    return (
        <main id='main' className="">
            <div className="grid md:grid-cols-2 gap-6 container mx-auto text-white px-4 py-39 bg-linear-to-br">
                <div className='h-full flex flex-col justify-center items-center md:items-start gap-4 animate-slide-in-left text-center md:text-left'>
                    <h1 className='text-4xl md:text-7xl'>O <span className='inline-block bg-white text-black font-bold px-1'>Lado B</span> da Criatividade</h1>
                    <p className='text-xs md:text-xl'>
                        {typedText.split('\n').map((line, index) => (
                            <span key={index} className='block'>
                                {line}
                                {index === typedText.split('\n').length - 1 && !fullText.endsWith(typedText) && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </span>
                        ))}
                    </p>
                    <button onClick={handleWhatsappClick} className='mt-6 inline-block bg-white-2 text-black font-bold w-80 text-center py-2 rounded-lg cursor-pointer hover:bg-white transition-colors duration-300 hover:scale-105 transform'>
                        Fazer um orçamento
                    </button>
                </div>
                <div className='h-full justify-center items-center animate-slide-in-right flex'>
                    <img
                        src={bg}
                        alt="pattern"
                        className='w-full md:max-w-[85%] h-auto md:h-125 object-cover border-2 rounded-2xl'
                    />
                </div>
            </div>
            <Services />
            <Protifolio />
            <About />
            <Contact />
            <Brands />
        </main>
    );
}
