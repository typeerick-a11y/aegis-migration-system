/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-settings.ts
 * Layer : Types
 * Description : Migration Settings Model
 * ==========================================================
 */

export interface MigrationSettings {

  id: string;

  kingdomName: string;

  kingdomNumber: number;

  previewStart: string;

  regularStart: string;

  freeStart: string;

  migrationEnd: string;

  registrationOpen: boolean;

  discordInvite: string | null;

  announcement: string | null;

  createdAt: string;

  updatedAt: string;

}