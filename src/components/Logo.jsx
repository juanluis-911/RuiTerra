export default function Logo({ white = false }) {
  return (
    <a href="#" className="flex items-center gap-2 no-underline">
      {/* Geometric icon: roots + circuit */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer hexagon frame */}
        <polygon
          points="18,2 32,10 32,26 18,34 4,26 4,10"
          fill="#0F2A44"
        />
        {/* Circuit node - center */}
        <circle cx="18" cy="18" r="3" fill="#1F7A4C" />
        {/* Root lines branching down */}
        <line x1="18" y1="21" x2="18" y2="28" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="26" x2="13" y2="30" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="26" x2="23" y2="30" stroke="#1F7A4C" strokeWidth="1.5" strokeLinecap="round" />
        {/* Circuit lines branching up/sides */}
        <line x1="18" y1="15" x2="18" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="9" x2="13" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="9" x2="23" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        {/* Side nodes */}
        <line x1="15" y1="18" x2="9" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="18" r="1.5" fill="white" />
        <line x1="21" y1="18" x2="27" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="27" cy="18" r="1.5" fill="white" />
        {/* Top nodes */}
        <circle cx="13" cy="9" r="1.5" fill="white" />
        <circle cx="23" cy="9" r="1.5" fill="white" />
      </svg>

      <span className={`text-xl font-bold tracking-tight ${white ? 'text-white' : 'text-primary'}`}>
        Rui<span className={white ? 'text-green-400' : 'text-secondary'}>Terra</span>
      </span>
    </a>
  )
}
