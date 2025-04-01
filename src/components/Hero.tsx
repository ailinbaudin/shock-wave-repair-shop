
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Images for carousel
const carouselImages = [
  "/suspensión.jpg",
  "/suspensión.jpg",
  "/suspensión.jpg",

];

const Hero = () => {
  return (
    <section id="inicio" className="relative h-[80vh] min-h-[500px]">
      <Carousel className="w-full h-full hero-carousel">
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-full w-full relative">
                {}
                <div className="absolute inset-0 bg-brand-black/70 z-10"></div>
                
                {}
                <img 
                  src={image} 
                  alt={`Suspensiones y reparaciones imagen ${index + 1}`}
                  className="carousel-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "../";
                  }}
                />
                
                {/* Text overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="text-brand-orange">Expertos</span> en Suspensiones
                  </h1>
                  <p className="text-xl md:text-2xl max-w-2xl mb-8">
                    Reparación y mantenimiento de amortiguadores para todo tipo de vehículos
                  </p>
                  <a
                    href="https://wa.me/5491144197301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-30" />
        <CarouselNext className="absolute right-4 z-30" />
      </Carousel>
    </section>
  );
};

export default Hero;
