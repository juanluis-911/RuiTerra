export default function Logo({ white = false }) {
  return (
    <a href="#" className="flex items-center gap-2.5 no-underline">
      <img
        src="/logo.png"
        alt="RuiTerra logo"
        className="h-24 w-auto object-contain"
      />
    </a>
  )
}
