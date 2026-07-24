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

  <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

    <div className="mb-6 flex items-center justify-between">

      <div>

        <h2 className="text-xl font-semibold text-white">
          Recent Registrations
        </h2>

        <p className="text-sm text-zinc-400">
          Latest governors submitted to migration.
        </p>

      </div>

      <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">

        {registrations.length} Players

      </span>

    </div>

    <table className="w-full text-sm">

      <thead>

        <tr className="border-b border-zinc-800 text-zinc-400">

          <th className="py-3 text-left">
            Governor
          </th>

          <th className="text-left">
            Grade
          </th>

          <th className="text-left">
            Power
          </th>

          <th className="text-left">
            Status
          </th>

        </tr>

      </thead>

      <tbody>

        {registrations.map((player) => (

          <tr
            key={player.id}
            className="border-b border-zinc-800 last:border-0"
          >

            <td className="py-4">

              <div className="font-medium text-white">

                {player.nickname}

              </div>

              <div className="text-xs text-zinc-500">

                {player.governorId}

              </div>

            </td>

            <td className="text-zinc-300">

              {player.grade}

            </td>

            <td className="text-zinc-300">

              {player.power.toLocaleString()}

            </td>

            <td>

              <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs text-yellow-400">

                {player.status}

              </span>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

);

}