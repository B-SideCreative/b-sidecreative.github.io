import { useState, useEffect, useRef } from 'react';
import studio from '../assets/studio.png';

const START_YEAR = 2018;

function getCurrentExperienceYears() {
  return Math.max(new Date().getFullYear() - START_YEAR, 0);
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        // Animação contador de projetos
        let projects = 0;
        const projectTimer = setInterval(() => {
          projects += 500000;
          if (projects <= 35000000) {
            setProjectCount(projects);
          } else {
            setProjectCount(35000000);
            clearInterval(projectTimer);
          }
        }, 20);

        // Animação contador de anos
        const targetYears = getCurrentExperienceYears();
        let years = 0;
        const yearTimer = setInterval(() => {
          years += 1;
          if (years <= targetYears) {
            setYearCount(years);
          } else {
            setYearCount(targetYears);
            clearInterval(yearTimer);
          }
        }, 180);

        // Timer para mostrar as estrelas após as animações terminarem
        const starsTimer = setTimeout(() => {
          setShowStars(true);
        }, 2000); // 2 segundos após o início das animações

        return () => {
          clearInterval(projectTimer);
          clearInterval(yearTimer);
          clearTimeout(starsTimer);
        };
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Função para gerar estrelas aleatoriamente
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div id="about" className="relative overflow-hidden" ref={aboutRef}>
      {/* Fundo estrelado */}
      <div className="absolute inset-0">
        <div className={`stars-container transition-opacity duration-1000 ${showStars ? 'opacity-100' : 'opacity-0'}`}>
          {generateStars()}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className={`text-center md:text-left text-white ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Sobre Nós
          </h2>
          <p className="mt-4 text-lg">
            Na música, o Lado B é onde moram as faixas mais autênticas. A B-Side
            Creative, fundada por Igor e Mariana, nasceu dessa mesma premissa: fugir
            do genérico para entregar o extraordinário.
          </p>
          <p className={`mt-4 text-lg transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: isVisible ? '1s' : '0s' }}>
            Unimos o design estratégico ao
            audiovisual. Aqui, criamos a frequência única da sua marca através de planos
            completos e ideias fora do comum. Seja bem-vindo ao lado autêntico da
            criatividade.
          </p>
          <div className={`mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center md:justify-between gap-6 sm:gap-8 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: isVisible ? '2s' : '0s' }}>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl flex justify-center items-center font-bold">
                {projectCount >= 1000000 ? `${(projectCount / 1000000).toFixed(0)}M` : `${projectCount.toLocaleString('pt-BR')}`}+
              </h1>
              <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Visualizações</p>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl flex justify-center items-center font-bold">
                {yearCount}
              </h1>
              <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Anos de <br />
                experiência</p>
            </div>
          </div>
        </div>
        <div className={`flex justify-center md:justify-end ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <img
            src={studio}
            alt="About Us"
            className="w-full h-auto shadow-lg border-2 border-white rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}