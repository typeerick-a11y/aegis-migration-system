import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-b
        from-black
        via-zinc-950
        to-black
        px-6
        text-center
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-3xl">

        <p className="text-sm font-bold uppercase tracking-[0.5em] text-yellow-400">
          READY TO JOIN
        </p>

        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Kingdom E300
          <br />
          Awaits You
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Become part of one of the strongest
          Age of Empires Mobile communities.
          Fight together. Grow together.
          Create the next legacy.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <Button
            size="lg"
            className="
              rounded-xl
              bg-yellow-400
              px-10
              py-7
              text-lg
              font-bold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-yellow-300
            "
          >
            ⚔ Apply for Migration
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="
              rounded-xl
              border-yellow-500/40
              px-10
              py-7
              text-lg
              font-semibold
              text-yellow-400
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:text-black
            "
          >
            💬 Join Discord
          </Button>

        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        <p className="mt-8 text-sm uppercase tracking-[0.4em] text-zinc-500">
          One Kingdom • One Goal • One Legacy
        </p>

      </div>
    </section>
  );
}