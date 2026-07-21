type CountdownCardProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownCard({
  days,
  hours,
  minutes,
  seconds,
}: CountdownCardProps) {
  return (
    <div
      className="
        w-full
        max-w-[320px]
        rounded-3xl
        border
        border-yellow-500/20
        bg-zinc-900/75
        p-8
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,.35)]
      "
    >
      {/* Header */}
      <p
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.35em]
          text-yellow-400
        "
      >
        Migration Opens
      </p>

      {/* Days */}
      <div className="mt-8">
        <h2
          className="
            text-7xl
            font-black
            leading-none
            text-white
          "
        >
          {days}
        </h2>

        <p
          className="
            mt-2
            text-2xl
            font-bold
            uppercase
            tracking-[0.18em]
            text-yellow-400
          "
        >
          Days
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-yellow-500/20" />

      {/* Time Boxes */}
      <div className="grid grid-cols-3 gap-4">
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Minutes" />
        <TimeBox value={seconds} label="Seconds" />
      </div>
    </div>
  );
}

type TimeBoxProps = {
  value: number;
  label: string;
};

function TimeBox({
  value,
  label,
}: TimeBoxProps) {
  return (
    <div
      className="
        flex
        h-28
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/5
        bg-black/35
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400/30
        hover:bg-black/50
        hover:shadow-[0_0_18px_rgba(250,204,21,.12)]
      "
    >
      <span
        className="
          text-4xl
          font-black
          leading-none
          text-white
        "
      >
        {value.toString().padStart(2, "0")}
      </span>

      <span
        className="
          mt-3
          w-full
          text-center
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.30em]
          text-zinc-400
        "
      >
        {label}
      </span>
    </div>
  );
}