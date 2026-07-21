export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-black/70 backdrop-blur-xl shadow-lg shadow-black/30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-4xl transition-transform duration-300 hover:scale-110">
  🛡️
</span>

          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] text-yellow-400">
              AEGIS
            </h1>

            <p className="text-xs text-zinc-400">
              Kingdom E300
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden items-center gap-10 md:flex">



  <a
    href="#legacy"
    className="text-zinc-300 transition-all duration-300 hover:text-yellow-400 hover:-translate-y-0.5"
  >
    KingdomLegacy
  </a>

  <a
    href="#migration"
    className="text-zinc-300 transition-all duration-300 hover:text-yellow-400 hover:-translate-y-0.5"
  >
    Migration
  </a>

</nav>

        {/* Discord Button */}
        <a
          href="#"
          className="
rounded-xl
bg-yellow-400
px-6
py-3
font-bold
text-black
transition-all
duration-300
hover:-translate-y-1
hover:bg-yellow-300
hover:shadow-lg
hover:shadow-yellow-500/30
"
        >
          Join Discord
        </a>

      </div>
    </header>
  );
}