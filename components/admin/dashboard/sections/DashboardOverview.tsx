/**
 * ==========================================================
 * AEGIS Migration System
 * File : DashboardOverview.tsx
 * Layer : Dashboard Overview
 * ==========================================================
 */

import OverviewCard from "../cards/OverviewCard";

interface DashboardOverviewProps {
  statistics: {
    pendingReview: number;
    acceptedPlayers: number;
    rejectedPlayers: number;
    totalPlayers: number;
  };
}

export default function DashboardOverview({
  statistics,
}: DashboardOverviewProps) {
  return (
    <section className="space-y-4">

      <div>
        <h2 className="text-2xl font-bold">
          Overview
        </h2>

        <p className="text-muted-foreground">
          Quick summary of current migration status.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-4
          gap-4
        "
      >
        <OverviewCard
          title="Pending"
          value={statistics.pendingReview}
        />

        <OverviewCard
          title="Accepted"
          value={statistics.acceptedPlayers}
        />

        <OverviewCard
          title="Rejected"
          value={statistics.rejectedPlayers}
        />

        <OverviewCard
          title="Total"
          value={statistics.totalPlayers}
        />
      </div>

    </section>
  );
}