
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#sobre', label: 'Sobre Mim' },
    { href: '#servicos', label: 'Tratamentos' },
    { href: '#local', label: 'Localização' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#faq', label: 'Dúvidas' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="bg-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="input_file_5.png" 
            alt="Logo André Bósio" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
             <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary font-medium transition duration-300">{link.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-light border-t border-gray-100">
          <nav className="px-6 pt-2 pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
             <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-primary transition duration-300 py-2 border-b border-gray-50 last:border-0">{link.label}</a>
          ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
