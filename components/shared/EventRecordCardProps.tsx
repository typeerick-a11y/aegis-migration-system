type EventRecordCardProps = {
  event: string;
  record: string;
  result: string;
};

export default function EventRecordCard({
  event,
  record,
  result,
}: EventRecordCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-yellow-500/20
        bg-zinc-900
        p-4
        text-center
        transition
        hover:border-yellow-400

        sm:rounded-2xl
        sm:p-6
      "
    >
      <h3
        className="
          text-xl
          font-black
          text-yellow-400

          sm:text-3xl
        "
      >
        {event}
      </h3>

      <p
        className="
          mt-3
          text-2xl
          font-black
          text-white

          sm:mt-5
          sm:text-4xl
        "
      >
        {record}
      </p>

      <p
        className="
          mt-2
          text-xs
          leading-relaxed
          text-zinc-400

          sm:mt-4
          sm:text-base
        "
      >
        {result}
      </p>
    </div>
  );
}