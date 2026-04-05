export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
          Empieza hoy
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
          Empieza a transformar tu negocio hoy
        </h2>
        <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Únete a cientos de empresas que ya automatizan sus operaciones con RuiTerra. Sin tarjeta. Sin compromisos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="btn-secondary">
            Crear cuenta gratis
          </a>
          <a href="#demo" className="btn-outline-white">
            Ver demo
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Empresas activas' },
            { value: '98%', label: 'Tasa de retención' },
            { value: '3x', label: 'ROI promedio' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
