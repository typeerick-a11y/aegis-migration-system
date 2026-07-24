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

    <Card className="px-5 py-4">

      <p className="text-xs uppercase text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

    </Card>

  );

}