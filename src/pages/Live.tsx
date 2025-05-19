import React from 'react';
import Layout from '@/components/Layout';
import LiveStreamPlayer from '@/components/LiveStreamPlayer';

const Live = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen-content">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-bolada-gold mb-6">Corridas Ao Vivo</h1>
          
          <LiveStreamPlayer 
            streamUrl="https://api.judah.tv/rec/64824719313d5a05ecc320b5/4/index.m3u8"
            title="Grand Prix Bolada8 - Etapa Final"
            description="Acompanhe a corrida final da temporada com os melhores jogadores disputando o título."
            poster="/src/assets/race1.webp"
          />
        </div>
        
        <div className="w-full max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-bolada-gold mb-4">Próximas Corridas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Upcoming race cards can be added here */}
            <div className="race-card p-4">
              <div className="text-bolada-green font-semibold mb-2">Começa em 2h 30min</div>
              <h3 className="text-lg font-bold">Circuito Esmeralda</h3>
              <p className="text-sm text-gray-400">16 jogadores confirmados</p>
            </div>
            
            <div className="race-card p-4">
              <div className="text-bolada-green font-semibold mb-2">Começa em 4h 15min</div>
              <h3 className="text-lg font-bold">Arena de Cristal</h3>
              <p className="text-sm text-gray-400">12 jogadores confirmados</p>
            </div>
            
            <div className="race-card p-4">
              <div className="text-bolada-green font-semibold mb-2">Amanhã, 19:00</div>
              <h3 className="text-lg font-bold">Desafio do Vulcão</h3>
              <p className="text-sm text-gray-400">8 jogadores confirmados</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Live;
