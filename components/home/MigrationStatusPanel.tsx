import type {
  MigrationStatus,
} from "@/lib/types/migration-status";

interface MigrationStatusPanelProps {
  migrationStatus: MigrationStatus[];
}

export default function MigrationStatusPanel({
  migrationStatus,
}: MigrationStatusPanelProps) {

  const totalRegistered = migrationStatus.reduce(
    (sum, item) => sum + item.registered,
    0
  );

  const totalAccepted = 0;

  const totalPending = totalRegistered;

  return (
    <section
      className="
        mt-16
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-zinc-900/70
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(0,0,0,.45)]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-b
          border-yellow-500/20
          px-5
          py-5
          md:flex-row
          md:items-center
          md:justify-between
          md:px-8
        "
      >
        <div>
          <h2 className="text-2xl font-black text-white">
            Migration Status
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Current migration progress of Kingdom E300
          </p>
        </div>

        <div
          className="
            self-start
            rounded-full
            border
            border-green-500/30
            bg-green-500/10
            px-4
            py-2
            text-sm
            font-bold
            text-green-400
          "
        >
          🟢 OPEN
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="block md:hidden">
        <div className="divide-y divide-yellow-500/10">

          {migrationStatus.map((item) => {

            const percentage = 0;

            return (
              <div
                key={item.grade}
                className="px-5 py-4"
              >
                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-white">
                    {item.grade}
                  </h3>

                  <span className="text-sm text-zinc-400">
                    0/{item.slots}
                  </span>

                </div>

                <div className="mt-2 flex justify-between text-sm">

                  <span className="text-zinc-400">
                    {item.registered} Registered
                  </span>

                  <span className="font-semibold text-yellow-400">
                    0%
                  </span>

                </div>

                <div
                  className="
                    mt-2
                    h-3
                    overflow-hidden
                    rounded-full
                    bg-zinc-800/80
                    shadow-inner
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-600
                      via-yellow-400
                      to-yellow-300
                      transition-all
                      duration-500
                      shadow-[0_0_12px_rgba(250,204,21,0.45)]
                    "
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

              </div>
            );

          })}

        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden px-8 py-8 md:block">

        <div
          className="
            mb-6
            grid
            grid-cols-[170px_140px_1fr_120px]
            gap-6
            text-sm
            font-bold
            uppercase
            tracking-wider
            text-zinc-500
          "
        >
          <div>Grade</div>

          <div>Registered</div>

          <div>Progress</div>

          <div className="text-right">
            Accepted
          </div>

        </div>

        <div className="space-y-5">

          {migrationStatus.map((item) => {

            const percentage = 0;

            return (
              <div
                key={item.grade}
                className="
                  grid
                  gap-5
                  rounded-2xl
                  border
                  border-yellow-500/10
                  bg-black/20
                  px-6
                  py-4
                  transition-all
                  duration-300
                  hover:border-yellow-400/40
                  hover:bg-black/30
                  md:grid-cols-[170px_140px_1fr_120px]
                  md:items-center
                "
              >

                <div>

                  <p className="font-bold text-white">
                    {item.grade}
                  </p>

                </div>

                <div>

                  <span className="font-bold text-yellow-400">
                    {item.registered}
                  </span>

                  <span className="ml-2 text-zinc-400">
                    Registered
                  </span>

                </div>

                <div>

                  <div
                    className="
                      h-4
                      overflow-hidden
                      rounded-full
                      bg-zinc-800/80
                      shadow-inner
                    "
                  >
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-yellow-600
                        via-yellow-400
                        to-yellow-300
                        transition-all
                        duration-500
                        shadow-[0_0_12px_rgba(250,204,21,0.45)]
                      "
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                </div>

                <div className="text-right">

                  <span className="font-bold text-white">
                    0
                  </span>

                  <span className="text-zinc-500">
                    {" / "}
                    {item.slots}
                  </span>

                </div>

              </div>
            );

          })}

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          grid
          grid-cols-3
          border-t
          border-yellow-500/20
          bg-black/20
          py-4
          text-center
        "
      >

        <div>

          <p className="text-[11px] uppercase tracking-wider text-zinc-500">
            Registered
          </p>

          <h3 className="mt-1 text-xl font-black text-yellow-400">
            {totalRegistered}
          </h3>

        </div>

        <div>

          <p className="text-[11px] uppercase tracking-wider text-zinc-500">
            Accepted
          </p>

          <h3 className="mt-1 text-xl font-black text-green-400">
            {totalAccepted}
          </h3>

        </div>

        <div>

          <p className="text-[11px] uppercase tracking-wider text-zinc-500">
            Pending
          </p>

          <h3 className="mt-1 text-xl font-black text-orange-400">
            {totalPending}
          </h3>

        </div>

      </div>

    </section>
  );
}