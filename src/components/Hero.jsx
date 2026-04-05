export default function Hero() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="section-label">Plataforma empresarial</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Automatiza tu negocio con tecnología inteligente
          </h1>
          <p className="mt-5 text-lg text-text-light leading-relaxed max-w-lg">
            Conecta, automatiza y escala tu empresa con soluciones digitales hechas a medida. Desde restaurantes hasta corporaciones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Comenzar ahora
            </a>
            <a href="#demo" className="btn-outline">
              Ver demo
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-text-light">
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Sin tarjeta requerida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              14 días gratis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Soporte incluido
            </span>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#1F7A4C" opacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DashboardMockup() {
  return (
    <div className="w-full max-w-md">
      {/* Browser chrome */}
      <div className="bg-primary rounded-t-xl px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400 opacity-80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 opacity-80"></span>
        <div className="ml-4 flex-1 bg-white/10 rounded-full h-5 px-3 flex items-center">
          <span className="text-white/60 text-xs">app.ruiterra.io/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="bg-bg border border-border rounded-b-xl p-4 space-y-4">
        {/* Top stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Pedidos hoy', value: '142', color: 'text-primary' },
            { label: 'Ingresos', value: '$8,240', color: 'text-secondary' },
            { label: 'Automatiz.', value: '98%', color: 'text-secondary' },
          ].map((stat) => (
            <div key={stat.label} className="card p-3">
              <p className="text-xs text-text-light">{stat.label}</p>
              <p className={`text-lg font-bold mt-0.5 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="card p-3">
          <p className="text-xs font-semibold text-gray-500 mb-3">Actividad semanal</p>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 5 ? '#1F7A4C' : '#0F2A44',
                  opacity: i === 5 ? 1 : 0.2 + i * 0.1,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
              <span key={d} className="text-[10px] text-text-light flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div className="card p-3">
          <p className="text-xs font-semibold text-gray-500 mb-2">Últimos pedidos</p>
          <div className="space-y-2">
            {[
              { name: 'Mesa 4 — Pizza Margherita', status: 'Completado', color: 'text-secondary' },
              { name: 'Mesa 7 — Menú del día', status: 'En proceso', color: 'text-yellow-600' },
              { name: 'Delivery — Hamburguesa + Refresco', status: 'Enviado', color: 'text-blue-600' },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-xs text-gray-600 truncate max-w-[60%]">{order.name}</span>
                <span className={`text-[10px] font-semibold ${order.color}`}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
