import Logo from './Logo'

const footerLinks = {
  Producto: ['Funcionalidades', 'Precios', 'Demo', 'Actualizaciones'],
  Empresa: ['Sobre nosotros', 'Blog', 'Carreras', 'Prensa'],
  Soporte: ['Centro de ayuda', 'Documentación', 'Estado del sistema', 'Contacto'],
  Legal: ['Privacidad', 'Términos de uso', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo white />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Automatización inteligente para negocios que quieren crecer sin límites.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="#" label="Twitter/X">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 10v4M7 7v.5M10 14v-3a1 1 0 012 0v3M10 11a1 1 0 011-1h0a1 1 0 011 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="6" r="0.7" fill="currentColor" />
              </SocialLink>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-bold text-sm text-white mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline">
                      {link}
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
            Hecho con precisión para negocios que crecen.
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
