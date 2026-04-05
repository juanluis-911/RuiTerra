const cases = [
  {
    icon: <OrderIcon />,
    title: 'Gestión de pedidos',
    description:
      'Recibe, organiza y despacha pedidos desde un panel centralizado. Reduce errores y tiempos de espera en cocina y sala.',
  },
  {
    icon: <AutomationIcon />,
    title: 'Procesos automatizados',
    description:
      'Automatiza cierres de caja, notificaciones a clientes, recordatorios de reservas y reportes diarios sin esfuerzo manual.',
  },
  {
    icon: <SalesIcon />,
    title: 'Mayor conversión de ventas',
    description:
      'Activa promociones inteligentes, programas de fidelidad y upsells automatizados basados en el comportamiento de tus clientes.',
  },
]

export default function UseCases() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <span className="section-label">Caso de uso</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              Hecho para restaurantes y negocios locales
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              RuiTerra entiende los retos del día a día en negocios físicos. Nuestra plataforma está diseñada para digitalizar operaciones sin requerir equipos de IT.
            </p>

            <div className="mt-8 space-y-5">
              {cases.map((c) => (
                <div key={c.title} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-bg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors duration-200 border border-border">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">{c.title}</h3>
                    <p className="text-sm text-text-light mt-0.5 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-secondary">
                Ver caso de éxito
              </a>
            </div>
          </div>

          {/* Right: restaurant mockup */}
          <div>
            <RestaurantMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function RestaurantMockup() {
  const tables = [
    { id: 1, status: 'occupied', orders: 3 },
    { id: 2, status: 'free' },
    { id: 3, status: 'occupied', orders: 1 },
    { id: 4, status: 'reserved' },
    { id: 5, status: 'free' },
    { id: 6, status: 'occupied', orders: 5 },
  ]

  const statusColor = {
    occupied: 'bg-secondary text-white',
    free: 'bg-bg border border-border text-text-light',
    reserved: 'bg-primary text-white',
  }

  const statusLabel = {
    occupied: 'Ocupada',
    free: 'Libre',
    reserved: 'Reservada',
  }

  return (
    <div className="bg-bg border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">Panel de Mesas</p>
          <p className="text-white/60 text-xs mt-0.5">Restaurante El Patio — Turno tarde</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-white/80 text-xs">En vivo</span>
        </div>
      </div>

      {/* Legend */}
      <div className="px-5 py-3 flex gap-4 border-b border-border bg-white">
        {[
          { color: 'bg-secondary', label: 'Ocupada' },
          { color: 'bg-primary', label: 'Reservada' },
          { color: 'bg-bg border border-border', label: 'Libre' },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5 text-xs text-text-light">
            <span className={`w-3 h-3 rounded-sm ${item.color}`}></span>
            {item.label}
          </span>
        ))}
      </div>

      {/* Tables grid */}
      <div className="p-5 grid grid-cols-3 gap-3">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`rounded-xl p-3 text-center transition-opacity duration-200 hover:opacity-90 ${statusColor[table.status]}`}
          >
            <p className="font-bold text-sm">Mesa {table.id}</p>
            <p className="text-xs opacity-80 mt-0.5">{statusLabel[table.status]}</p>
            {table.orders && (
              <p className="text-xs opacity-70 mt-1">{table.orders} plato{table.orders > 1 ? 's' : ''}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-5 py-4 bg-white border-t border-border flex items-center justify-between">
        <div className="text-xs text-text-light">
          3 mesas ocupadas · 2 libres · 1 reservada
        </div>
        <button className="text-xs font-semibold text-secondary hover:text-secondary-hover transition-colors">
          Ver pedidos →
        </button>
      </div>
    </div>
  )
}

function OrderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="#1F7A4C" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function AutomationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="3" stroke="#0F2A44" strokeWidth="1.5" />
    </svg>
  )
}

function SalesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 14l4-4 3 3 7-8" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6h3v3" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
