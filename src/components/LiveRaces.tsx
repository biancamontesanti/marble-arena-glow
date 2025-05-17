
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, ChevronRight, Info } from 'lucide-react';

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
    name: 'Roleta Brasileira',
    status: 'live',
    time: 'Ao Vivo',
    participants: 12,
    price: 'R$2,50',
    numbers: [4, 22, 21, 7, 13],
    odds: {
      favorite: '1.8',
      underdog: '3.5'
    },
    image: '/src/assets/race1.webp',
    flag: '🇧🇷'
  },
  {
    id: '2',
    name: 'All Bets Blackjack Brasileiro',
    status: 'upcoming',
    time: '10 min',
    participants: 10,
    price: 'R$5,00',
    odds: {
      favorite: '2.2',
      underdog: '4.1'
    },
    image: '/src/assets/race2.webp',
    flag: '🇧🇷'
  },
  {
    id: '3',
    name: 'Baccarat Mandarin 2',
    status: 'upcoming',
    time: '45 min',
    participants: 8,
    price: 'R$10,00',
    odds: {
      favorite: '1.5',
      underdog: '5.0'
    },
    image: '/src/assets/race3.webp',
    flag: '🇧🇷'
  },
  {
    id: '4',
    name: 'Super Spin Roulette',
    status: 'upcoming',
    time: '2 horas',
    participants: 16,
    price: 'R$1,00',
    numbers: [19, 13, 21, 21, 11],
    odds: {
      favorite: '3.2',
      underdog: '7.5'
    },
    image: '/src/assets/race4.webp',
    flag: '🇬🇧'
  }
];

const LiveRaces = () => {
  return (
    <section className="py-16 px-4 bg-bolada-black-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-bolada-gold">Jogos Exclusivos bet365</h2>
          <Button variant="link" className="text-[#12512c] flex items-center">
            Ver Todos <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {races.map((race) => (
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
        </div>
      </div>
    </section>
  );
};

export default LiveRaces;
