
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-btomec-950 text-btomec-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="mb-6">
              Especialistas em manufatura de moldes de alta precisão para as indústrias cosmética, farmacêutica, de higiene e alimentícia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover-underline-animation text-btomec-400 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Moldes para Cosméticos',
                'Moldes para Farmacêuticos',
                'Moldes para Higiene',
                'Moldes para Alimentos',
                'Consultoria Técnica',
                'Manutenção de Moldes'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#servicos" 
                    className="hover-underline-animation text-btomec-400 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <address className="not-italic">
              <p className="mb-4">
                Av. Industrial, 1500<br/>
                São Bernardo do Campo - SP<br/>
                CEP 09080-500
              </p>
              <p className="mb-4">
                <strong className="text-white">Telefone:</strong><br/>
                +55 (11) 4000-5000
              </p>
              <p>
                <strong className="text-white">Email:</strong><br/>
                contato@btomec.com.br
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-btomec-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} BTOMEC. Todos os direitos reservados.
            </div>
            <div className="text-sm md:text-right">
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300 mr-6">Política de Privacidade</a>
              <a href="#" className="text-btomec-400 hover:text-white transition-colors duration-300">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
