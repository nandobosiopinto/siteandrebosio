
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src="https://photos.fife.usercontent.google.com/pw/AP1GczN08SrK55XS53WvSoVYGJdfDojjKZyO-w_EK054_Hxzu0hoNuHVQOlZHw=w928-h928-s-no-gm?authuser=0" 
                alt="André Bósio" 
                className="rounded-2xl shadow-2xl mx-auto w-full max-w-sm object-cover border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full -z-10 hidden md:block opacity-50"></div>
            </div>
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary mb-6">Quem Sou Eu</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Sou <strong>André Bósio</strong>, fisioterapeuta formado pela UFRGS e osteopata pelo IBO. Tenho paixão por ajudar pessoas a viverem com mais saúde e qualidade de vida. 
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Me dedico a entender a história e a origem das dores de cada paciente, tratando não apenas os sintomas, mas a causa do problema através de um olhar sistêmico e detalhado.
            </p>
            <h3 className="text-3xl font-bold text-primary mb-6">Minha Abordagem</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Acredito em uma abordagem de tratamento integrada e humanizada. Utilizo técnicas manuais da osteopatia e os recursos da fisioterapia para criar um plano de tratamento único e eficaz para você. Meu objetivo é restaurar o equilíbrio do seu corpo, aliviar suas dores e te ajudar a retomar suas atividades diárias com mais conforto e liberdade.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Fisioterapeuta (UFRGS)</span>
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Osteopata (IBO)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
