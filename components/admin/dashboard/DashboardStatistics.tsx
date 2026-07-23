/**
 * ==========================================================
 * AEGIS Migration System
 * File : DashboardStatistics.tsx
 * Layer : Admin Dashboard Component
 * Description : Dashboard Statistics Grid
 * ==========================================================
 */

import {
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatisticCard from "./StatisticCard";

import type {
  DashboardStatistics as DashboardStatisticsType,
} from "@/lib/types/dashboard";

interface DashboardStatisticsProps {

  statistics: DashboardStatisticsType;

}

export default function DashboardStatistics({
  statistics,
}: DashboardStatisticsProps) {

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatisticCard
        title="Pending Review"
        value={statistics.pendingReview}
        icon={<Clock3 size={30} />}
      />

      <StatisticCard
        title="Accepted"
        value={statistics.acceptedPlayers}
        icon={<CheckCircle2 size={30} />}
      />

      <StatisticCard
        title="Rejected"
        value={statistics.rejectedPlayers}
        icon={<XCircle size={30} />}
      />

      <StatisticCard
        title="Total Registered"
        value={statistics.totalPlayers}
        icon={<Users size={30} />}
      />

    </div>

  );

}