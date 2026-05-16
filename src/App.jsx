import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="/logo 1.png" 
              alt="RN Logo" 
              className="w-10 h-10 md:w-14 md:h-14 rounded-lg"
            />
            <span className="font-bebas text-xl md:text-3xl tracking-wider">RN CONSULTORIA <span className="text-orange">ESPORTIVA</span></span>
          </div>
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className={`fixed md:relative top-16 md:top-0 left-0 right-0 md:bg-transparent glass md:glass-none p-4 md:p-0 ${menuOpen ? 'block' : 'hidden'} md:flex gap-6 md:gap-8 text-sm font-medium`}>
            <a href="#sobre" className="block md:inline py-2 hover:text-orange transition-colors" onClick={() => setMenuOpen(false)}>SOBRE</a>
            <a href="#produtos" className="block md:inline py-2 hover:text-orange transition-colors" onClick={() => setMenuOpen(false)}>PRODUTOS</a>
            <a href="#diferenciais" className="block md:inline py-2 hover:text-orange transition-colors" onClick={() => setMenuOpen(false)}>DIFERENCIAIS</a>
            <a href="#contato" className="block md:inline py-2 hover:text-orange transition-colors" onClick={() => setMenuOpen(false)}>CONTATO</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
            alt="Academia moderna" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <img src="/logo 1.png" alt="RN Consultoria" className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl image-glow" />
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto mt-8">
            Acompanhamento individualizado completo com ajustes semanais, avaliação contínua e suporte direto via WhatsApp.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sobre a Consultoria */}
      <section id="sobre" className="py-24 px-8 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src="/foto personal.jpeg" 
                alt="Personal trainer" 
                className="rounded-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bebas text-5xl mb-6">
                METODOLOGIA <span className="text-orange">PERSONALIZADA</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Na RN Consultoria Esportiva, não acreditamos em programas genéricos. Cada cliente é único, com objetivos, biotipo e disponibilidade diferentes. Nossa metodologia combina ciência do exercício com experiência prática para criar um caminho de evolução sustentável.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Periodização, progressão de carga e acompanhamento individualizado são os pilares que garantem resultados reais e duradouros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos - Cards Modernos */}
      <section id="produtos" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bebas text-6xl text-center mb-16">
            NOSSOS <span className="text-orange">PRODUTOS</span>
          </h2>

          {/* Card Destaque - Consultoria Online */}
          <div className="mb-16">
            <div className="glass card-hover rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-orange/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange text-black font-bold px-4 py-2 rounded-bl-xl">
                DESTAQUE
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-bebas text-4xl mb-4">CONSULTORIA <span className="text-orange">ONLINE</span></h3>
                  <p className="text-gray-300 mb-6">
                    Acompanhamento individualizado completo com adjustments semanais, avaliação contínua e suporte direto via WhatsApp.
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Planilhas periodizadas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Vídeos de exercício
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Suporte 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Ajuste mensal gratuito
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 line-through text-lg">R$ 297/mês</p>
                  <p className="font-bebas text-6xl text-orange">R$ 197</p>
                  <p className="text-gray-400">por mês</p>
                  <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl mt-6">
                    Quero Agora
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Planilhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hipertrofia Masculino */}
            <div className="glass card-hover rounded-xl p-6">
              <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="font-bebas text-2xl text-center mb-2">HIERTROFIA</h4>
              <p className="text-orange text-center text-sm mb-4">MASCULINO</p>
              <p className="text-gray-400 text-sm text-center mb-4">Treinos focados em crescimento muscular com volume e intensidade ideais.</p>
              <div className="text-center border-t border-gray-700 pt-4">
                <p className="font-bebas text-3xl text-orange">R$ 97</p>
                <button className="text-orange text-sm font-medium mt-2 hover:underline">Comprar →</button>
              </div>
            </div>

            {/* Hipertrofia Feminino */}
            <div className="glass card-hover rounded-xl p-6">
              <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bebas text-2xl text-center mb-2">HIERTROFIA</h4>
              <p className="text-orange text-center text-sm mb-4">FEMININO</p>
              <p className="text-gray-400 text-sm text-center mb-4">Programa pensado para o corpo feminino com exercícios adequados.</p>
              <div className="text-center border-t border-gray-700 pt-4">
                <p className="font-bebas text-3xl text-orange">R$ 97</p>
                <button className="text-orange text-sm font-medium mt-2 hover:underline">Comprar →</button>
              </div>
            </div>

            {/* Emagrecimento Masculino */}
            <div className="glass card-hover rounded-xl p-6">
              <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h4 className="font-bebas text-2xl text-center mb-2">EMAGRECIMENTO</h4>
              <p className="text-orange text-center text-sm mb-4">MASCULINO</p>
              <p className="text-gray-400 text-sm text-center mb-4">Queima de gordura com treino inteligente e metabolismo acelerado.</p>
              <div className="text-center border-t border-gray-700 pt-4">
                <p className="font-bebas text-3xl text-orange">R$ 97</p>
                <button className="text-orange text-sm font-medium mt-2 hover:underline">Comprar →</button>
              </div>
            </div>

            {/* Emagrecimento Feminino */}
            <div className="glass card-hover rounded-xl p-6">
              <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bebas text-2xl text-center mb-2">EMAGRECIMENTO</h4>
              <p className="text-orange text-center text-sm mb-4">FEMININO</p>
              <p className="text-gray-400 text-sm text-center mb-4">Sequência de exercícios para definir e queimar gordura localizada.</p>
              <div className="text-center border-t border-gray-700 pt-4">
                <p className="font-bebas text-3xl text-orange">R$ 97</p>
                <button className="text-orange text-sm font-medium mt-2 hover:underline">Comprar →</button>
              </div>
            </div>
          </div>

          {/* Série Técnica - Divisões */}
          <div className="mt-12">
            <h3 className="font-bebas text-4xl text-center mb-8">
              SÉRIE <span className="text-orange">TÉCNICA</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* PPL */}
              <div className="glass card-hover rounded-xl p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-orange/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bebas text-3xl mb-1">PPL</h4>
                  <p className="text-orange text-sm mb-2">Push • Pull • Legs</p>
                  <p className="text-gray-400 text-sm">Divisão clássica para otimizar cada minuto na academia.</p>
                  <p className="font-bebas text-3xl text-orange mt-4">R$ 147</p>
                </div>
              </div>

              {/* Upper/Lower */}
              <div className="glass card-hover rounded-xl p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-orange/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bebas text-3xl mb-1">UPPER/LOWER</h4>
                  <p className="text-orange text-sm mb-2">Superior • Inferior</p>
                  <p className="text-gray-400 text-sm">Divisão equilibrada para desenvolvimento completo.</p>
                  <p className="font-bebas text-3xl text-orange mt-4">R$ 147</p>
                </div>
              </div>
            </div>
          </div>

          {/* Série Platinum - Periodização 6 meses */}
          <div className="mt-12">
            <h3 className="font-bebas text-4xl text-center mb-8">
              SÉRIE <span className="text-orange">PLATINUM</span>
            </h3>
            <div className="glass card-hover rounded-2xl p-8 max-w-4xl mx-auto border-2 border-orange">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="font-bebas text-4xl mb-4">PERIODIZAÇÃO <span className="text-orange">COMPLETA</span></h4>
                  <p className="text-gray-300 mb-4">O mapa definitivo para sua evolução. 6 meses de treinamento estruturado com progressão garantida.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> 6 planilhas mensais
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Vídeos técnicos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Suporte no WhatsApp
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span>gilize seu potencial
                    </li>
                  </ul>
                </div>
                <div className="text-center shrink-0">
                  <p className="text-gray-500 line-through text-xl">R$ 597</p>
                  <p className="font-bebas text-5xl text-orange">R$ 397</p>
                  <p className="text-gray-400 mb-4">pagamento único</p>
                  <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl">
                    Garantir Minha Vaga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-4">
            RESULTADOS REAIS DA <span className="text-orange">RN CONSULTORIA ESPORTIVA</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Transformações reais de nossos clientes que alcançaram seus objetivos com acompanhamento personalizado
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/foto trabalho.jpeg" alt="Resultado 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalho (1).jpeg" alt="Resultado 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalho (2).jpeg" alt="Resultado 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalho (3).jpeg" alt="Resultado 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 px-8 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-6xl text-center mb-16">
            NOSSA <span className="text-orange">DIFERENÇA</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Suporte */}
            <div className="glass card-hover rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-bebas text-3xl mb-4">SUPORTE <span className="text-orange">DIRETO</span></h4>
              <p className="text-gray-400">
                Atendimento humanizado via WhatsApp. Tire suas dúvidas e receba orientações personalizadas sempre que precisar.
              </p>
            </div>

            {/* Técnica */}
            <div className="glass card-hover rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bebas text-3xl mb-4">TÉCNICA <span className="text-orange">APURADA</span></h4>
              <p className="text-gray-400">
                Cada exercício ensinado com detalhes. Vídeos explicativos e feedback constante para você executar perfeitamente.
              </p>
            </div>

            {/* Evolução */}
            <div className="glass card-hover rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-bebas text-3xl mb-4">EVOLUÇÃO <span className="text-orange">GARANTIDA</span></h4>
              <p className="text-gray-400">
                Progressão real de carga e período. Acompanhe sua evolução com métricas claras e resultados visíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-bebas text-6xl md:text-7xl mb-6">
            PRONTO PARA <span className="text-orange">MUDAR?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Comece hoje mesmo sua transformação com quem entende de resultados.
          </p>
          <button className="glow-button bg-orange text-white font-bold py-5 px-16 rounded-xl text-xl uppercase tracking-wider">
            Começar Minha Transformação
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 px-8 bg-[#111] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="/logo 1.png" 
                alt="RN Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <span className="font-bebas text-2xl tracking-wider">RN CONSULTA<span className="text-orange">ESPORTIVA</span></span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/roginemesiopersonaltrainer/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.865 5.482 3.865 8.875 0 4.067-3.035 7.662-7.502 7.652-1.235 0-2.397-.327-3.456-.935l-.525 2.496c-.461.11-.948.166-1.455.166-3.444 0-6.272-2.77-6.272-6.186 0-2.583 1.921-4.815 4.492-5.673 1.702-.577 3.636-1.04 5.459-1.04 1.532 0 2.972.394 4.206.939 1.319.593 2.443 1.418 3.307 2.493.132.165.153.36.107.552l-.534 2.397c-.092.412-.324.748-.607.967-.279.218-.622.348-.989.348-.961 0-1.744-.962-1.743-2.156 0-1.123 1.002-2.043 2.261-2.206.779-.1 1.516-.47 2.186-1.003-.949-2.834-2.685-4.865-5.116-4.865-2.87 0-5.186 1.98-5.186 4.41 0 .85.255 1.645.674 2.296l-.437 2.047c-.217.827-.698 1.532-1.352 1.965-.69.457-1.52.704-2.337.704h-.105c-1.897 0-3.434-.938-4.404-2.396-1.019-1.522-1.437-3.38-1.179-5.193.232-1.635.876-3.092 1.816-4.136 1.024-1.133 2.437-1.792 3.906-2.006 1.557-.227 3.109-.103 4.534.402.948.34 1.779.797 2.447 1.338.7.57 1.264 1.223 1.66 1.93.406.726.629 1.53.629 2.395 0 2.096-1.706 3.795-3.828 3.795h-.105c-1.217 0-2.348-.493-3.212-1.312l-2.012.973c.68 2.041 2.493 3.534 4.657 3.534 2.443 0 4.456-1.994 4.456-4.456 0-.928-.265-1.792-.704-2.514l.98-1.13c.357.463.772.878 1.231 1.222-.875.582-1.456 1.475-1.554 2.549h-.103c-.604 0-1.163-.229-1.584-.638-.43-.418-.637-.973-.567-1.525.108-.858.538-1.62 1.163-2.078-.788-.217-1.563-.334-2.369-.334h-.105c-2.604 0-4.717 2.113-4.717 4.717 0 .873.225 1.689.612 2.392l-.432 2.048c-.085.404-.27.773-.53 1.087-.263.319-.6.57-.986.735l-.018.002z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 RN Consultoria Esportiva. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido Por VNI Vender+
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App