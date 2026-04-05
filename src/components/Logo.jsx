export default function Logo({ white = false }) {
  return (
    <a href="#" className="flex items-center gap-2.5 no-underline">
      <img
        src="/logo.png"
        alt="RuiTerra logo"
        className="h-9 w-auto object-contain"
      />
      <span className={`text-xl font-bold tracking-tight ${white ? 'text-white' : 'text-primary'}`}>
        Rui<span className={white ? 'text-green-400' : 'text-secondary'}>Terra</span>
      </span>
    </a>
  )
}
