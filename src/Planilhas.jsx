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
          <h1 className="font-bebas text-4xl md:text-6xl text-center mb-12">
            NOSSAS <span className="text-orange">PLANILHAS</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">HIERTROFIA <span className="text-orange">MASCULINO</span></h3>
              <p className="text-gray-400 mb-4">Treinos focados em crescimento muscular com volume e intensidade ideais.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 97</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>

            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">HIERTROFIA <span className="text-orange">FEMININO</span></h3>
              <p className="text-gray-400 mb-4">Programa pensado para o corpo feminino com exercícios adequados.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 97</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>

            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">EMAGRECIMENTO <span className="text-orange">MASCULINO</span></h3>
              <p className="text-gray-400 mb-4">Queima de gordura com treino inteligente e metabolismo acelerado.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 97</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>

            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">EMAGRECIMENTO <span className="text-orange">FEMININO</span></h3>
              <p className="text-gray-400 mb-4">Sequência de exercícios para definir e queimar gordura localizada.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 97</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>

            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">PPL <span className="text-orange">PUSH • PULL • LEGS</span></h3>
              <p className="text-gray-400 mb-4">Divisão clássica para otimizar cada minuto na academia.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 147</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>

            <div className="glass card-hover rounded-xl p-8">
              <h3 className="font-bebas text-3xl mb-4">UPPER/LOWER <span className="text-orange">SUPERIOR • INFERIOR</span></h3>
              <p className="text-gray-400 mb-4">Divisão equilibrada para desenvolvimento completo.</p>
              <p className="font-bebas text-4xl text-orange mb-4">R$ 147</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl w-full">
                Comprar
              </button>
            </div>
          </div>

          <div className="mt-16 glass card-hover rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-orange">
            <h3 className="font-bebas text-4xl text-center mb-4">PERIODIZAÇÃO <span className="text-orange">COMPLETA</span></h3>
            <p className="text-gray-300 text-center mb-6">O mapa definitivo para sua evolução. 6 meses de treinamento estruturado com progressão garantida.</p>
            <ul className="space-y-2 text-gray-400 mb-6 max-w-md mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-orange">✔️</span> 6 planilhas mensais
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange">✔️</span> Vídeos técnicos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange">✔️</span> Suporte no WhatsApp
              </li>
            </ul>
            <div className="text-center">
              <p className="text-gray-500 line-through text-xl">R$ 597</p>
              <p className="font-bebas text-5xl text-orange">R$ 397</p>
              <p className="text-gray-400 mb-4">pagamento único</p>
              <button className="glow-button bg-orange text-white font-bold py-3 px-8 rounded-xl">
                Garantir Minha Vaga
              </button>
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