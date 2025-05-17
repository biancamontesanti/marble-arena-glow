
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-bolada-black-light border-bolada-gold/30">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-bolada-gold">Login to Bolada8</CardTitle>
            <CardDescription className="text-center">
              Insira seu email e senha para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                <Link to="/forgot-password" className="text-xs text-bolada-green hover:underline">
                  Esqueceu sua senha?
                </Link>       
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-bolada-black border-bolada-gold/20 focus:border-bolada-gold"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="gold-button w-full">Login</Button>
            <div className="text-center text-sm">
              <span className="text-gray-400">Não tem uma conta? </span>
              <Link to="/signup" className="text-bolada-green hover:underline">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
