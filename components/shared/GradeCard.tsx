type GradeCardProps = {
  grade: string;
  registered: number;
  accepted: number;
  slot: number;
};

export default function GradeCard({
  grade,
  registered,
  accepted,
  slot,
}: GradeCardProps) {
  const percentage = (accepted / slot) * 100;

  const status =
    accepted >= slot
      ? {
          text: "FULL",
          color: "text-red-400",
        }
      : {
          text: "Accepting",
          color: "text-green-400",
        };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400">

      {/* Grade */}

      <h3 className="text-xl font-bold text-yellow-400">
        {grade}
      </h3>

      {/* Registered */}

      <div className="mt-6 flex justify-between text-zinc-300">
        <span>👥 Registered</span>
        <span>{registered} Players</span>
      </div>

      {/* Accepted */}

      <div className="mt-3 flex justify-between text-zinc-300">
        <span>✅ Accepted</span>

        <span>
  {accepted} / {slot} Slots
</span>
      </div>

      {/* Progress */}

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-yellow-400 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      {/* Status */}


    <span
  className={`mt-5 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
    accepted >= slot
      ? "bg-red-500/20 text-red-400"
      : "bg-green-500/20 text-green-400"
  }`}
>
  
  {accepted >= slot ? "FULL" : "ACCEPTING"}
</span>

    </div>
  );
}