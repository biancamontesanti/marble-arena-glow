import React from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TopBettor {
  id: string;
  username: string;
  winnings: string;
  totalBets: number;
  avatar: string;
}

interface TopMarble {
  id: string;
  name: string;
  wins: number;
  winRate: string;
  color: string;
}

interface RecentWinner {
  id: string;
  username: string;
  race: string;
  amount: string;
  betAmount: string;
  timestamp: string;
  avatar: string;
}

const topBettors: TopBettor[] = [
  { id: '1', username: 'GoldenRacer', winnings: 'R$12.480', totalBets: 78, avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: '2', username: 'MarbleKing', winnings: 'R$8.945', totalBets: 56, avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: '3', username: 'BetMaster', winnings: 'R$7.320', totalBets: 42, avatar: 'https://i.pravatar.cc/100?img=3' },
  { id: '4', username: 'LuckyStreak', winnings: 'R$5.690', totalBets: 37, avatar: 'https://i.pravatar.cc/100?img=4' },
  { id: '5', username: 'RollingThunder', winnings: 'R$4.120', totalBets: 31, avatar: 'https://i.pravatar.cc/100?img=5' },
];

const topMarbles: TopMarble[] = [
  { id: '1', name: 'Blizzard', wins: 24, winRate: '64%', color: 'bg-blue-500' },
  { id: '2', name: 'Phoenix', wins: 21, winRate: '58%', color: 'bg-red-500' },
  { id: '3', name: 'Emerald', wins: 19, winRate: '52%', color: 'bg-emerald-500' },
  { id: '4', name: 'Obsidian', wins: 18, winRate: '49%', color: 'bg-gray-800' },
  { id: '5', name: 'Ruby', wins: 15, winRate: '44%', color: 'bg-rose-600' },
];

const recentWinners: RecentWinner[] = [
  { 
    id: '1', 
    username: 'MarbleHunter', 
    race: 'Grand Prix Finais', 
    amount: 'R$3.250', 
    betAmount: 'R$650', 
    timestamp: '3 min atrás',
    avatar: 'https://i.pravatar.cc/100?img=11'
  },
  { 
    id: '2', 
    username: 'SpeedyBets', 
    race: 'Desafio Montanha', 
    amount: 'R$1.875', 
    betAmount: 'R$375', 
    timestamp: '12 min atrás',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  { 
    id: '3', 
    username: 'GoldenRoll', 
    race: 'Circuito de Velocidade', 
    amount: 'R$5.100', 
    betAmount: 'R$850', 
    timestamp: '28 min atrás',
    avatar: 'https://i.pravatar.cc/100?img=13'
  },
  { 
    id: '4', 
    username: 'LuckyMarble', 
    race: 'Corrida do Canyon', 
    amount: 'R$960', 
    betAmount: 'R$240', 
    timestamp: '45 min atrás',
    avatar: 'https://i.pravatar.cc/100?img=14'
  },
  { 
    id: '5', 
    username: 'BetWizard', 
    race: 'Pista Oceânica', 
    amount: 'R$2.800', 
    betAmount: 'R$700', 
    timestamp: '1 hora atrás',
    avatar: 'https://i.pravatar.cc/100?img=15'
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bolada-gold mb-4">Destaques de Hoje</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira os últimos resultados, melhores desempenhos e os maiores ganhadores da nossa comunidade de corridas de bolinhas.
          </p>
        </div>
        
        <Tabs defaultValue="bettors" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-bolada-black-light border border-bolada-gold/20 p-1">
              <TabsTrigger value="bettors" className="data-[state=active]:bg-bolada-gold data-[state=active]:text-black">
                <Trophy className="mr-2 h-4 w-4" />
                Melhores Apostadores
              </TabsTrigger>
              <TabsTrigger value="marbles" className="data-[state=active]:bg-bolada-gold data-[state=active]:text-black">
                <Medal className="mr-2 h-4 w-4" />
                Melhores Bolinhas
              </TabsTrigger>
              <TabsTrigger value="winners" className="data-[state=active]:bg-bolada-gold data-[state=active]:text-black">
                <Award className="mr-2 h-4 w-4" />
                Ganhadores Recentes
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="bettors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {topBettors.map((bettor, index) => (
                <Card key={bettor.id} className="bg-bolada-black-light border border-bolada-gold/30 overflow-hidden hover:border-bolada-gold/50 transition-all duration-300">
                  <CardHeader className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={bettor.avatar} 
                          alt={bettor.username} 
                          className="rounded-full w-12 h-12 object-cover border-2 border-bolada-gold"
                        />
                        {index < 3 && (
                          <div className={`absolute -top-1 -right-1 rounded-full p-1 ${
                            index === 0 ? 'bg-bolada-gold' : index === 1 ? 'bg-gray-300' : 'bg-amber-600'
                          }`}>
                            <Star className="h-3 w-3 text-black" fill="currentColor" />
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-sm text-bolada-gold">{bettor.username}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Ganhos:</span>
                        <span className="font-bold text-bolada-green">{bettor.winnings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Apostas:</span>
                        <span className="font-medium">{bettor.totalBets}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marbles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {topMarbles.map((marble, index) => (
                <Card key={marble.id} className="bg-bolada-black-light border border-bolada-gold/30 overflow-hidden hover:border-bolada-gold/50 transition-all duration-300">
                  <CardHeader className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${marble.color} flex items-center justify-center border-2 border-bolada-gold`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-sm text-bolada-gold">{marble.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Vitórias:</span>
                        <span className="font-bold text-bolada-gold">{marble.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taxa de Vitória:</span>
                        <span className="font-medium text-bolada-green">{marble.winRate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="winners">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
              {recentWinners.map((winner) => (
                <Card key={winner.id} className="bg-bolada-black-light border border-bolada-gold/30 overflow-hidden hover:border-bolada-gold/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center justify-between p-4">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <img 
                        src={winner.avatar} 
                        alt={winner.username} 
                        className="rounded-full w-12 h-12 object-cover border-2 border-bolada-gold"
                      />
                      <div>
                        <h4 className="text-bolada-gold font-medium">{winner.username}</h4>
                        <p className="text-sm text-gray-400">{winner.race}</p>
                      </div>
                    </div>
                    
                    <div className="flex md:space-x-6 space-x-3 items-center">
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Aposta</p>
                        <p className="font-medium">{winner.betAmount}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Ganhou</p>
                        <p className="font-bold text-bolada-green">{winner.amount}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Quando</p>
                        <p className="text-sm">{winner.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HighlightsSection;
