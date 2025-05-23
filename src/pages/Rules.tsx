
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-bolada-gold mb-8">Regras</h1>
          <p className="text-gray-400">Regras serão exibidas aqui.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
