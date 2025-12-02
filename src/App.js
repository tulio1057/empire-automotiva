import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle,
  Wrench,
  Gauge,
  Droplet,
  Wind,
  Settings,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Manutenção Preventiva",
      description:
        "Mantenha seu veículo sempre em perfeito estado com revisões programadas",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Diagnóstico Eletrônico",
      description:
        "Equipamentos de última geração para identificar problemas com precisão",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Troca de Óleo e Filtros",
      description: "Serviço rápido com produtos de qualidade premium",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Freios e Suspensão",
      description: "Segurança em primeiro lugar com peças originais",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Ar Condicionado",
      description: "Higienização e manutenção completa do sistema",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Injeção Eletrônica",
      description: "Especialistas em sistemas de injeção e performance",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      city: "Aracaju, SE",
      rating: 5,
      text: "Excelente atendimento! Resolveram o problema do meu carro rapidamente e com preço justo. Recomendo!",
      avatar: "CS",
    },
    {
      name: "Maria Santos",
      city: "Aracaju, SE",
      rating: 5,
      text: "Profissionais muito competentes. Sempre levo meu carro lá para manutenção. Confiança total!",
      avatar: "MS",
    },
    {
      name: "João Pedro",
      city: "Aracaju, SE",
      rating: 5,
      text: "Melhor oficina da região! Atendimento personalizado e serviço de qualidade. Parabéns!",
      avatar: "JP",
    },
  ];

  const faqs = [
    {
      question: "Qual o horário de funcionamento?",
      answer:
        "Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h.",
    },
    {
      question: "Vocês trabalham com todas as marcas?",
      answer:
        "Sim! Atendemos todas as marcas e modelos de veículos, nacionais e importados.",
    },
    {
      question: "Oferecem garantia nos serviços?",
      answer:
        "Todos os nossos serviços têm garantia de 90 dias. Peças originais possuem garantia do fabricante.",
    },
    {
      question: "Como agendar um horário?",
      answer:
        "Você pode agendar pelo WhatsApp, telefone ou diretamente pelo formulário do site.",
    },
    {
      question: "Aceitam cartão de crédito?",
      answer:
        "Sim! Aceitamos todas as formas de pagamento: dinheiro, PIX, débito e crédito parcelado.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado! Em breve entraremos em contato.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="navbar glass">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo" aria-hidden="true">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <div className="brand-text">
              <h1 className="title">Empire</h1>
              <small className="subtitle">Soluções Automotivas</small>
            </div>
          </div>

          <nav
            className={`nav-links ${isMenuOpen ? "open" : ""}`}
            role="navigation"
            aria-label="Main"
          >
            {["home", "servicos", "sobre", "contato"].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item ? "active" : ""
                }`}
                href={`#${item}`}
              >
                {item === "servicos" ? "Serviços" : item}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a
              href="https://wa.me/5579999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Agendar
            </a>
            <button
              className="nav-toggle md:hidden"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center space-x-4 mb-6 flex-wrap">
              <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold flex items-center mb-2">
                <Award className="w-4 h-4 mr-2" />
                +15 Anos de Experiência
              </span>
              <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold flex items-center mb-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Garantia de 90 Dias
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cuidando do Seu Veículo com
              <span className="text-orange-500"> Excelência</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Soluções automotivas completas com tecnologia de ponta e
              profissionais especializados
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open("https://wa.me/5579999999999", "_blank")
                }
                className="btn btn-primary btn-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="btn btn-secondary btn-lg"
              >
                Conheça os Serviços
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-orange-500">5.000+</p>
                <p className="text-gray-300">Clientes Atendidos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">15+</p>
                <p className="text-gray-300">Anos no Mercado</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">98%</p>
                <p className="text-gray-300">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sobre a Empire Soluções Automotivas
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white h-full flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-32 h-32 mx-auto mb-4 opacity-90" />
                    <p className="text-2xl font-semibold">
                      Confiança e Qualidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <strong>Empire Soluções Automotivas</strong> é referência em
                  manutenção e reparos automotivos em Aracaju. Com mais de 15
                  anos de experiência, nossa missão é oferecer serviços de
                  excelência, utilizando tecnologia de ponta e profissionais
                  altamente qualificados.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Profissionais Certificados
                      </p>
                      <p className="text-sm text-gray-600">
                        Equipe especializada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Equipamentos Modernos
                      </p>
                      <p className="text-sm text-gray-600">
                        Tecnologia de ponta
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Peças Originais
                      </p>
                      <p className="text-sm text-gray-600">
                        Qualidade garantida
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Atendimento Personalizado
                      </p>
                      <p className="text-sm text-gray-600">Foco no cliente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para manter seu veículo em perfeito estado
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${service.color} p-6 text-white`}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-orange-500 font-semibold flex items-center group-hover:text-orange-600">
                    Saiba mais
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-300">
                    {testimonials[currentTestimonial].city}
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentTestimonial
                        ? "bg-orange-500"
                        : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-300">
              Estamos prontos para atender você
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-gray-300">
                    Rua Exemplo, 123 - Centro
                    <br />
                    Aracaju, SE - CEP 49000-000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-gray-300">(79) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                  <p className="text-gray-300">
                    contato@empiresolucoesautomotivas.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horário</h3>
                  <p className="text-gray-300">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/empiresolucoesautomotivas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icone-rede-social instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="/" className="icone-rede-social facebook">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Solicite seu Orçamento
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Seu Telefone"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Descreva o serviço desejado"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                >
                  Enviar Solicitação
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-orange-500" />
            <span className="text-white font-bold text-xl">
              Empire Soluções Automotivas
            </span>
          </div>
          <p className="mb-4">
            © 2024 Empire Soluções Automotivas. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <button className="btn btn-primary btn-lg">
              Política de Privacidade
            </button>
            <button className="btn btn-primary btn-lg">Termos de Uso</button>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/5579999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
