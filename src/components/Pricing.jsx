const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/mes',
    description: 'Ideal para negocios que están comenzando su transformación digital.',
    features: [
      'Hasta 3 usuarios',
      'Dashboard básico',
      '500 automatizaciones/mes',
      '2 integraciones',
      'Soporte por email',
    ],
    cta: 'Comenzar gratis',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/mes',
    description: 'El más popular. Para negocios que quieren escalar con eficiencia.',
    features: [
      'Hasta 15 usuarios',
      'Dashboard avanzado',
      'Automatizaciones ilimitadas',
      '10 integraciones',
      'API access',
      'Soporte prioritario',
    ],
    cta: 'Empezar con Pro',
    highlighted: true,
    badge: 'Recomendado',
  },
  {
    name: 'Business',
    price: '$199',
    period: '/mes',
    description: 'Para empresas con múltiples sucursales y necesidades avanzadas.',
    features: [
      'Usuarios ilimitados',
      'Multi-sucursal',
      'Automatizaciones ilimitadas',
      'Integraciones ilimitadas',
      'API access + webhooks',
      'Manager de cuenta dedicado',
      'SLA garantizado',
    ],
    cta: 'Contactar ventas',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Precios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            Simple, transparente, sin sorpresas
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Cancela cuando quieras. Sin costos ocultos. Prueba 14 días sin tarjeta de crédito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-7 relative transition-colors duration-200 ${
                plan.highlighted
                  ? 'bg-primary border-primary text-white'
                  : 'bg-white border-border hover:border-secondary'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <p className={`font-bold text-sm uppercase tracking-widest ${plan.highlighted ? 'text-green-400' : 'text-secondary'}`}>
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-white/60' : 'text-text-light'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? 'text-white/70' : 'text-text-light'}`}>
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-6" stroke={plan.highlighted ? '#4ade80' : '#1F7A4C'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className={`w-full text-center block font-semibold px-6 py-3 rounded-xl transition-colors duration-200 ${
                    plan.highlighted
                      ? 'bg-secondary text-white hover:bg-secondary-hover'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
