const features = [
  {
    icon: <WorkflowIcon />,
    title: 'Automatización de flujos',
    description:
      'Define reglas y disparadores que ejecutan acciones automáticas en tu negocio: pedidos, notificaciones, reportes y más, sin intervención manual.',
  },
  {
    icon: <IntegrationIcon />,
    title: 'Integraciones nativas',
    description:
      'Conecta con Salesforce, Stripe, WhatsApp, Google Sheets y cientos de plataformas mediante APIs robustas y webhooks configurables.',
  },
  {
    icon: <DashboardIcon />,
    title: 'Dashboards en tiempo real',
    description:
      'Visualiza métricas clave de tu negocio al instante: ventas, inventario, pedidos y satisfacción del cliente en paneles personalizables.',
  },
  {
    icon: <ScaleIcon />,
    title: 'Arquitectura escalable',
    description:
      'Diseñada para crecer contigo. Desde un local hasta cientos de sucursales, RuiTerra se adapta sin fricciones ni migraciones costosas.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Funcionalidades</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            Todo lo que tu empresa necesita, en un solo lugar
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Herramientas poderosas que simplifican operaciones complejas para que te enfoques en crecer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card hover:border-secondary transition-colors duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-bg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="font-bold text-primary text-base mb-2">{f.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkflowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="#0F2A44" strokeWidth="1.5" />
      <rect x="14" y="1" width="7" height="7" rx="1.5" stroke="#1F7A4C" strokeWidth="1.5" />
      <rect x="7.5" y="14" width="7" height="7" rx="1.5" stroke="#0F2A44" strokeWidth="1.5" />
      <path d="M8 4.5h6M17.5 8v3h-7v3" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IntegrationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="4" cy="11" r="3" stroke="#0F2A44" strokeWidth="1.5" />
      <circle cx="18" cy="4" r="3" stroke="#1F7A4C" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" stroke="#1F7A4C" strokeWidth="1.5" />
      <path d="M7 11h4M11 11l4-4M11 11l4 4" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="1" y="1" width="20" height="20" rx="2" stroke="#0F2A44" strokeWidth="1.5" />
      <path d="M5 15l4-5 3 3 5-7" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="8" y="13" width="6" height="8" rx="1" stroke="#0F2A44" strokeWidth="1.5" />
      <rect x="1" y="7" width="6" height="14" rx="1" stroke="#0F2A44" strokeWidth="1.5" />
      <rect x="15" y="1" width="6" height="20" rx="1" stroke="#1F7A4C" strokeWidth="1.5" />
    </svg>
  )
}
