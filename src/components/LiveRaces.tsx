import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, ChevronRight, Info, ChevronLeft } from 'lucide-react';

interface LiveRace {
  id: string;
  name: string;
  status: 'live' | 'upcoming';
  time: string;
  participants: number;
  price: string;
  numbers?: number[];
  odds: {
    favorite: string;
    underdog: string;
  };
  image: string;
  flag?: string;
}

const races: LiveRace[] = [
  {
    id: '1',
    name: 'Grand Prix - Finais',
    status: 'live',
    time: 'Ao Vivo',
    participants: 15,
    price: 'R$3,50',
    numbers: [4, 22, 21, 7, 13],
    odds: {
      favorite: '3.5',
      underdog: '5.2'
    },
    image: '/src/assets/race1.webp',
    flag: '🇧🇷'
  },
  {
    id: '2',
    name: 'Desafio Montanha de Bolinhas',
    status: 'upcoming',
    time: '12 min',
    participants: 18,
    price: 'R$5,00',
    odds: {
      favorite: '2.8',
      underdog: '4.1'
    },
    image: '/src/assets/race2.webp',
    flag: '🇧🇷'
  },
  {
    id: '3',
    name: 'Campeonato Circuito de Velocidade',
    status: 'upcoming',
    time: '45 min',
    participants: 20,
    price: 'R$8,00',
    odds: {
      favorite: '4.2',
      underdog: '6.5'
    },
    image: '/src/assets/race3.webp',
    flag: '🇧🇷'
  },
  {
    id: '4',
    name: 'Grand Prix - Eliminatórias',
    status: 'live',
    time: 'Ao Vivo',
    participants: 16,
    price: 'R$4,00',
    numbers: [19, 13, 21, 8, 11],
    odds: {
      favorite: '3.1',
      underdog: '5.7'
    },
    image: '/src/assets/race1.webp',
    flag: '🇬🇧'
  },
  {
    id: '5',
    name: 'Desafio Montanha - Torneio Elite',
    status: 'upcoming',
    time: '30 min',
    participants: 24,
    price: 'R$7,50',
    numbers: [6, 12, 3, 9, 5],
    odds: {
      favorite: '2.5',
      underdog: '4.8'
    },
    image: '/src/assets/race2.webp',
    flag: '🇺🇸'
  },
  {
    id: '6',
    name: 'Circuito de Velocidade - Sprint',
    status: 'live',
    time: 'Ao Vivo',
    participants: 12,
    price: 'R$9,00',
    numbers: [3, 17, 8, 42, 15],
    odds: {
      favorite: '3.8',
      underdog: '5.2'
    },
    image: '/src/assets/race3.webp',
    flag: '🇪🇺'
  },
  {
    id: '7',
    name: 'Grand Prix - Copa Internacional',
    status: 'upcoming',
    time: '15 min',
    participants: 22,
    price: 'R$6,00',
    numbers: [7, 14, 32, 19, 26],
    odds: {
      favorite: '2.9',
      underdog: '4.7'
    },
    image: '/src/assets/race1.webp',
    flag: '🇬🇧'
  },
  {
    id: '8',
    name: 'Desafio Montanha - Final',
    status: 'upcoming',
    time: '1 hora',
    participants: 14,
    price: 'R$10,00',
    numbers: [10, 5, 8, 11, 2],
    odds: {
      favorite: '2.6',
      underdog: '4.3'
    },
    image: '/src/assets/race2.webp',
    flag: '🇧🇷'
  }
];

const LiveRaces = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const endIndex = Math.min(startIndex + itemsPerPage, races.length);
  const displayedRaces = races.slice(startIndex, endIndex);
  
  const handleNext = () => {
    if (startIndex + itemsPerPage < races.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0); // Loop back to the beginning
    }
  };

  return (
    <section className="py-16 px-4 bg-bolada-black-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-bolada-gold">Jogos Exclusivos Bolada8</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {displayedRaces.map((race) => (
            <Card key={race.id} className="race-card h-full bg-bolada-black border-bolada-gold/20 flex flex-col overflow-hidden relative group">
              <div className="h-48 relative overflow-hidden rounded-t-lg">
                <img
                  src={race.image}
                  alt={race.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                {race.status === 'live' ? (
                  <div className="absolute top-3 left-3 bg-red-600 rounded-full px-3 py-1 flex items-center">
                    <div className="animate-pulse h-2 w-2 rounded-full bg-white mr-2"></div>
                    <span className="text-white text-xs font-medium">AO VIVO</span>
                  </div>
                ) : null}
                
                {/* Game Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3">
                  <h3 className="font-bold text-lg text-white">{race.name}</h3>
                </div>
                
                {/* Info Button */}
                <button className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-bolada-black flex items-center justify-center border border-white/20 text-white">
                  <Info className="h-3 w-3" />
                </button>
              </div>
              
              <CardContent className="p-3 flex-grow bg-bolada-black">
                {race.numbers && (
                  <div className="flex gap-1 mb-3">
                    {race.numbers.map((num, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white font-bold">
                        {num}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-[#12512c] font-bold">{race.price}</span>
                  </div>
                  <div className="flex items-center">
                    {race.flag && <span className="mr-1">{race.flag}</span>}
                    <span className="text-gray-400 text-sm">{race.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Carousel-style next button positioned on the rightmost edge */}
          <button 
            onClick={handleNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-bolada-black border border-white/20 shadow-lg flex items-center justify-center hover:bg-bolada-gold transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-bolada-gold/50 hover:text-bolada-black text-white hidden md:flex"
            aria-label="Next races"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveRaces;
