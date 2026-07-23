/**
 * ==========================================================
 * AEGIS Migration System
 * File : DashboardContainer.tsx
 * Layer : Admin Dashboard Container
 * Description : Dashboard Statistics Container
 * ==========================================================
 */

import DashboardStatistics
  from "./DashboardStatistics";

import { DashboardService }
  from "@/lib/services/dashboard.service";

export default async function DashboardContainer() {

  const statistics =
    await DashboardService.getStatistics();

  return (

    <DashboardStatistics
      statistics={statistics}
    />

  );

}