/**
 * ==========================================================
 * AEGIS Migration System
 * File : HeroContainer.tsx
 * Layer : Home Component
 * Description : Hero Server Container
 * ==========================================================
 */

import Hero from "./Hero";

import { MigrationSettingsService }
  from "@/lib/services/migration-settings.service";

import { MigrationStatusService }
  from "@/lib/services/migration-status.service";

export default async function HeroContainer() {

  const settings =
    await MigrationSettingsService
      .getHomepageSettings();

  const migrationStatus =
    await MigrationStatusService
      .getAll();

  return (

    <Hero
      settings={settings}
      migrationStatus={migrationStatus}
    />

  );

}