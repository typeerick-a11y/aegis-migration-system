/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-status.ts
 * Layer : Types
 * Description : Migration Status Model
 * ==========================================================
 */

export interface MigrationStatus {

  id: string;

  grade: string;

  slots: number;

  registered: number;

  accepted: number;

  remaining: number;

  badgeColor: string;

  displayOrder: number;

}