/**
 * ==========================================================
 * AEGIS Migration System
 * File : RecentRegistrationsContainer.tsx
 * Layer : Admin Dashboard Container
 * Description : Recent Registrations Container
 * ==========================================================
 */

import { DashboardService }
  from "@/lib/services/dashboard.service";

import RecentRegistrations
  from "./RecentRegistrations";

export default async function RecentRegistrationsContainer() {

  const registrations =
    await DashboardService
      .getRecentRegistrations();

  return (

    <RecentRegistrations
      registrations={registrations}
    />

  );

}