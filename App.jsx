import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight, Star, ExternalLink, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulação de envio
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const destinations = [
    {
      id: 1,
      title: "Machu Picchu Private",
      location: "Peru",
      description: "Uma jornada exclusiva pelas ruínas sagradas com acesso antes do amanhecer e guia historiador particular.",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1000",
      tag: "História"
    },
    {
      id: 2,
      title: "Safari no Serengeti",
      location: "Tanzânia",
      description: "Hospedagem em lodges de luxo e safáris privativos para observar a Grande Migração de perto.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000",
      tag: "Aventura"
    },
    {
      id: 3,
      title: "Aurora Boreal em Iglu de Vidro",
      location: "Finlândia",
      description: "Acomodação premium sob as estrelas com serviço de concierge 24h e gastronomia nórdica.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000",
      tag: "Romance"
    },
    {
      id: 4,
      title: "Ilhas Maldivas Exclusive",
      location: "Maldivas",
      description: "Bangalô sobre as águas com piscina privativa e acesso direto ao recife de corais.",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",
      tag: "Relaxamento"
    },
     {
      id: 5,
      title: "Kyoto Cultural",
      location: "Japão",
      description: "Cerimônia do chá privada com Gueixa e acesso exclusivo a templos fechados ao público geral.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
      tag: "Cultura"
    },
    {
      id: 6,
      title: "Vinhos da Toscana",
      location: "Itália",
      description: "Hospedagem em castelo medieval e degustação de vinhos super toscanos com sommelier premiado.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000",
      tag: "Gastronomia"
    }
  ];

  return (
    <div className="font-sans text-slate-200 bg-slate-900 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-serif text-white tracking-widest uppercase">Lumina</span>
              <div className="h-2 w-2 rounded-full bg-amber-500 mt-1"></div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">Início</a>
              <a href="#destinos" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">Destinos</a>
              <a href="#sobre" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">A Marca</a>
              <a href="#contato" className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm uppercase tracking-widest transition-all duration-300">
                Fale Conosco
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-amber-500 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10">
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-white hover:text-amber-500">Início</a>
              <a href="#destinos" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-white hover:text-amber-500">Destinos</a>
              <a href="#sobre" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-white hover:text-amber-500">A Marca</a>
              <a href="#contato" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-amber-500">Fale Conosco</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Travel Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <p className="text-amber-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">Experiências Sob Medida</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Descubra o mundo <br/> em sua forma mais <span className="italic text-amber-500">sublime</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Curadoria de viagens exclusivas para quem busca ir além do turismo convencional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#destinos" className="px-8 py-4 bg-white text-slate-900 uppercase tracking-widest hover:bg-slate-200 transition-colors font-medium">
              Explorar Destinos
            </a>
            <a href="#contato" className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white uppercase tracking-widest hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2">
              <Phone size={18} /> Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Features / Value Prop */}
      <section id="sobre" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4 p-6 border border-white/5 hover:border-amber-500/30 transition-colors duration-300 bg-white/5 rounded-sm">
              <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-full text-amber-500 mx-auto md:mx-0">
                <Star size={24} />
              </div>
              <h3 className="text-xl text-white font-serif">Curadoria Premium</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Selecionamos apenas os hotéis e experiências mais refinados do mundo, garantindo conforto absoluto.
              </p>
            </div>
            <div className="space-y-4 p-6 border border-white/5 hover:border-amber-500/30 transition-colors duration-300 bg-white/5 rounded-sm">
              <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-full text-amber-500 mx-auto md:mx-0">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl text-white font-serif">Acesso Exclusivo</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Entradas privadas em monumentos, jantares em locais secretos e experiências fora do guia turístico.
              </p>
            </div>
            <div className="space-y-4 p-6 border border-white/5 hover:border-amber-500/30 transition-colors duration-300 bg-white/5 rounded-sm">
              <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-full text-amber-500 mx-auto md:mx-0">
                <Phone size={24} />
              </div>
              <h3 className="text-xl text-white font-serif">Concierge 24/7</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Suporte integral antes, durante e depois da sua viagem através do nosso canal direto no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinos" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-amber-500 text-sm tracking-widest uppercase block mb-2">Coleção 2024</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Destinos em Destaque</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors mt-4 md:mt-0 group">
              Ver todo o catálogo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-xs uppercase tracking-wider text-white border border-white/10">
                      {dest.tag}
                    </span>
                  </div>
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">{dest.location}</p>
                     <h3 className="text-2xl font-serif text-white mb-2">{dest.title}</h3>
                     <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                        <p className="text-slate-300 text-sm font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                          {dest.description}
                        </p>
                        <span className="text-white text-sm uppercase tracking-wider border-b border-amber-500 pb-1 inline-flex items-center gap-2">
                          Consultar disponibilidade <ArrowRight size={14} />
                        </span>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              Ver todo o catálogo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Divider */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542259671-805178303f56?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountains" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            "Não vendemos apenas viagens. <br/> Criamos memórias que duram para sempre."
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-amber-500 text-sm tracking-widest uppercase mb-2 block">Entre em contato</span>
                <h2 className="text-4xl font-serif text-white mb-6">Planeje sua próxima fuga</h2>
                <p className="text-slate-400 font-light leading-relaxed mb-8">
                  Nossos consultores especialistas estão prontos para desenhar o roteiro perfeito para você. Preencha o formulário ou chame diretamente no WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 p-4 border border-white/10 hover:border-amber-500/50 hover:bg-white/5 transition-all group">
                  <div className="w-12 h-12 bg-green-900/30 text-green-500 flex items-center justify-center rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircleIcon />
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp Oficial</p>
                    <p className="text-slate-400 text-sm">Resposta rápida em até 30min</p>
                  </div>
                  <ExternalLink size={18} className="ml-auto text-slate-500 group-hover:text-white" />
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-amber-500">
                    <Mail size={20} />
                  </div>
                  <span className="text-slate-300">concierge@luminaexperiencias.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-amber-500">
                    <MapPin size={20} />
                  </div>
                  <span className="text-slate-300">Av. Paulista, 1000 - São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-800/30 p-8 md:p-10 border border-white/5 rounded-sm">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <Star size={32} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Solicitação Recebida</h3>
                  <p className="text-slate-400">Um de nossos consultores entrará em contato em breve.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-amber-500 hover:text-amber-400 underline">Enviar nova mensagem</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Nome</label>
                      <input type="text" required className="w-full bg-slate-900 border border-white/10 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Telefone</label>
                      <input type="tel" required className="w-full bg-slate-900 border border-white/10 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">E-mail</label>
                    <input type="email" required className="w-full bg-slate-900 border border-white/10 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="seu@email.com" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Interesse</label>
                    <select className="w-full bg-slate-900 border border-white/10 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                      <option>Selecione um destino ou estilo</option>
                      <option>Machu Picchu</option>
                      <option>Safáris</option>
                      <option>Europa Exclusiva</option>
                      <option>Maldivas e Ilhas</option>
                      <option>Outro (Personalizado)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Detalhes (Opcional)</label>
                    <textarea rows="4" className="w-full bg-slate-900 border border-white/10 p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Conte-nos sobre suas preferências de viagem..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-amber-600 text-white font-medium uppercase tracking-widest py-4 hover:bg-amber-700 transition-all active:scale-[0.99]"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Solicitar Orçamento'}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Seus dados estão protegidos. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif text-white tracking-widest uppercase block mb-6">Lumina</span>
              <p className="text-sm font-light">
                Redefinindo o turismo de luxo através de experiências autênticas e atendimento impecável.
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6">Explorar</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Destinos</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Experiências</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Lua de Mel</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Jatos Privados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6">Institucional</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all rounded-full"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all rounded-full"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all rounded-full"><Twitter size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
            <p>&copy; 2024 Lumina Experiências. Todos os direitos reservados.</p>
            <p>Design Premium para Turismo</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Simple Icon component for WhatsApp since Lucide might not have the brand icon in this version context
const MessageCircleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default App;

