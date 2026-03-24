import { useState, useRef, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { createWhatsappUrl } from "../controls/whatsapp";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState([false, false, false]); // 3 cards de contato
    const sectionRef = useRef(null);
    const whatsappURL = createWhatsappUrl();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        // Animar cada card com delay
                        [0, 1, 2].forEach((index) => {
                            setTimeout(() => {
                                setCardsVisible(prev => {
                                    const newVisible = [...prev];
                                    newVisible[index] = true;
                                    return newVisible;
                                });
                            }, index * 200); // 200ms de delay entre cada card
                        });
                    }
                });
            },
            {
                threshold: 0.2 // Trigger quando 20% da seção estiver visível
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);
    return (
        <div id="contact" className=" py-12 sm:py-16 lg:py-10 text-white" ref={sectionRef}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 text-center">Entre em Contato</h1>
            <p className="text-lg sm:text-xl text-white text-center">Vamos criar algo incrível juntos</p>
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                {/* Informações de Contato */}
                <div className="space-y-4">
                    {/* Card Email */}
                    <a
                        href="mailto:bsidecreativecontato@gmail.com"
                        className={`group relative p-3 sm:p-4 backdrop-blur-xl bg-linear-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-xl hover:border-white/40 transition-all duration-700 ease-out overflow-hidden hover:scale-105 transform block ${cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start space-x-3">
                            <div className="relative z-10 text-white h-10 w-10 sm:h-12 sm:w-12 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                <MdEmail className="text-lg sm:text-xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="relative z-10 text-white font-bold text-base sm:text-lg mb-1 group-hover:text-white/90 transition-colors duration-300">Email</h3>
                                <p className="relative z-10 text-white/80 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">bsidecreativecontato@gmail.com</p>
                            </div>
                        </div>
                    </a>

                    {/* Card Telefone */}
                    <a
                        href={whatsappURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 sm:p-4 backdrop-blur-xl bg-linear-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-xl hover:border-white/40 transition-all duration-700 ease-out overflow-hidden hover:scale-105 transform block ${cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start space-x-3">
                            <div className="relative z-10 text-white h-10 w-10 sm:h-12 sm:w-12 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                <IoLogoWhatsapp className="text-lg sm:text-xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="relative z-10 text-white font-bold text-base sm:text-lg mb-1 group-hover:text-white/90 transition-colors duration-300">WhatsApp</h3>
                                <p className="relative z-10 text-white/80 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">+55 (48) 9664-2401</p>
                            </div>
                        </div>
                    </a>

                    {/* Card Instagram */}
                    <a
                        href="https://www.instagram.com/bside.creative/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 sm:p-4 backdrop-blur-xl bg-linear-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-xl hover:border-white/40 transition-all duration-700 ease-out overflow-hidden hover:scale-105 transform block ${cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start space-x-3">
                            <div className="relative z-10 text-white h-10 w-10 sm:h-12 sm:w-12 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                <BiLogoInstagramAlt className="text-lg sm:text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="relative z-10 text-white font-bold text-base sm:text-lg mb-1 group-hover:text-white/90 transition-colors duration-300">Instagram</h3>
                                <p className="relative z-10 text-white/80 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">@bside.creative</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}