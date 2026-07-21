import Image from "next/image";

type AllianceCardProps = {
  tag: string;
  name: string;
  logo: string;
};

export default function AllianceCard({
  tag,
  name,
  logo,
}: AllianceCardProps) {
  return (

    <div
      className="
        rounded-2xl
        border
        border-yellow-500/20
        bg-zinc-900

        p-4
        lg:p-8

        transition
        duration-300

        hover:border-yellow-400
        hover:-translate-y-1
      "
    >

      {/* Mobile */}

      <div
        className="
          flex
          items-center
          gap-4

          lg:hidden
        "
      >

        <Image
          src={logo}
          alt={tag}
          width={50}
          height={50}
          className="h-[50px] w-[50px] object-contain"
        />

        <div>

          <h3 className="text-xl font-black text-yellow-400">
            {tag}
          </h3>

          <p className="text-sm text-zinc-400">
            {name}
          </p>

        </div>

      </div>

      {/* Desktop */}

      <div
        className="
          hidden
          lg:block
          text-center
        "
      >

        <Image
          src={logo}
          alt={tag}
          width={90}
          height={90}
          className="mx-auto h-[90px] w-[90px] object-contain"
        />

        <h3 className="mt-6 text-3xl font-black text-yellow-400">
          {tag}
        </h3>

        <p className="mt-2 text-zinc-300">
          {name}
        </p>

      </div>

    </div>

  );
}