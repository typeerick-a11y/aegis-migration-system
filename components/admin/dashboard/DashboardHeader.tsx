/**
 * ==========================================================
 * AEGIS Migration System
 * File : DashboardHeader.tsx
 * Layer : Dashboard Header
 * ==========================================================
 */

export default function DashboardHeader() {

  return (

    <div className="mb-8 flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Kingdom E300 
        </p>

      </div>

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-primary
          text-primary-foreground
          font-semibold
        "
      >
        A
      </div>

    </div>

  );

}