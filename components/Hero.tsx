
import React from 'react';

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5551996879727?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section 
      id="inicio" 
      className="relative bg-primary text-light overflow-hidden"
    >
      {/* Elementos decorativos sutis no fundo para não deixar o sólido chapado demais */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-[0.03] -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="input_file_5.png" 
            alt="André Bósio - Fisioterapia e Osteopatia" 
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto drop-shadow-2xl"
          />
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 text-gray-200 leading-relaxed">
          Te ajudo a superar a dor, se movimentar melhor e viver em equilíbrio.
        </p>
        
        <div className="flex justify-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary font-bold py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition duration-300 text-lg shadow-xl inline-flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.225.651 4.315 1.731 6.086l.287.468-1.173 4.249 4.35-1.14z" />
            </svg>
            Agendar Consulta agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
