
import React from 'react';
import { Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-brand-orange" />
          <span className="text-xl font-bold">Suspensiones y Reparaciones</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-brand-orange transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-brand-orange transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-brand-orange transition-colors">Contacto</a>
        </div>

        <a 
          href="https://wa.me/5491144197301" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-orange text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300"
        >
          Contactar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
