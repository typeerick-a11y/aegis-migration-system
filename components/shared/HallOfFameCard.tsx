type HallOfFameCardProps = {
  name: string;
};

export default function HallOfFameCard({
  name,
}: HallOfFameCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-yellow-500/20
        bg-zinc-900

        p-4
        lg:p-6

        text-center

        transition
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400
      "
    >
      <div
        className="
          mx-auto
          flex
          h-12
          w-12
          lg:h-16
          lg:w-16

          items-center
          justify-center

          rounded-full
          border
          border-yellow-400

          bg-yellow-500/10

          text-2xl
          lg:text-3xl
        "
      >
        👑
      </div>

      <h3
        className="
          mt-3
          text-base
          lg:text-xl
          font-bold
          text-white
        "
      >
        {name}
      </h3>

    </div>
  );
}