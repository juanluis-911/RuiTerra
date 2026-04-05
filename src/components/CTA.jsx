export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
              Trabajemos juntos
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Cuéntame tu idea — aunque solo sea un concepto en una servilleta. Analizo el problema, propongo una solución y te digo qué se puede construir con tu presupuesto y tiempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:ruiterrasistemas@gmail.com"
                className="btn-secondary"
              >
                Enviar mensaje
              </a>
              <a
                href="https://wa.me/526621686456"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: contact card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-7 space-y-5">
            <p className="text-white font-bold text-sm uppercase tracking-widest">Cuéntame tu proyecto</p>

            <div className="space-y-3">
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Tu nombre</label>
                <input
                  type="text"
                  placeholder="Juan Rodríguez"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="juan@empresa.com"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">¿En qué te puedo ayudar?</label>
                <textarea
                  rows={3}
                  placeholder="Quiero construir una app para..."
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>
            </div>

            <button className="w-full bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm">
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
