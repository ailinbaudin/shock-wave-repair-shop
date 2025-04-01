
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-gray-100 section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-brand-orange">Contáctanos</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Map */}
          <div className="w-full md:w-1/2 h-80 md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26237.03965874918!2d-58.41748542191413!3d-34.82679249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd38db4ce393f%3A0xdba7d5fbb7ad9bf2!2sBurzaco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1717023969994!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del taller"
            ></iframe>
          </div>

          {/* Contact info */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-600">Francisco Álvarez, Burzaco, Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono</h4>
                  <a 
                    href="https://wa.me/5491144197301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:underline"
                  >
                    +54 9 11 4419-7301
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5491144197301"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-orange text-white text-center py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
