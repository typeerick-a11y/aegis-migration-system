/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-validation.service.ts
 * Layer : Business Service
 * Description : Migration Validation Rules
 * ==========================================================
 */

import type { PlayerRegistration }
  from "@/lib/types/player";

export class MigrationValidationService {

  static validate(
    player: PlayerRegistration
  ): void {

    // ==========================================
    // Governor ID
    // ==========================================

    if (!player.governorId) {

      throw new Error(
        "Governor ID is required."
      );

    }

    // ==========================================
    // Nickname
    // ==========================================

    if (!player.nickname) {

      throw new Error(
        "Nickname is required."
      );

    }

    // ==========================================
    // Discord
    // ==========================================

    if (!player.discordId) {

      throw new Error(
        "Discord ID is required."
      );

    }

    // ==========================================
    // Grade
    // ==========================================

    if (!player.gradeId) {

      throw new Error(
        "Grade not found."
      );

    }

    // ==========================================
    // Screenshot
    // ==========================================

    if (!player.profileScreenshot) {

      throw new Error(
        "Profile Screenshot missing."
      );

    }

    if (!player.troopScreenshot) {

      throw new Error(
        "Troop Screenshot missing."
      );

    }

  }

}