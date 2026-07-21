type BattleHonorCardProps = {
  title: string;
  rank: string;
  description: string;
};

export default function BattleHonorCard({
  title,
  rank,
  description,
}: BattleHonorCardProps) {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-6 transition hover:border-yellow-400">

      <h3 className="text-2xl font-bold text-yellow-400">
        {title}
      </h3>

      <p className="mt-5 text-4xl font-black text-white">
        {rank}
      </p>

      <p className="mt-4 text-zinc-400">
        {description}
      </p>

    </div>
  );
}