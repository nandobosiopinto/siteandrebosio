
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-primary focus:outline-none"
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Qual a diferença entre Fisioterapia e Osteopatia?",
      answer: "Embora ambas as áreas visem a saúde e o bem-estar, a Osteopatia foca no diagnóstico e tratamento de disfunções de mobilidade através de técnicas manuais, buscando a causa raiz do problema. A Fisioterapia utiliza um leque mais amplo de recursos, incluindo exercícios e equipamentos, para reabilitação e tratamento de lesões específicas."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "O número de sessões varia para cada pessoa e depende da complexidade da condição, do tempo da lesão e dos objetivos do tratamento. Após uma avaliação inicial detalhada, será proposto um plano de tratamento com uma estimativa da quantidade de sessões."
    },
    {
      question: "Preciso de um encaminhamento médico?",
      answer: "Não é necessário ter um encaminhamento médico para agendar uma consulta de fisioterapia ou osteopatia. Fisioterapeutas são profissionais de primeira intenção, capacitados para avaliar, diagnosticar e tratar disfunções do movimento."
    },
    {
      question: "O tratamento tem cobertura por plano de saúde?",
      answer: "Atualmente, os atendimentos são particulares, mas muitos planos de saúde oferecem a opção de reembolso de parte do valor da consulta. Verifique com seu plano as condições para reembolso de sessões de fisioterapia."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Dúvidas Frequentes</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Respostas para as perguntas mais comuns sobre os tratamentos.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
