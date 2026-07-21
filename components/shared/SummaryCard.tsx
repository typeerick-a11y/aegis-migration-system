type SummaryCardProps = {
  value: string;
  label: string;
  color: "yellow" | "red" | "green";
};

export default function SummaryCard({
  value,
  label,
  color,
}: SummaryCardProps) {
  const textColor = {
    yellow: "text-yellow-400",
    red: "text-red-400",
    green: "text-green-400",
  };

  return (
    <div
      className="
        rounded-xl
        border
        border-yellow-500/20
        bg-zinc-900/80

        p-4
        sm:p-5
        md:p-6

        text-center

        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400
        hover:shadow-lg
        hover:shadow-yellow-500/10
      "
    >
      <p
        className={`
          font-black
          ${textColor[color]}

          text-3xl
          sm:text-4xl
        `}
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-xs
          text-zinc-400

          sm:mt-2
          sm:text-sm
        "
      >
        {label}
      </p>
    </div>
  );
}