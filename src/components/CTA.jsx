import { useState } from 'react'

const WA_NUMBER = '526621686456'
const EMAIL = 'ruiterrasistemas@gmail.com'

export default function CTA() {
  const [form, setForm] = useState({ name: '', contact: '', idea: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function buildMessage() {
    return (
      `Hola, soy ${form.name || 'alguien interesado'}.\n\n` +
      `Mi idea:\n${form.idea}\n\n` +
      (form.contact ? `Contacto: ${form.contact}` : '')
    )
  }

  function sendWhatsApp() {
    const msg = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  function sendEmail() {
    const subject = encodeURIComponent(`Idea de proyecto — ${form.name || 'Nuevo contacto'}`)
    const body = encodeURIComponent(buildMessage())
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`)
  }

  function handleSubmit(channel) {
    if (!form.idea.trim()) return
    if (channel === 'whatsapp') sendWhatsApp()
    if (channel === 'email') sendEmail()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
              Trabajemos juntos
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Envíame tu idea
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Aunque sea solo una frase. Cuéntame qué quieres resolver y te respondo con una propuesta concreta — sin compromiso.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem icon={<PhoneIcon />} label="WhatsApp">
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors font-medium"
                >
                  662 168 6456
                </a>
              </ContactItem>
              <ContactItem icon={<EmailIcon />} label="Email">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white hover:text-green-400 transition-colors font-medium"
                >
                  {EMAIL}
                </a>
              </ContactItem>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-7 space-y-4">
            <p className="text-white font-bold text-sm uppercase tracking-widest">Tu idea en 3 campos</p>

            <div>
              <label className="text-white/60 text-xs mb-1.5 block">Tu nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ana Martínez"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs mb-1.5 block">Tu email o teléfono</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="ana@empresa.com / 662 000 0000"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs mb-1.5 block">
                Tu idea <span className="text-white/30">(requerida)</span>
              </label>
              <textarea
                rows={4}
                name="idea"
                value={form.idea}
                onChange={handleChange}
                placeholder="Quiero una app para gestionar los pedidos de mi restaurante..."
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
              />
            </div>

            {sent && (
              <p className="text-green-400 text-xs font-semibold text-center py-1">
                ✓ ¡Listo! Se abrió el mensaje con tu idea.
              </p>
            )}

            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => handleSubmit('whatsapp')}
                disabled={!form.idea.trim()}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
              >
                <WhatsAppIcon />
                WhatsApp
              </button>
              <button
                onClick={() => handleSubmit('email')}
                disabled={!form.idea.trim()}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
              >
                <EmailIcon small />
                Email
              </button>
            </div>

            <p className="text-white/30 text-[11px] text-center leading-relaxed">
              Al enviar se abre WhatsApp o tu cliente de email con el mensaje listo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white/50 text-xs">{label}</p>
        <div className="text-sm mt-0.5">{children}</div>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a8 8 0 00-6.93 11.97L2 18l4.13-1.08A8 8 0 1010 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 8.5c.5 1 1.5 2.5 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function EmailIcon({ small = false }) {
  const s = small ? 16 : 18
  return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="white" strokeWidth="1.5" />
      <path d="M3 7l7 5 7-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a8 8 0 00-6.93 11.97L2 18l4.13-1.08A8 8 0 1010 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 8.5c.5 1 1.5 2.5 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
