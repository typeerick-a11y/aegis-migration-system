import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-zinc-800 bg-zinc-950 text-white">

      {/* Logo */}
      <div className="border-b border-zinc-800 px-6 py-6">

        <h1 className="text-2xl font-black tracking-wide text-yellow-400">
          AEGIS
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Kingdom E300
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3 py-6">

        <Link
          href="/admin/dashboard"
          className="block rounded-lg px-4 py-3 transition hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/admin/players"
          className="block rounded-lg px-4 py-3 transition hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          👥 Players
        </Link>

        <Link
          href="/admin/officers"
          className="block rounded-lg px-4 py-3 transition hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          👮 Officers
        </Link>

        <Link
          href="/admin/content"
          className="block rounded-lg px-4 py-3 transition hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          🌐 Website Content
        </Link>

        <Link
          href="/admin/settings"
          className="block rounded-lg px-4 py-3 transition hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          ⚙ Migration
        </Link>

      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">

        <button
          className="
            w-full
            rounded-lg
            border
            border-red-500/30
            px-4
            py-3
            text-left
            text-red-400
            transition
            hover:bg-red-500/10
          "
        >
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}