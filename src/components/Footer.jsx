import Logo from './Logo'

const footerLinks = {
  Proyectos: [
    { label: 'PulsoAzul', href: '#projects' },
    { label: 'NoseComer', href: '#projects' },
    { label: 'TuriEats', href: '#projects' },
    { label: 'Consultorio Médico', href: '#projects' },
  ],
  Servicios: [
    { label: 'Apps web', href: '#services' },
    { label: 'Apps móviles', href: '#services' },
    { label: 'Integraciones', href: '#services' },
    { label: 'Mantenimiento', href: '#services' },
  ],
  Contacto: [
    { label: 'ruiterrasistemas@gmail.com', href: 'mailto:ruiterrasistemas@gmail.com' },
    { label: 'WhatsApp 662 168 6456', href: 'https://wa.me/526621686456' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo white />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Desarrollo de software a medida para negocios que quieren crecer con tecnología real.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="https://wa.me/526621686456" label="WhatsApp">
                <path d="M10 2a8 8 0 00-6.93 11.97L2 18l4.13-1.08A8 8 0 1010 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.5 8.5c.5 1 1.5 2.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </SocialLink>
              <SocialLink href="mailto:ruiterrasistemas@gmail.com" label="Email">
                <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/juanluis911/" label="LinkedIn">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 10v4M7 7v.5M10 14v-3a1 1 0 012 0v3M10 11a1 1 0 011-1h0a1 1 0 011 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </SocialLink>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-bold text-sm text-white mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 RuiTerra. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Software hecho con intención.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200"
    >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        {children}
      </svg>
    </a>
  )
}
