
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden bg-btomec-50">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-btomec-700 bg-btomec-100 rounded-full mb-4">
            QUEM SOMOS
          </span>
          <h2 className="section-title">
            Excelência em Manufatura <br/> de Moldes de Precisão
          </h2>
          <p className="section-subtitle">
            Com uma trajetória de mais de 15 anos, a BTOMEC se consolidou como referência em soluções de alta precisão para a indústria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe técnica da BTOMEC" 
                  className="object-cover w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-btomec-900 to-transparent">
                <p className="text-white text-sm">Nossa instalação em São Paulo</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-btomec-800 mb-4">
              Tradição e Inovação em Cada Projeto
            </h3>
            <p className="text-btomec-700 mb-6">
              A BTOMEC nasceu da paixão por precisão e excelência técnica. Hoje, somos uma empresa líder no desenvolvimento e produção de moldes de alta precisão para as indústrias cosmética, farmacêutica, de higiene e alimentícia.
            </p>
            <p className="text-btomec-700 mb-6">
              Nossa equipe multidisciplinar combina décadas de experiência com as mais modernas tecnologias, garantindo produtos que atendem aos mais rigorosos padrões internacionais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Tecnologia de ponta",
                "Engenharia de precisão",
                "Compromisso com prazos",
                "Materiais certificados",
                "Equipe especializada",
                "Projetos personalizados",
                "Suporte contínuo",
                "Soluções sustentáveis"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2 bg-btomec-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-btomec-700" />
                  </div>
                  <span className="text-btomec-800">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#servicos" className="btn-primary inline-block">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default About;
