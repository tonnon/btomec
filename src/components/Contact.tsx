
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-btomec-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-btomec-700 bg-btomec-100 rounded-full mb-4">
            ENTRE EM CONTATO
          </span>
          <h2 className="section-title">
            Vamos Desenvolver o <br/> Seu Projeto?
          </h2>
          <p className="section-subtitle">
            Entre em contato com a BTOMEC para discutir seu projeto. Nossa equipe está pronta para desenvolver a solução ideal para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-fade-in-left">
            <div className="bg-btomec-50 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold text-btomec-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-btomec-100 p-2 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-btomec-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-btomec-800 mb-1">Endereço</h4>
                    <p className="text-btomec-600">
                      Av. Industrial, 1500<br/>
                      São Bernardo do Campo - SP<br/>
                      CEP 09080-500
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-btomec-100 p-2 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-btomec-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-btomec-800 mb-1">Telefone</h4>
                    <p className="text-btomec-600">
                      +55 (11) 4000-5000<br/>
                      +55 (11) 99000-5000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-btomec-100 p-2 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-btomec-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-btomec-800 mb-1">Email</h4>
                    <p className="text-btomec-600">
                      contato@btomec.com.br<br/>
                      comercial@btomec.com.br
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-btomec-800 mb-4">Horário de Atendimento</h4>
                <p className="text-btomec-600 mb-2">
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="text-btomec-600">
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in-right">
            <div className="bg-white border border-btomec-200 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-btomec-800 mb-6">
                Envie-nos uma Mensagem
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p>Agradecemos seu contato. Nossa equipe retornará em breve.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-btomec-800 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-btomec-200 focus:outline-none focus:ring-2 focus:ring-btomec-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-btomec-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-btomec-200 focus:outline-none focus:ring-2 focus:ring-btomec-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-btomec-800 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-btomec-200 focus:outline-none focus:ring-2 focus:ring-btomec-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-btomec-800 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-btomec-200 focus:outline-none focus:ring-2 focus:ring-btomec-500"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-btomec-800 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-btomec-200 focus:outline-none focus:ring-2 focus:ring-btomec-500"
                    placeholder="Descreva seu projeto ou dúvida..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar Mensagem <Send className="h-4 w-4 ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
