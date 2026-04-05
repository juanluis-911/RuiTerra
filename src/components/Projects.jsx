const projects = [
  {
    name: 'PulsoAzul',
    logo: '/logoapps/pulsoAzulLogo.png',
    tag: 'Salud & Educación especial',
    tagColor: 'bg-blue-50 text-blue-700',
    headline: 'La red de apoyo para niños neurodivergentes',
    description:
      'Plataforma que conecta en un solo lugar a padres, terapeutas y maestros de niños neurodivergentes. Facilita la comunicación, el seguimiento del progreso y la coordinación del equipo de apoyo de cada niño.',
    features: [
      'Perfil unificado del niño accesible por todo el equipo',
      'Registro de sesiones y avances por terapeuta',
      'Canal de comunicación directo entre padres y profesionales',
      'Agenda de citas y recordatorios automáticos',
      'Reportes de progreso exportables',
    ],
    url: 'https://pulsoazul.com',
    mockup: <PulsoMockup />,
  },
  {
    name: 'NoseComer',
    logo: '/logoapps/nosequecomer.png',
    tag: 'Lifestyle & Food',
    tagColor: 'bg-orange-50 text-orange-700',
    headline: 'Decide qué cocinar hoy, sin pensar',
    description:
      'App estilo Tinder para descubrir recetas. Cuando no tienes idea de qué preparar, deslizas recetas y la app aprende tus gustos para sugerirte opciones cada vez más acertadas.',
    features: [
      'Swipe de recetas con aprendizaje de preferencias',
      'Filtros por ingredientes que ya tienes en casa',
      'Lista de compras generada automáticamente',
      'Guardado de recetas favoritas',
      'Modo "sorpréndeme" aleatorio',
    ],
    url: 'https://no-se-que-comer.vercel.app/',
    mockup: <NoseComerMockup />,
  },
  {
    name: 'TuriEats',
    logo: '/logoapps/turieats.png',
    tag: 'Delivery & Restaurantes',
    tagColor: 'bg-green-50 text-green-700',
    headline: 'Plataforma de delivery para restaurantes locales',
    description:
      'Sistema tipo Uber Eats pensado para restaurantes independientes. Gestiona pedidos, repartidores y clientes desde un panel centralizado, con tracking en tiempo real.',
    features: [
      'App para clientes con menú y pedido en tiempo real',
      'Panel de gestión para cada restaurante',
      'App para repartidores con rutas optimizadas',
      'Tracking del pedido en tiempo real',
      'Sistema de pagos integrado',
    ],
    url: 'https://turieats.vercel.app/',
    mockup: <TuriEatsMockup />,
  },
  {
    name: 'Consultorio Médico',
    logo: null,
    tag: 'Gestión de salud',
    tagColor: 'bg-teal-50 text-teal-700',
    headline: 'Sistema integral para consultorios y clínicas',
    description:
      'Plataforma todo-en-uno para la gestión de consultorios médicos: desde la agenda de citas hasta el expediente clínico digital, recetas médicas y punto de venta para farmacia.',
    features: [
      'Agenda de citas con disponibilidad en tiempo real',
      'Expediente clínico electrónico por paciente',
      'Generación de recetas médicas digitales',
      'POS de farmacia con control de inventario',
      'Historial de consultas y seguimiento de pacientes',
    ],
    url: 'https://clinica-plus-rho.vercel.app/',
    mockup: <ConsultorioMockup />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Proyectos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            Software real para problemas reales
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Cada proyecto nació de una necesidad concreta. Aquí algunos de los sistemas que hemos diseñado y desarrollado.
          </p>
        </div>

        <div className="space-y-14">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text */}
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${project.tagColor}`}>
                  {project.tag}
                </span>

                <div className="mt-3 flex items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                  )}
                  {!project.logo && (
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                      {project.name}
                    </h3>
                  )}
                </div>

                <p className="mt-2 text-secondary font-semibold text-sm">{project.headline}</p>
                <p className="mt-3 text-text-light leading-relaxed">{project.description}</p>
                <ul className="mt-5 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#1F7A4C" opacity="0.12" />
                        <path d="M4.5 7.5l2 2 4-4" stroke="#1F7A4C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 btn-outline text-sm"
                  >
                    Ver proyecto
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Mockup */}
              <div>{project.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Mockups ──────────────────────────────────────────────── */

function PulsoMockup() {
  const team = [
    { role: 'Mamá', initial: 'M', color: 'bg-blue-100 text-blue-700' },
    { role: 'Terapeuta', initial: 'T', color: 'bg-secondary/10 text-secondary' },
    { role: 'Maestra', initial: 'A', color: 'bg-purple-100 text-purple-700' },
  ]
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="bg-primary px-5 py-4">
        <p className="text-white font-bold text-sm">PulsoAzul</p>
        <p className="text-white/60 text-xs mt-0.5">Perfil — Emilio, 7 años</p>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">Equipo de apoyo</p>
          <div className="flex gap-2">
            {team.map((m) => (
              <div key={m.role} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${m.color}`}>
                <span className="font-bold">{m.initial}</span>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">Progreso semanal</p>
          <div className="space-y-2">
            {[
              { label: 'Lenguaje', pct: 72 },
              { label: 'Socialización', pct: 58 },
              { label: 'Motricidad', pct: 85 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-primary">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-bg rounded-full">
                  <div className="h-1.5 bg-secondary rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">Últimas notas</p>
          <div className="space-y-1.5">
            <div className="bg-bg rounded-lg px-3 py-2 text-xs text-gray-600">
              <span className="font-semibold text-secondary">Terapeuta: </span>
              Emilio logró completar la secuencia completa hoy. Gran avance.
            </div>
            <div className="bg-bg rounded-lg px-3 py-2 text-xs text-gray-600">
              <span className="font-semibold text-blue-600">Mamá: </span>
              En casa también lo intentó solo después de cenar.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NoseComerMockup() {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="bg-secondary px-5 py-4">
        <p className="text-white font-bold text-sm">NoseComer</p>
        <p className="text-white/60 text-xs mt-0.5">¿Qué cocinamos hoy?</p>
      </div>
      <div className="p-5 space-y-4">
        {/* Recipe card */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-orange-50 px-4 py-6 flex flex-col items-center text-center">
            <span className="text-4xl">🍝</span>
            <p className="mt-2 font-bold text-primary">Pasta Carbonara</p>
            <p className="text-xs text-text-light mt-1">30 min · 4 ingredientes · Fácil</p>
          </div>
          <div className="px-4 py-3 flex justify-between items-center">
            <button className="w-12 h-12 rounded-full border-2 border-red-200 text-red-400 font-bold text-lg flex items-center justify-center hover:bg-red-50 transition-colors">✕</button>
            <p className="text-xs text-text-light">desliza para decidir</p>
            <button className="w-12 h-12 rounded-full border-2 border-green-200 text-secondary font-bold text-lg flex items-center justify-center hover:bg-green-50 transition-colors">✓</button>
          </div>
        </div>
        {/* Filters */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">Ingredientes disponibles</p>
          <div className="flex flex-wrap gap-1.5">
            {['Huevo', 'Pasta', 'Cebolla', 'Ajo', '+5 más'].map((tag) => (
              <span key={tag} className="text-xs bg-bg border border-border px-2.5 py-1 rounded-full text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TuriEatsMockup() {
  const orders = [
    { restaurant: 'La Fogata', item: 'Burritos x2', status: 'En camino', statusColor: 'text-blue-600' },
    { restaurant: 'Sushi Now', item: 'Roll especial', status: 'Preparando', statusColor: 'text-yellow-600' },
    { restaurant: 'Pizza Loca', item: 'Pepperoni L', status: 'Entregado', statusColor: 'text-secondary' },
  ]
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="bg-primary px-5 py-4 flex justify-between items-center">
        <div>
          <p className="text-white font-bold text-sm">TuriEats</p>
          <p className="text-white/60 text-xs mt-0.5">Panel de operaciones</p>
        </div>
        <span className="text-xs bg-secondary text-white px-2.5 py-1 rounded-full font-semibold">En vivo</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Pedidos activos', value: '23' },
            { label: 'Repartidores', value: '8' },
            { label: 'Tiempo prom.', value: '22 min' },
          ].map((s) => (
            <div key={s.label} className="bg-bg rounded-xl p-3 text-center">
              <p className="text-lg font-extrabold text-primary">{s.value}</p>
              <p className="text-[10px] text-text-light mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">Pedidos recientes</p>
          <div className="space-y-2">
            {orders.map((o, i) => (
              <div key={i} className="flex items-center justify-between bg-bg rounded-lg px-3 py-2">
                <div>
                  <p className="text-xs font-semibold text-primary">{o.restaurant}</p>
                  <p className="text-[10px] text-text-light">{o.item}</p>
                </div>
                <span className={`text-[10px] font-bold ${o.statusColor}`}>{o.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ConsultorioMockup() {
  const agenda = [
    { time: '09:00', name: 'María González', type: 'Consulta general' },
    { time: '09:45', name: 'Carlos Pérez', type: 'Seguimiento' },
    { time: '10:30', name: 'Lucía Ramírez', type: 'Primera vez' },
  ]
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="bg-primary px-5 py-4">
        <p className="text-white font-bold text-sm">Consultorio Médico</p>
        <p className="text-white/60 text-xs mt-0.5">Dr. Rodríguez — Martes 5 de abril</p>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">Agenda del día</p>
          <div className="space-y-2">
            {agenda.map((a, i) => (
              <div key={i} className="flex items-center gap-3 border border-border rounded-lg px-3 py-2.5">
                <span className="text-xs font-bold text-primary w-10 flex-shrink-0">{a.time}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{a.name}</p>
                  <p className="text-[10px] text-text-light">{a.type}</p>
                </div>
                <span className="ml-auto text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-semibold">
                  Confirmada
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-4 grid grid-cols-2 gap-2">
          <div className="bg-bg rounded-xl p-3 text-center">
            <p className="text-lg font-extrabold text-primary">12</p>
            <p className="text-[10px] text-text-light">Citas hoy</p>
          </div>
          <div className="bg-bg rounded-xl p-3 text-center">
            <p className="text-lg font-extrabold text-secondary">3</p>
            <p className="text-[10px] text-text-light">Recetas emitidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
