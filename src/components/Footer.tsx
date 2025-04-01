
import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and description */}
          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Wrench className="h-8 w-8 text-brand-orange" />
              <span className="text-xl font-bold">Suspensiones y Reparaciones</span>
            </div>
            <p className="text-gray-400">
              Especialistas en reparación y mantenimiento de sistemas de suspensión para todo tipo de vehículos.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-brand-orange transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-orange transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-brand-orange transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Contacto</h3>
            <p className="mb-2">Francisco Álvarez, Burzaco</p>
            <p className="mb-2">
              <a 
                href="https://wa.me/5491144197301"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                +54 9 11 4419-7301
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Suspensiones y Reparaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
