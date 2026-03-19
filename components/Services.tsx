
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-light p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-accent text-primary rounded-full p-4">
                {icon}
            </div>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Tratamentos Especializados</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Conheça as abordagens que utilizo para cuidar da sua saúde e bem-estar.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            title="Osteopatia"
            description="Uma abordagem de diagnóstico e tratamento que utiliza técnicas manuais para identificar e corrigir disfunções de mobilidade nos tecidos do corpo (articulações, músculos, ligamentos, vísceras), restabelecendo o equilíbrio e a capacidade de auto-cura do organismo."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM10 8.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM10 12.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19z" clipRule="evenodd" /></svg>}
          />
          <ServiceCard
            title="Fisioterapia"
            description="A ciência da saúde que estuda, previne e trata as disfunções do movimento humano. Utiliza um conjunto de técnicas terapêuticas, como exercícios, recursos elétricos e térmicos, para reabilitar lesões, aliviar dores e melhorar a funcionalidade e qualidade de vida do paciente."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
