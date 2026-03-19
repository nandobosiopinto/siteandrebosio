
import React from 'react';

const Footer: React.FC = () => {
    const WHATSAPP_LINK = "https://wa.me/5551996879727?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
    const INSTAGRAM_LINK = "https://www.instagram.com/andrebosiofisio";
    const EMAIL = "andrebosiopinto@gmail.com";

    return (
        <footer id="contato" className="bg-primary text-light py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
                <p className="mb-8 text-gray-300">Estou à disposição para tirar suas dúvidas e agendar sua consulta.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                    <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-accent font-semibold hover:text-light transition duration-300"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.225.651 4.315 1.731 6.086l.287.468-1.173 4.249 4.35-1.14z" />
                        </svg>
                        WhatsApp
                    </a>
                    
                    <a 
                        href={INSTAGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-accent font-semibold hover:text-light transition duration-300"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                    </a>

                    <a 
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-3 text-accent font-semibold hover:text-light transition duration-300"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        Email
                    </a>
                </div>
                <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} André Bósio - Fisioterapia e Osteopatia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
