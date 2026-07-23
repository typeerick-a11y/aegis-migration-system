import type { ReactNode } from "react";

interface StatisticCardProps {

  title: string;

  value: number;

  icon: ReactNode;

}

export default function StatisticCard({
  title,
  value,
  icon,
}: StatisticCardProps) {

  return (

    <div
      className="
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        shadow-sm
      "
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div className="text-yellow-400">

          {icon}

        </div>

      </div>

    </div>

  );

}