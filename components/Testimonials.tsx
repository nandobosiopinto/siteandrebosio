
import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating }) => (
  <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl flex flex-col h-full border-t-4 border-accent transform hover:-translate-y-1 transition duration-300">
    <div className="flex mb-4 text-accent">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="italic text-gray-600 mb-6 flex-grow leading-relaxed">
      "{text}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
        {name.charAt(0)}
      </div>
      <span className="font-bold text-primary">{name}</span>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const GOOGLE_REVIEWS_LINK = "https://www.google.com/search?q=andre+bosio+fisioterapia#reviews";

  const testimonials = [
    {
      name: "Lorrana M.",
      text: "Profissional muito atencioso e competente! Já levei queixa de constipação e ele resolveu com terapia manual. Me surpreendi com a eficácia das técnicas para problemas intestinais. Parabéns pelo trabalho e obrigada, André!",
      rating: 5,
    },
    {
      name: "Renan R.",
      text: "Excelente profissional! Extremamente atencioso, didático e interessado no paciente. Tratamento focado e muito objetivo, passa muita segurança. Certamente voltarei quando necessário. Recomendo muito.",
      rating: 5,
    },
    {
      name: "Paloma C.",
      text: "Profissional incrível! Consultei com o André em dois momentos e ele foi muito resolutivo com minhas dores. Ele tratou minha cervical que estava bastante tensionada com a movimentação reduzida do pescoço e meu desconforto muscular na coxa devido a um exercício na academia. Em ambos os casos, meu problema foi resolvido.",
      rating: 5,
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-primary text-light relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-accent mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h2 className="text-4xl font-bold mb-4">O que os pacientes falam</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            A satisfação e o bem-estar de quem atendo são o meu maior compromisso. Confira alguns depoimentos:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>

        <div className="text-center">
          <p className="mb-6 text-gray-300">Quer ver mais avaliações ou deixar a sua?</p>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-primary font-bold py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition duration-300 shadow-2xl group"
          >
            <span>Ver Avaliações no Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
