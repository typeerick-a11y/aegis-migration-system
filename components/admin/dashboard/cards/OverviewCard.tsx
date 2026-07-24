/**
 * ==========================================================
 * AEGIS Migration System
 * File : OverviewCard.tsx
 * ==========================================================
 */

import { Card } from "@/components/ui/card";

interface OverviewCardProps {

  title: string;

  value: number;

}

export default function OverviewCard({

  title,

  value,

}: OverviewCardProps) {

  return (

    <Card className="rounded-xl border bg-white px-5 py-4 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">

            {title}

          </p>

          <h2 className="mt-1 text-3xl font-bold text-zinc-900">

            {value}

          </h2>

        </div>

      </div>

    </Card>

  );

}