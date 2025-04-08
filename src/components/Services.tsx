
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronsRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Moldes para Cosméticos",
      description: "Desenvolvemos moldes de alta precisão para embalagens cosméticas, garantindo acabamento perfeito, funcionalidade e design exclusivo que destacam sua marca no mercado.",
      features: [
        "Moldes para frascos e potes",
        "Embalagens com design exclusivo",
        "Tampas e aplicadores",
        "Componentes de maquiagem"
      ],
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Moldes para Farmacêuticos",
      description: "Criamos moldes que atendem aos rigorosos padrões da indústria farmacêutica, com precisão microscópica e conformidade com normas sanitárias internacionais.",
      features: [
        "Moldes para embalagens de medicamentos",
        "Dispositivos médicos",
        "Sistemas de dosagem",
        "Componentes para equipamentos"
      ],
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Moldes para Higiene",
      description: "Oferecemos soluções completas para produtos de higiene pessoal, com foco em ergonomia, durabilidade e eficiência produtiva.",
      features: [
        "Moldes para embalagens de produtos de higiene",
        "Componentes para dispensers",
        "Sistemas de aplicação",
        "Encaixes e mecanismos"
      ],
      image: "https://images.unsplash.com/photo-1603990103103-baf3ada7af1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Moldes para Alimentos",
      description: "Desenvolvemos moldes para embalagens alimentícias que garantem segurança, preservação e praticidade, atendendo às mais exigentes normas do setor.",
      features: [
        "Moldes para embalagens de alimentos",
        "Sistemas de fechamento hermético",
        "Embalagens sustentáveis",
        "Utensílios e acessórios"
      ],
      image: "https://images.unsplash.com/photo-1655354439118-185a1566ba5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="servicos" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-btomec-700 bg-btomec-100 rounded-full mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="section-title">
            Soluções de Precisão <br/> Para Sua Indústria
          </h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em desenvolvimento e fabricação de moldes de alta precisão para diversos segmentos industriais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 animate-fade-in-left">
            <div className="space-y-1">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left p-5 rounded-lg transition-all duration-300 flex items-center justify-between",
                    activeService === index
                      ? "bg-btomec-700 text-white shadow-lg"
                      : "bg-btomec-50 text-btomec-800 hover:bg-btomec-100"
                  )}
                  onClick={() => setActiveService(index)}
                >
                  <span className="font-medium">{service.title}</span>
                  <ChevronsRight 
                    className={cn(
                      "h-5 w-5 transform transition-transform",
                      activeService === index ? "rotate-90" : "rotate-0"
                    )} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 animate-fade-in-right">
            <div className="bg-btomec-50 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-btomec-800 mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-btomec-700 mb-6">
                    {services[activeService].description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 bg-btomec-100 p-1 rounded-full mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-btomec-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-btomec-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contato" className="btn-primary inline-block">
                    Solicitar Proposta
                  </a>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
