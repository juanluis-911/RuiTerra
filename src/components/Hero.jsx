export default function Hero() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="section-label">Desarrollo de software a medida</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Convertimos ideas en sistemas que funcionan
          </h1>
          <p className="mt-5 text-lg text-text-light leading-relaxed max-w-lg">
            Diseñamos y desarrollamos aplicaciones web y móviles para negocios reales. Desde clínicas hasta plataformas de delivery — soluciones hechas para resolver problemas concretos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>
            <a href="#contact" className="btn-outline">
              Hablemos de tu idea
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-text-light">
            <span className="flex items-center gap-1.5"><CheckIcon />Proyectos entregados</span>
            <span className="flex items-center gap-1.5"><CheckIcon />Múltiples sectores</span>
            <span className="flex items-center gap-1.5"><CheckIcon />Stack moderno</span>
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <ProjectsGrid />
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

function ProjectsGrid() {
  const projects = [
    { name: 'PulsoAzul', tag: 'Salud & Educación', color: 'bg-primary', icon: <HeartIcon /> },
    { name: 'NoseComer', tag: 'Lifestyle', color: 'bg-secondary', icon: <ForkIcon /> },
    { name: 'TuriEats', tag: 'Delivery', color: 'bg-primary', icon: <MapIcon /> },
    { name: 'Consultorio', tag: 'Gestión médica', color: 'bg-secondary', icon: <ClipboardIcon /> },
  ]

  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-3">
      {projects.map((p) => (
        <div
          key={p.name}
          className={`${p.color} rounded-xl p-5 flex flex-col gap-3 hover:opacity-90 transition-opacity duration-200`}
        >
          <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
            {p.icon}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{p.name}</p>
            <p className="text-white/60 text-xs mt-0.5">{p.tag}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 15s-6-4.35-6-8.5A3.5 3.5 0 019 4.5 3.5 3.5 0 0115 6.5C15 10.65 9 15 9 15z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function ForkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 9V15M6 3v2a3 3 0 006 0V3M6 3v2M12 3v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.5" fill="white" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5z" stroke="white" strokeWidth="1.5" />
      <circle cx="9" cy="7" r="1.5" fill="white" />
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="4" y="3" width="10" height="13" rx="1.5" stroke="white" strokeWidth="1.5" />
      <path d="M7 7h4M7 10h4M7 13h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 3a2 2 0 014 0" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}
