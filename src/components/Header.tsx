
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BellRing } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bolada-black shadow-lg backdrop-blur-sm bg-opacity-90' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-bolada-gold text-3xl font-extrabold animate-glow">
              Bolada<span className="text-bolada-green">8</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link nav-link-active">Home</Link>
            <Link to="/live" className="nav-link">Live</Link>
            <Link to="/ranking" className="nav-link">Ranking</Link>
            <Link to="/rules" className="nav-link">Rules</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="neon-button flex items-center">
              <BellRing className="w-4 h-4 mr-2" />
              <span>Notifications</span>
            </Button>
            <Link to="/login">
              <Button variant="outline" className="neon-button">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="gold-button">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white hover:text-bolada-gold focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bolada-black-light border-t border-bolada-gold/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="nav-link block py-2 px-3 nav-link-active" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/live" className="nav-link block py-2 px-3" onClick={toggleMobileMenu}>
              Live
            </Link>
            <Link to="/ranking" className="nav-link block py-2 px-3" onClick={toggleMobileMenu}>
              Ranking
            </Link>
            <Link to="/rules" className="nav-link block py-2 px-3" onClick={toggleMobileMenu}>
              Rules
            </Link>
            <Link to="/support" className="nav-link block py-2 px-3" onClick={toggleMobileMenu}>
              Support
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" onClick={toggleMobileMenu}>
                <Button variant="outline" className="w-full neon-button">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMobileMenu}>
                <Button className="w-full gold-button">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
