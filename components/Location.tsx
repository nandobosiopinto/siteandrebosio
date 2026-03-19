
import React from 'react';

const Location: React.FC = () => {
    const address = "Av. Taquara, 438/504 - Petrópolis, Porto Alegre - RS, 90460-210";
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Taquara,+438/504+-+Petr%C3%B3polis,+Porto+Alegre+-+RS";

    const officeImages = [
        { src: 'https://photos.fife.usercontent.google.com/pw/AP1GczO2kKgPYfse2hTCWROEqKXylg1D-1xkAPkpqIpymwdZ-L8cZT8tN2nTOA=w523-h928-s-no-gm?authuser=0', alt: 'Área de atendimento e anamnese' },
        { src: 'https://photos.fife.usercontent.google.com/pw/AP1GczMt2k_0xpHjZXgm15cueZkueUV-p-ZM2FV8dFtk_BYV0nUiNmrMpi7Vhw=w1649-h928-s-no-gm?authuser=0', alt: 'Sala de tratamentos com maca e área de exercícios' },
        { src: 'https://photos.fife.usercontent.google.com/pw/AP1GczNtzpfOzB6VDONz7bBXKwqY0e7t_ddenn45xhZoUn2jHWHtfLb66mpSeg=w523-h928-s-no-gm?authuser=0', alt: 'Ambiente iluminado e profissional' },
        { src: 'https://photos.fife.usercontent.google.com/pw/AP1GczM3o-3E8N7nJXC9hb4LL7d3gwX3KHdupHZz7x2lor4rsT3wHRkz-MNa6Q=w523-h928-s-no-gm?authuser=0', alt: 'Conforto para o paciente' },
    ];

    return (
        <section id="local" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary">Local de Atendimento</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Um espaço moderno e acolhedor, planejado para oferecer o melhor tratamento em fisioterapia e osteopatia.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Coluna de Informações e Fotos */}
                    <div className="space-y-8">
                        <div className="bg-light p-8 rounded-lg shadow-lg">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-primary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">Endereço</h3>
                                    <p className="text-gray-700">{address}</p>
                                    <a 
                                        href={googleMapsUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-primary font-bold hover:underline mt-2 inline-block"
                                    >
                                        Ver no Google Maps
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                O consultório está localizado no bairro Petrópolis, com ambiente climatizado e infraestrutura completa para sua reabilitação.
                            </p>
                        </div>

                        {/* Galeria de Fotos em Grid Otimizada */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {officeImages.map((img, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-video bg-gray-200">
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coluna do Mapa */}
                    <div className="w-full h-[500px] lg:h-full min-h-[400px] rounded-lg shadow-lg overflow-hidden relative bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2185566068886!2d-51.18956422361623!3d-30.030612674932064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977936a0d244f%3A0x7d6b38f83c483a30!2sAv.%20Taquara%2C%20438%20-%20Petr%C3%B3polis%2C%20Porto%20Alegre%20-%20RS%2C%2090460-210!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa do Consultório André Bósio"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
