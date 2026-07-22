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

export default async function HeroContainer() {

  const settings =
    await MigrationSettingsService.getHomepageSettings();

  return (
    <Hero
      settings={settings}
    />
  );

}