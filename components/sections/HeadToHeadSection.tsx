import SectionTitle from "@/components/shared/SectionTitle";
import HeadToHeadTable from "@/components/shared/HeadToHeadTable1";
import headToHead from "@/components/data/headToHead";

export default function HeadToHeadSection() {
  return (
    <>

      {/* Summary */}

      <div
        className="
          mt-10
          mb-8

          rounded-xl
          border
          border-yellow-500/20

          bg-zinc-900/80

          px-4
          py-4
        "
      >

        <div className="flex items-center justify-center gap-6">

          <div className="text-center">

            <p className="text-2xl font-black text-yellow-400">
              16
            </p>

            <p className="text-xs text-zinc-500">
              Wins
            </p>

          </div>

          <div className="h-8 w-px bg-zinc-700" />

          <div className="text-center">

            <p className="text-2xl font-black text-red-400">
              1
            </p>

            <p className="text-xs text-zinc-500">
              Loss
            </p>

          </div>

          <div className="h-8 w-px bg-zinc-700" />

          <div className="text-center">

            <p className="text-2xl font-black text-green-400">
              94.1%
            </p>

            <p className="text-xs text-zinc-500">
              Win Rate
            </p>

          </div>

        </div>

      </div>

      {/* Table */}

      <SectionTitle
        title="Head to Head"
        subtitle="Historical record against neighboring kingdoms."
      />

      <div className="mt-6">

        <HeadToHeadTable
          data={headToHead}
        />

      </div>

    </>
  );
}