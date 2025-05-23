
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 flex items-center justify-center p-4 py-8">
        <Card className="w-full max-w-md bg-bolada-black-light border-bolada-gold/30">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-bolada-gold">Crie uma conta</CardTitle>
            <CardDescription className="text-center">
              Insira seus dados para criar sua conta no Bolada8
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-gray-300">Nome</label>
                <Input
                  id="first-name"
                  placeholder="John"
                  className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-gray-300">Sobrenome</label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
                />
              </div>
            </div>
            
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <Input
                id="email"
                placeholder="youremail@example.com"
                type="email"
                className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-300">Username</label>
              <Input
                id="username"
                placeholder="Choose a unique username"
                className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">Senha</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium text-gray-300">Confirmar Senha</label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Eu concordo com os{" "}
                <Link to="/terms" className="text-bolada-green hover:underline">
                  Termos de Serviço
                </Link>
                {" "}e{" "}
                <Link to="/privacy" className="text-bolada-green hover:underline">
                  Política de Privacidade
                </Link>
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="gold-button w-full">Criar conta</Button>
            <div className="text-center text-sm">
              <span className="text-gray-400">Já tem uma conta? </span>
              <Link to="/login" className="text-bolada-green hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
