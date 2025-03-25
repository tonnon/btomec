
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-28 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-96 w-96 bg-btomec-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-btomec-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-btomec-700 bg-btomec-100 rounded-full mb-6">
                PRECISÃO EM CADA DETALHE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-btomec-900">
                Soluções de Alta Precisão para Moldagem Industrial
              </h1>
              <p className="text-lg md:text-xl text-btomec-700 mb-8 max-w-xl">
                Especialistas em manufatura de moldes de alta precisão para as indústrias cosmética, farmacêutica, de higiene e alimentícia.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contato" className="btn-primary flex items-center gap-2">
                  Fale Conosco <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicos" className="btn-outline">
                  Nossos Serviços
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-btomec-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="glass-panel p-2 rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Maquinário de precisão BTOMEC"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-semibold text-btomec-800">
                    Tecnologia de ponta para moldes de precisão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-btomec-800 mb-2">15+</h3>
            <p className="text-sm text-btomec-600">Anos de Experiência</p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-btomec-800 mb-2">300+</h3>
            <p className="text-sm text-btomec-600">Projetos Entregues</p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-btomec-800 mb-2">100%</h3>
            <p className="text-sm text-btomec-600">Satisfação do Cliente</p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-btomec-800 mb-2">50+</h3>
            <p className="text-sm text-btomec-600">Clientes Ativos</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
