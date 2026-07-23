/**
 * ==========================================================
 * AEGIS Migration System
 * File : page.tsx
 * Layer : Admin Dashboard Page
 * ==========================================================
 */

import DashboardContainer
  from "@/components/admin/dashboard/DashboardContainer";

export default function DashboardPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome to AEGIS Administration.
        </p>

      </div>

      <DashboardContainer />

    </div>

  );

}