import { useState } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Hablemos
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm text-center">
            Hablemos
          </a>
        </div>
      )}
    </header>
  )
}
