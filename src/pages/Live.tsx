import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Live = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-bolada-gold mb-8">Corridas Ao Vivo</h1>
          <div className="mb-8 flex justify-center">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full max-w-3xl rounded-lg shadow-lg border-2 border-bolada-gold"
              poster="/src/assets/race1.webp"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <p className="text-gray-400">O conteúdo das corridas ao vivo será exibido aqui.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Live;
