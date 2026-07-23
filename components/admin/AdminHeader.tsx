export default function AdminHeader() {
  return (

    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <h1 className="text-xl font-semibold">
        AEGIS Admin Dashboard
      </h1>

      <div className="text-sm text-muted-foreground">
        Guest
      </div>

    </header>

  );
}