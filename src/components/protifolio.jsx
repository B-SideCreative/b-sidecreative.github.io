import { useState, useRef, useEffect } from 'react'
import ins1 from '../assets/ins1.png'
import ins2 from '../assets/ins2.png'
import ins3 from '../assets/ins3.png'
import ins4 from '../assets/ins4.png'
import ins5 from '../assets/ins5.png'
import v1 from '../assets/v1.mp4'
import v2 from '../assets/v2.mp4'
import v3 from '../assets/v3.mp4'
import v4 from '../assets/v4.mp4'

// Componente Carrossel Instagram
function InstagramCarousel({ title, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    // Função para verificar se é vídeo
    const isVideo = (src) => {
        return typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg'))
    }

    return (
        <div className="group relative backdrop-blur-xl bg-linear-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-2xl hover:border-white/40 transition-all duration-700 ease-out overflow-hidden shadow-2xl w-full">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Header do Carrossel */}
            <div className="relative z-10 p-4">
                <h3 className="text-white font-semibold text-lg group-hover:text-white/90 transition-colors duration-300">{title}</h3>
                <p className="text-white/80 text-sm group-hover:text-white/70 transition-colors duration-300">Deslize para ver mais</p>
            </div>

            {/* Container da Imagem/Vídeo */}
            <div className="relative z-10 overflow-hidden">
                {isVideo(images[currentIndex].src) ? (
                    <video
                        src={images[currentIndex].src}
                        className="w-full h-auto rounded-lg"
                        controls
                        muted
                        autoPlay
                        playsInline
                        preload="metadata"
                    />
                ) : (
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-auto rounded-lg"
                    />
                )}

                {/* Botões de Navegação */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 sm:p-2 transition-all duration-300 shadow-lg border border-white/20 hover:border-white/40 z-20"
                        >
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 sm:p-2 transition-all duration-300 shadow-lg border border-white/20 hover:border-white/40 z-20"
                        >
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Indicadores */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-light-green' : 'bg-white bg-opacity-50'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Footer do Carrossel */}
            <div className="relative z-10 p-4">
                <h4 className="text-white font-medium mb-2 group-hover:text-white/90 transition-colors duration-300">{images[currentIndex].title}</h4>
                <p className="text-white/80 text-sm group-hover:text-white/70 transition-colors duration-300">{images[currentIndex].description}</p>
            </div>
        </div>
    )
}

export default function Protifolio() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    // Dados dos carrosséis
    const carousel1Images = [
        {
            src: v1,
            alt: "Edição de Vídeo Promocional",
            title: "Vídeo Promocional",
            description: "Edição profissional para campanha de marketing digital"
        },
        {
            src: v2,
            alt: "Motion Graphics",
            title: "Motion Graphics",
            description: "Animações e efeitos visuais para redes sociais"
        },
        {
            src: v3,
            alt: "Documentário",
            title: "Documentário Corporativo",
            description: "Produção audiovisual completa para empresa"
        },
        {
            src: v4,
            alt: "Vídeo de Evento",
            title: "Vídeo de Evento",
            description: "Cobertura e edição de eventos corporativos e sociais"
        },
    ]

    const carousel2Images = [
        {
            src: ins1,
            alt: "Logo Design",
            title: "Design de Logo",
            description: "Identidade visual criativa e marcante"
        },
        {
            src: ins2,
            alt: "Flyer Design",
            title: "Material Gráfico",
            description: "Flyers, banners e peças promocionais"
        },
        {
            src: ins3,
            alt: "Social Media Design",
            title: "Posts para Redes Sociais",
            description: "Design visual para Instagram, Facebook e LinkedIn"
        },
        {
            src: ins4,
            alt: "Branding",
            title: "Branding Completo",
            description: "Desenvolvimento de identidade visual e manual de marca"
        },
        {
            src: ins5,
            alt: "Embalagem",
            title: "Design de Embalagem",
            description: "Criação de embalagens atrativas e funcionais"
        },
    ]

    return (
        <div id="portfólio" className="py-12 sm:py-16 lg:py-24 overflow-x-hidden" ref={sectionRef}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5 text-center text-white">Nosso Portfólio</h1>
            <p className="text-lg sm:text-xl text-white text-center mb-12">Projetos que contam histórias únicas</p>

            <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl overflow-x-hidden">
                {/* Carrossel 1 - Edição de Vídeo */}
                <div className={`w-full max-w-sm sm:max-w-lg transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
                    <InstagramCarousel
                        title="Edição de Vídeo"
                        images={carousel1Images}
                    />
                </div>

                {/* Carrossel 2 - Design Gráfico */}
                <div className={`w-full max-w-sm sm:max-w-lg transition-all duration-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
                    <InstagramCarousel
                        title="Design Gráfico"
                        images={carousel2Images}
                    />
                </div>
            </div>
        </div>
    )
}