/**
 * ==========================================================
 * AEGIS Migration System
 * File : RecentRegistrations.tsx
 * Layer : Admin Dashboard Component
 * Description : Recent Registrations Table
 * ==========================================================
 */

import type {
  RecentRegistration,
} from "@/lib/types/dashboard";

interface RecentRegistrationsProps {

  registrations:
    RecentRegistration[];

}

export default function RecentRegistrations({
  registrations,
}: RecentRegistrationsProps) {

  return (

    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-4 text-xl font-semibold text-white">
        Recent Registrations
      </h2>

      <p className="text-zinc-400">

        Total:
        {" "}
        {registrations.length}

      </p>

    </div>

  );

}