import './index.css'

function Planilhas() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <a href="/">
              <img src="/logo 1.png" alt="RN Logo" className="w-10 h-10 md:w-14 md:h-14 rounded-lg" />
            </a>
            <span className="font-bebas text-xl md:text-3xl tracking-wider">PLANILHAS <span className="text-orange">DE TREINO</span></span>
          </div>
          <a href="/" className="text-orange hover:underline text-sm">
            Voltar
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bebas text-5xl md:text-7xl mb-4">
              NOSSAS <span className="text-orange">PLANILHAS</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Escolha o programa ideal para o seu objetivo e comece sua transformação agora mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">HIPERTROFIA <span className="text-orange">HOMEM</span></h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Foco total em ganho de massa muscular, volume e densidade com treinos de alta intensidade e sobrecarga progressiva.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">HIPERTROFIA <span className="text-orange">MULHER</span></h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Desenvolvimento muscular com ênfase em glúteos e pernas, construindo curvas reais e um físico forte e definido.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">EMAGRECIMENTO <span className="text-orange">HOMEM</span></h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Queima acelerada de gordura preservando a massa magra. Treinos metabólicos intensos para secar com qualidade.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">EMAGRECIMENTO <span className="text-orange">MULHER</span></h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Rotina projetada para secar e definir, combatendo a flacidez com exercícios estratégicos e gasto calórico elevado.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 5 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">DIVISÃO <span className="text-orange">PPL</span></h3>
              <p className="text-orange text-xs mb-3 font-bold tracking-widest">TREINO HOMEM</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">A divisão mais consagrada. Treine empurrar (push), puxar (pull) e pernas (legs) com máxima eficiência e recuperação.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 6 */}
            <div className="glass card-hover rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-bebas text-2xl mb-2 tracking-wide">DIVISÃO <span className="text-orange">UPPER/LOWER</span></h3>
              <p className="text-orange text-xs mb-3 font-bold tracking-widest">TREINO HOMEM</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Frequência ideal com treinos divididos em membros superiores e inferiores. Equilíbrio perfeito para hipertrofia.</p>
              <button className="text-orange font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                SAIBA MAIS <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 7 */}
            <div className="glass card-hover rounded-2xl p-8 relative overflow-hidden group md:col-span-2 border-orange/40 bg-gradient-to-br from-white/5 to-orange/5">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange/20 rounded-full blur-3xl group-hover:bg-orange/30 transition-all duration-700"></div>
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-orange/20 text-orange text-xs font-bold rounded-full mb-6 tracking-widest">🏆 PROGRAMA COMPLETO</div>
                  <h3 className="font-bebas text-4xl mb-3">PERIODIZAÇÃO <span className="text-orange">6 MESES (PPL)</span></h3>
                  <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">O mapa definitivo para sua evolução. Meio ano de planejamento estratégico no formato Push-Pull-Legs, garantindo progressão constante sem estagnar.</p>
                </div>
                <button className="glow-button bg-orange text-white font-bold py-4 px-8 rounded-xl w-fit uppercase tracking-wider text-sm">
                  Adquirir Pacote
                </button>
              </div>
            </div>

            {/* Card 8 */}
            <div className="glass card-hover rounded-2xl p-8 relative overflow-hidden group md:col-span-2 border-orange/40 bg-gradient-to-br from-white/5 to-orange/5">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange/20 rounded-full blur-3xl group-hover:bg-orange/30 transition-all duration-700"></div>
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-orange/20 text-orange text-xs font-bold rounded-full mb-6 tracking-widest">🏆 PROGRAMA COMPLETO</div>
                  <h3 className="font-bebas text-4xl mb-3">PERIODIZAÇÃO <span className="text-orange">6 MESES (UPPER/LOWER)</span></h3>
                  <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">Estrutura de 6 meses focada em otimizar sua recuperação e desempenho com a divisão Superior/Inferior. O segredo dos atletas para hipertrofia sólida.</p>
                </div>
                <button className="glow-button bg-orange text-white font-bold py-4 px-8 rounded-xl w-fit uppercase tracking-wider text-sm">
                  Adquirir Pacote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-4">
            RESULTADOS REAIS DA <span className="text-orange">RN CONSULTORIA ESPORTIVA</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Transformações reais de nossos clientes que alcançaram seus objetivos com acompanhamento personalizado
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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

            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (2).jpeg" alt="Resultado 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (3).jpeg" alt="Resultado 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (5).jpeg" alt="Resultado 9" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (6).jpeg" alt="Resultado 10" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 bg-[#111] border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 RN Consultoria Esportiva. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Planilhas