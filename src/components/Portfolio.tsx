
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'cosmeticos', name: 'Cosméticos' },
    { id: 'farmaceuticos', name: 'Farmacêuticos' },
    { id: 'higiene', name: 'Higiene' },
    { id: 'alimentos', name: 'Alimentos' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Molde para Frasco de Perfume',
      category: 'cosmeticos',
      image: 'https://plus.unsplash.com/premium_photo-1667662655276-b3751fbbe107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Natura Cosméticos'
    },
    {
      id: 2,
      title: 'Sistema de Dosagem para Medicamentos',
      category: 'farmaceuticos',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Eurofarma'
    },
    {
      id: 3,
      title: 'Molde para Embalagem de Higiene Pessoal',
      category: 'higiene',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Johnson & Johnson'
    },
    {
      id: 4,
      title: 'Molde para Embalagem de Alimento',
      category: 'alimentos',
      image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Nestlé Brasil'
    },
    {
      id: 5,
      title: 'Molde para Frasco de Creme Facial',
      category: 'cosmeticos',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'O Boticário'
    },
    {
      id: 6,
      title: 'Embalagem para Produto Farmacêutico',
      category: 'farmaceuticos',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Medley Farmacêutica'
    },
  ];
  
  const filteredProjects = activeCategory === 'todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-btomec-900 text-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-btomec-300 bg-btomec-800 rounded-full mb-4">
            PORTFÓLIO
          </span>
          <h2 className="section-title text-white">
            Nossos Projetos <br/> de Excelência
          </h2>
          <p className="section-subtitle text-btomec-300 max-w-3xl mx-auto">
            Confira alguns dos projetos de moldes de alta precisão que desenvolvemos para nossos clientes em diversos segmentos industriais.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-btomec-700 text-white"
                  : "bg-btomec-800 text-btomec-300 hover:bg-btomec-700 hover:text-white"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "animate-fade-in overflow-hidden rounded-xl group card-hover",
                index === 0 && filteredProjects.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : "",
                filteredProjects.length % 3 === 2 && index < 2 ? "lg:col-span-3 lg:col-start-1" : ""
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-btomec-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-btomec-300 mb-2">{project.client}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div 
                    className="w-10 h-1 bg-btomec-500 transform transition-all duration-300 group-hover:w-20"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <a href="#contato" className="btn-primary bg-btomec-700 hover:bg-btomec-600">
            Solicite um Projeto Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
