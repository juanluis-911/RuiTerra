const testimonials = [
  {
    quote:
      'RuiTerra transformó completamente la gestión de nuestros tres restaurantes. Reducimos los errores en pedidos un 80% y automatizamos los cierres de caja diarios. Es como tener un gerente digital.',
    name: 'Carla Mendoza',
    role: 'Propietaria, Grupo Gastronómico El Patio',
    initials: 'CM',
  },
  {
    quote:
      'Implementar RuiTerra fue sencillo y el soporte fue excepcional. En dos semanas ya teníamos integrado nuestro sistema de delivery con el CRM y los reportes corriendo solos. Increíble ROI.',
    name: 'Diego Romero',
    role: 'Director de Operaciones, FreshMart Supermercados',
    initials: 'DR',
  },
  {
    quote:
      'Lo que más me sorprendió fue la velocidad de implementación. No necesitamos un equipo técnico. El panel es tan intuitivo que mi equipo lo aprendió en un día.',
    name: 'Valentina Suárez',
    role: 'CEO, Cadena de Cafeterías Broto',
    initials: 'VS',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Testimonios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            Empresas que ya confían en RuiTerra
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card hover:border-secondary transition-colors duration-200 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5).fill(null).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#1F7A4C">
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-gray-600 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-text-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
