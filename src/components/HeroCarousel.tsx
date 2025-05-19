import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Race {
  id: string;
  name: string;
  startTime: string;
  image: string;
  odds: string;
}

const races: Race[] = [
  {
    id: '1',
    name: 'Grand Prix - Finais',
    startTime: 'Ao Vivo',
    image: '/src/assets/race1.webp',
    odds: '3.5x',
  },
  {
    id: '2',
    name: 'Desafio Montanha de Bolinhas',
    startTime: 'Começando em 12m',
    image: '/src/assets/race2.webp',
    odds: '2.8x',
  },
  {
    id: '3',
    name: 'Campeonato Circuito de Velocidade',
    startTime: 'Hoje, 19h30',
    image: '/src/assets/race3.webp',
    odds: '4.2x',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + races.length) % races.length);
  };

  useEffect(() => {
    let intervalId: number;

    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className="relative w-full h-[80vh] overflow-hidden mt-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bolada-black via-transparent to-bolada-black/50 z-10"></div>
      
      {/* Carousel Slides */}
      <div className="relative h-full">
        {races.map((race, index) => (
          <div
            key={race.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: `url(${race.image})`,
                transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 8s ease-out'
              }}
            />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  {/* Live Indicator */}
                  {race.startTime === "Ao Vivo" && (
                    <div className="inline-flex items-center bg-red-600 rounded-full px-3 py-1 mb-4">
                      <div className="animate-pulse h-2 w-2 rounded-full bg-white mr-2"></div>
                      <span className="text-white text-sm font-medium">AO VIVO</span>
                    </div>
                  )}
                  
                  <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 ">
                    {race.name}
                  </h2>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center text-bolada-gold">
                      <Play className="h-5 w-5 mr-2" />
                      <span className="text-lg font-semibold">{race.startTime}</span>
                    </div>
                    <div className="text-bolada-green text-lg font-bold">
                      Odds: {race.odds}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="gold-button text-lg py-6 px-8">
                      Apostar Agora
                    </Button>
                    <Button 
                      variant="outline" 
                      className="neon-button text-lg py-6 px-8"
                      onClick={() => navigate('/live')}
                    >
                      Assistir Transmissão
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 transform translate-y-1/2 left-4 z-30">
        <button
          onClick={prevSlide}
          className="rounded-full p-2 bg-black/30 text-white hover:bg-bolada-gold hover:text-black transition-colors"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      </div>
      <div className="absolute bottom-1/2 transform translate-y-1/2 right-4 z-30">
        <button
          onClick={nextSlide}
          className="rounded-full p-2 bg-black/30 text-white hover:bg-bolada-gold hover:text-black transition-colors"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {races.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-bolada-gold w-10"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
