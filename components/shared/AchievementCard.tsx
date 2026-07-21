type AchievementCardProps = {
  icon: string;
  value: string;
  title: string;
};

export default function AchievementCard({
  icon,
  value,
  title,
}: AchievementCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-yellow-500/20
        bg-zinc-900/80
        backdrop-blur-sm
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-yellow-400
        hover:bg-zinc-800/90
        hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
      "
    >
      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-6 text-4xl font-black text-yellow-400">
        {value}
      </h3>

      <p className="mt-3 text-zinc-300">
        {title}
      </p>
    </div>
  );
}