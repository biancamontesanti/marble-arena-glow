
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, ChevronRight } from 'lucide-react';

interface LiveRace {
  id: string;
  name: string;
  status: 'live' | 'upcoming';
  time: string;
  participants: number;
  odds: {
    favorite: string;
    underdog: string;
  };
  image: string;
}

const races: LiveRace[] = [
  {
    id: '1',
    name: 'Grand Prix Finals',
    status: 'live',
    time: 'Live Now',
    participants: 12,
    odds: {
      favorite: '1.8',
      underdog: '3.5'
    },
    image: '/src/assets/race1.webp'
  },
  {
    id: '2',
    name: 'Mountain Challenge',
    status: 'upcoming',
    time: '12 min',
    participants: 10,
    odds: {
      favorite: '2.2',
      underdog: '4.1'
    },
    image: '/src/assets/race2.webp'
  },
  {
    id: '3',
    name: 'Speed Circuit',
    status: 'upcoming',
    time: '45 min',
    participants: 8,
    odds: {
      favorite: '1.5',
      underdog: '5.0'
    },
    image: '/src/assets/race3.webp'
  },
  {
    id: '4',
    name: 'Canyon Run',
    status: 'upcoming',
    time: '2 hours',
    participants: 16,
    odds: {
      favorite: '3.2',
      underdog: '7.5'
    },
    image: '/src/assets/race4.webp'
  }
];

const LiveRaces = () => {
  return (
    <section className="py-20 px-4 bg-bolada-black-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-bolada-gold">Live & Upcoming Races</h2>
          <Button variant="link" className="text-bolada-green flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {races.map((race) => (
            <Card key={race.id} className="race-card h-full bg-bolada-black border-bolada-gold/20 flex flex-col">
              <div className="h-48 relative overflow-hidden rounded-t-lg">
                <img
                  src={race.image}
                  alt={race.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Status Badge */}
                {race.status === 'live' ? (
                  <div className="absolute top-3 left-3 bg-red-600 rounded-full px-3 py-1 flex items-center">
                    <div className="animate-pulse h-2 w-2 rounded-full bg-white mr-2"></div>
                    <span className="text-white text-xs font-medium">LIVE</span>
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-bolada-gold/80 rounded-full px-3 py-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="text-black text-xs font-medium">UPCOMING</span>
                  </div>
                )}
              </div>
              
              <CardHeader className="p-4 pb-0">
                <h3 className="font-bold text-lg text-white">{race.name}</h3>
              </CardHeader>
              
              <CardContent className="p-4 flex-grow flex flex-col">
                <div className="mb-4 flex-grow">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">Start Time:</span>
                    <div className="flex items-center">
                      {race.status === 'live' ? (
                        <Play className="h-3 w-3 mr-1 text-red-500" />
                      ) : (
                        <Clock className="h-3 w-3 mr-1 text-bolada-gold" />
                      )}
                      <span className={`text-sm font-medium ${
                        race.status === 'live' ? 'text-red-500' : 'text-bolada-gold'
                      }`}>{race.time}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">Participants:</span>
                    <span className="text-white text-sm">{race.participants} marbles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Odds Range:</span>
                    <span className="text-bolada-green text-sm font-medium">
                      {race.odds.favorite}x - {race.odds.underdog}x
                    </span>
                  </div>
                </div>
                
                <Button className={`w-full ${
                  race.status === 'live' ? 'gold-button' : 'neon-button'
                }`}>
                  {race.status === 'live' ? 'Bet Now' : 'View Details'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveRaces;
