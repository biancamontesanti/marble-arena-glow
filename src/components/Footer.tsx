
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bolada-black-light">
      {/* Main Footer Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-bolada-gold text-2xl font-bold animate-glow">
                Bolada<span className="text-[#12512c]">8</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              O destino definitivo para apostas em corridas de bolinhas de gude. Experimente a emoção das corridas ao vivo e ganhe muito com a Bolada8.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-bolada-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-bolada-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-bolada-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-bolada-gold transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/live" className="text-gray-400 hover:text-bolada-gold transition-colors">Ao Vivo</Link>
              </li>
              <li>
                <Link to="/ranking" className="text-gray-400 hover:text-bolada-gold transition-colors">Ranking</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-bolada-gold transition-colors">Regras</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-bolada-gold transition-colors">Suporte</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-bolada-gold transition-colors">Termos de Serviço</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-bolada-gold transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-bolada-gold transition-colors">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/responsible-gaming" className="text-gray-400 hover:text-bolada-gold transition-colors">Jogo Responsável</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contate-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="h-5 w-5 text-[#12512c] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9 14a5 5 0 0 0 6 0" />
                  </svg>
                </div>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-bolada-gold transition-colors">+55 (21) 9876-5432</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bolada-gold mr-3" />
                <a href="mailto:support@bolada8.com" className="text-gray-400 hover:text-bolada-gold transition-colors">suporte@bolada8.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="neon-button inline-flex justify-center">
                Suporte Chat ao Vivo
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Bolada8. Todos os direitos reservados.
            </div>
            <div>
              <div className="bg-[#222] py-2 px-4 rounded-lg border border-bolada-gold/20">
                <p className="text-yellow-500 text-xs md:text-sm font-medium">
                  Jogue com responsabilidade. Apenas para maiores de 18 anos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
