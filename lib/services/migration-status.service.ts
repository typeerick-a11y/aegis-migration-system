/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-status.service.ts
 * Layer : Service
 * Description : Migration Status Service
 * ==========================================================
 */

import { MigrationStatusRepository }
  from "@/lib/repositories/migration-status.repository";

import type {
  MigrationStatus,
} from "@/lib/types/migration-status";

export class MigrationStatusService {

  static async getAll(): Promise<MigrationStatus[]> {

    return MigrationStatusRepository.getAll();

  }

}