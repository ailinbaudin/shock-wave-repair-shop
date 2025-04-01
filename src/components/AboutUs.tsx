
import React from 'react';
import { Wrench, Car } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-brand-orange">Nosotros</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image section */}
          <div className="w-full md:w-1/2 h-80 md:h-96 relative rounded-lg overflow-hidden">
            <img 
              src="/workshop.jpg" 
              alt="Taller de suspensiones" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7";
              }}
            />
          </div>
          
          {/* Text section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Experiencia y Calidad</h3>
            <p className="text-gray-700 mb-6">
              Somos un taller especializado en la reparación y mantenimiento de sistemas de suspensión para todo tipo de vehículos. Con años de experiencia en el sector, ofrecemos un servicio profesional y de calidad.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-brand-orange p-2 rounded-full">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Reparaciones Profesionales</h4>
                  <p className="text-gray-600">Utilizamos tecnología avanzada y piezas de alta calidad para garantizar reparaciones duraderas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-orange p-2 rounded-full">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Todo Tipo de Vehículos</h4>
                  <p className="text-gray-600">Trabajamos con automóviles, camionetas, vehículos comerciales y más.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
