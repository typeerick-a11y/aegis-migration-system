/**
 * ==========================================================
 * AEGIS Migration System
 * File : DashboardContainer.tsx
 * Layer : Admin Dashboard Container
 * Description : Dashboard Statistics Container
 * ==========================================================
 */
import DashboardHeader from "./DashboardHeader";
import DashboardOverview from "./sections/DashboardOverview";

import { DashboardService }
  from "@/lib/services/dashboard.service";

  import RecentRegistrationsContainer
  from "./RecentRegistrationsContainer";

export default async function DashboardContainer() {

  const statistics =
    await DashboardService.getStatistics();

  return (

  <div className="space-y-8">

    <DashboardHeader />

    <DashboardOverview
        statistics={statistics}
    />

    <RecentRegistrationsContainer />

</div>

);

}