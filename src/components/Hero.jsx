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
    {
      name: 'PulsoAzul',
      tag: 'Salud & Educación',
      color: 'bg-primary',
      logo: '/logoapps/pulsoAzulLogo.png',
      url: 'https://pulsoazul.com',
    },
    {
      name: 'NoseComer',
      tag: 'Lifestyle',
      color: 'bg-secondary',
      logo: '/logoapps/nosequecomer.png',
      url: 'https://no-se-que-comer.vercel.app/',
    },
    {
      name: 'TuriEats',
      tag: 'Delivery',
      color: 'bg-primary',
      logo: '/logoapps/turieats.png',
      url: 'https://turieats.vercel.app/',
    },
    {
      name: 'Consultorio',
      tag: 'Gestión médica',
      color: 'bg-secondary',
      logo: null,
      url: 'https://clinica-plus-rho.vercel.app/',
      icon: <ClipboardIcon />,
    },
  ]

  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-3">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${p.color} rounded-xl p-5 flex flex-col gap-3 hover:opacity-85 transition-opacity duration-200 no-underline`}
        >
          <div className="h-9 flex items-center">
            {p.logo
              ? <img src={p.logo} alt={p.name} className="h-9 w-auto object-contain" />
              : <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">{p.icon}</div>
            }
          </div>
          <div>
            <p className="text-white font-bold text-sm">{p.name}</p>
            <p className="text-white/60 text-xs mt-0.5">{p.tag}</p>
          </div>
        </a>
      ))}
    </div>
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
