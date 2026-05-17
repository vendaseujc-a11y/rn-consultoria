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
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-orange/30 text-center mb-16 mt-8">
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-6 font-bold uppercase tracking-wide">
              planilhas de treino ( hora q entrar vai para outra página com tudo isso)
            </h2>
            <div className="text-5xl mb-8">👇🏻</div>
            <div className="text-left max-w-2xl mx-auto text-xl text-gray-300 space-y-4 font-medium">
              <p className="hover:text-orange transition-colors">• hipertrofia homem</p>
              <p className="hover:text-orange transition-colors">• hipertrofia mulher</p>
              <p className="hover:text-orange transition-colors">• emagrecimento homem</p>
              <p className="hover:text-orange transition-colors">• emagrecimento mulher</p>
              <p className="hover:text-orange transition-colors">• treino homem divisão PPL (push - pull - press)</p>
              <p className="hover:text-orange transition-colors">• ”” upper/lower</p>
              <p className="hover:text-orange transition-colors">• periodização completa, 6 meses de treino (PPL)</p>
              <p className="hover:text-orange transition-colors">• ”” (upper/lower)</p>
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
              <img src="/fotos trabalhos m (1).jpeg" alt="Resultado 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (2).jpeg" alt="Resultado 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (3).jpeg" alt="Resultado 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden image-glow">
              <img src="/fotos trabalhos m (4).jpeg" alt="Resultado 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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