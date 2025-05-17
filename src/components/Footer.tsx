
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, WhatsApp } from 'lucide-react';

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
                Bolada<span className="text-bolada-green">8</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              The ultimate destination for marble racing and betting. Experience the thrill of live races and win big with Bolada8.
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
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-bolada-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/live" className="text-gray-400 hover:text-bolada-gold transition-colors">Live Races</Link>
              </li>
              <li>
                <Link to="/ranking" className="text-gray-400 hover:text-bolada-gold transition-colors">Rankings</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-bolada-gold transition-colors">Rules</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-bolada-gold transition-colors">Support</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-bolada-gold transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-bolada-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-bolada-gold transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/responsible-gaming" className="text-gray-400 hover:text-bolada-gold transition-colors">Responsible Gaming</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <WhatsApp className="h-5 w-5 text-bolada-green mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-bolada-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bolada-gold mr-3" />
                <a href="mailto:support@bolada8.com" className="text-gray-400 hover:text-bolada-gold transition-colors">support@bolada8.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="neon-button inline-flex justify-center">
                Live Chat Support
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
              &copy; {currentYear} Bolada8. All rights reserved.
            </div>
            <div>
              <div className="bg-[#222] py-2 px-4 rounded-lg border border-bolada-gold/20">
                <p className="text-yellow-500 text-xs md:text-sm font-medium">
                  Gamble responsibly. 18+ only. Play within your limits.
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
