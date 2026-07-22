/**
 * ==========================================================
 * AEGIS Migration System
 * File : MigrationStatusContainer.tsx
 * Layer : Home Component
 * Description : Migration Status Container
 * ==========================================================
 */

import MigrationStatusPanel from "./MigrationStatusPanel";

import { MigrationStatusService }
  from "@/lib/services/migration-status.service";

export default async function MigrationStatusContainer() {

  const migrationStatus =
    await MigrationStatusService.getAll();

  return (

    <MigrationStatusPanel
      migrationStatus={migrationStatus}
    />

  );

}