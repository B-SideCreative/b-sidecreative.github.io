import { useState, useRef, useEffect } from "react";
import servicesData from "../controls/services.js";

export default function Services() {
    const [mousePositions, setMousePositions] = useState([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
    ]);
    const [isVisible, setIsVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(Array(servicesData.length).fill(false));
    const cardRefs = servicesData.map(() => useRef(null));
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        // Animar cada card com delay
                        servicesData.forEach((_, index) => {
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

    const handleMouseMove = (e, cardIndex) => {
        if (!cardRefs[cardIndex].current) return;

        const card = cardRefs[cardIndex].current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        setMousePositions(prev => {
            const newPositions = [...prev];
            newPositions[cardIndex] = { x: mouseX, y: mouseY };
            return newPositions;
        });
    };

    const handleMouseLeave = (cardIndex) => {
        setMousePositions(prev => {
            const newPositions = [...prev];
            newPositions[cardIndex] = { x: 0, y: 0 };
            return newPositions;
        });
    };

    const getCardTransform = (cardIndex) => {
        const maxRotation = window.innerWidth < 768 ? 3 : 6;
        const divisor = window.innerWidth < 768 ? 200 : 150;
        const rX = (mousePositions[cardIndex].y / divisor) * maxRotation;
        const rY = -(mousePositions[cardIndex].x / divisor) * maxRotation;
        return `perspective(1500px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0)`;
    };
    return (
        <div id="services" className="relative overflow-hidden" ref={sectionRef}>
            {/* Background 3D Elements */}
            <div className="absolute inset-0 z-0">
                {/* Floating spheres - cores vibrantes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-br from-purple-500/25 to-pink-500/15 rounded-full blur-xl animate-float will-change-transform"
                    style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-linear-to-br from-blue-400/20 to-cyan-400/12 rounded-full blur-lg animate-float will-change-transform"
                    style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
                <div className="absolute bottom-32 left-20 w-40 h-40 bg-linear-to-br from-emerald-500/18 to-teal-500/10 rounded-full blur-2xl animate-float will-change-transform"
                    style={{ animationDelay: '6s', animationDuration: '12s' }}></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-linear-to-br from-orange-400/20 to-red-500/12 rounded-full blur-xl animate-float will-change-transform"
                    style={{ animationDelay: '2s', animationDuration: '9s' }}></div>

                {/* Geometric shapes - cores vibrantes */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-linear-to-br from-violet-400/18 to-indigo-500/12 rotate-45 blur-sm animate-spin-slow will-change-transform"
                    style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-linear-to-br from-yellow-400/20 to-amber-500/15 rounded-lg rotate-12 blur-sm animate-pulse-glow will-change-transform"
                    style={{ animationDuration: '6s' }}></div>

                {/* Mesh gradient background - cores suaves */}
                <div className="absolute inset-0"></div>

                {/* Subtle radial gradients */}
                <div className="absolute top-0 left-0 w-full h-full "></div>
                <div className="absolute bottom-0 right-0 w-full h-full"></div>

                {/* Grid pattern - cores suaves */}
                <div className="absolute inset-0 opacity-3"
                    style={{
                        backgroundImage: `
                             linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                         `,
                        backgroundSize: '60px 60px'
                    }}>
                </div>

                {/* Subtle light rays - cores suaves */}
                <div className="absolute inset-0 opacity-15"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
                <div className="text-center text-white mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5">Nossos Serviços</h2>
                    <p className="text-lg sm:text-xl">Soluções completas em design e audiovisual</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {servicesData.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                ref={cardRefs[index]}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                className={`group relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-linear-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-2xl hover:border-white/40 transition-all duration-700 ease-out overflow-hidden ${
                                    cardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{
                                    transform: cardsVisible[index] ? getCardTransform(index) : 'translateY(32px)',
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 text-white h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md flex items-center justify-center rounded-2xl mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300">
                                    <IconComponent className="text-2xl sm:text-2xl lg:text-3xl" />
                                </div>
                                <h1 className="relative z-10 text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-white/90 transition-colors duration-300">{service.title}</h1>
                                <p className="relative z-10 text-white/80 text-sm sm:text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}