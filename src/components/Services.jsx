const services = [
  {
    icon: <WebIcon />,
    title: 'Aplicaciones web',
    description: 'Sistemas a medida con paneles de administración, dashboards y flujos de trabajo adaptados a tu operación.',
  },
  {
    icon: <MobileIcon />,
    title: 'Apps móviles',
    description: 'Aplicaciones iOS y Android enfocadas en la experiencia del usuario final, desde delivery hasta salud.',
  },
  {
    icon: <ApiIcon />,
    title: 'Integraciones y APIs',
    description: 'Conectamos tus sistemas existentes entre sí o con plataformas de terceros para que todo fluya sin fricciones.',
  },
  {
    icon: <SupportIcon />,
    title: 'Mantenimiento y evolución',
    description: 'No desaparecemos al entregar. Acompañamos el crecimiento del sistema con soporte continuo y nuevas funciones.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="section-label">Lo que hacemos</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              Software diseñado para tu negocio, no al revés
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              No vendemos plantillas ni soluciones genéricas. Nos sentamos contigo, entendemos tu problema y construimos exactamente lo que necesitas.
            </p>
            <a href="#contact" className="mt-8 btn-primary inline-block">
              Cuéntame tu proyecto
            </a>
          </div>

          {/* Right: service cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="card hover:border-secondary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-bg flex items-center justify-center mb-3 group-hover:bg-secondary/10 transition-colors duration-200">
                  {s.icon}
                </div>
                <h3 className="font-bold text-primary text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-text-light leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WebIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="12" rx="2" stroke="#0F2A44" strokeWidth="1.5" />
      <path d="M7 19h6M10 15v4" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 7h16" stroke="#0F2A44" strokeWidth="1.5" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="6" y="2" width="8" height="16" rx="2" stroke="#0F2A44" strokeWidth="1.5" />
      <circle cx="10" cy="15.5" r="1" fill="#1F7A4C" />
    </svg>
  )
}

function ApiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="4" cy="10" r="2.5" stroke="#0F2A44" strokeWidth="1.5" />
      <circle cx="16" cy="4" r="2.5" stroke="#1F7A4C" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.5" stroke="#1F7A4C" strokeWidth="1.5" />
      <path d="M6.5 10h3M9.5 10l4-4M9.5 10l4 4" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#0F2A44" strokeWidth="1.5" />
      <path d="M10 6v4l2.5 2.5" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
