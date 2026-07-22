/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-settings.service.ts
 * Layer : Service
 * Description : Migration Settings Service
 * ==========================================================
 */

import { MigrationSettingsRepository }
  from "@/lib/repositories/migration-settings.repository";

import type {
  MigrationSettings,
} from "@/lib/types/migration-settings";

export class MigrationSettingsService {

  static async getSettings():
    Promise<MigrationSettings> {

    return await
      MigrationSettingsRepository.getSettings();

  }

  static async getHomepageSettings():
    Promise<MigrationSettings> {

    return await
      this.getSettings();

  }

}