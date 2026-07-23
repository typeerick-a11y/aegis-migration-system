/**
 * ==========================================================
 * AEGIS Migration System
 * File : player.service.ts
 * Layer : Business Service
 * Description : Player Business Logic
 * ==========================================================
 */

import type { PlayerRegistration } from "@/lib/types/player";

import { PlayerRepository }
  from "@/lib/repositories/player.repository";

export class PlayerService {

  // ==========================================================
  // Save Player
  // ==========================================================

  static async savePlayer(
    player: PlayerRegistration
  ) {

    const payload: Record<string, unknown> = {

      governor_id:
        player.governorId,

      nickname:
        player.nickname,

      discord_id:
        player.discordId,

      power:
        player.power,

      merits:
        player.merits,

      merit_ratio:
        player.meritRatio,

      hero_id:
        player.heroId,

      troop_type:
        player.troopType,

      main_march_power:
        player.mainMarchPower,

      migration_ticket_ready:
        player.migrationTicketReady,

      profile_screenshot:
        player.profileScreenshot,

      troop_screenshot:
        player.troopScreenshot,

      grade_id:
        player.gradeId,

      status:
        player.status,

      pending_review:
        player.pendingReview,

      officer_note:
        player.officerNote ?? null,

    };

    const existingPlayer =
      await PlayerRepository.findByGovernorId(
        player.governorId
      );

    if (existingPlayer) {

      return await PlayerRepository.update(
        existingPlayer.id,
        payload
      );

    }

    return await PlayerRepository.insert(
      payload
    );

  }

  // ==========================================================
  // Find Player By ID
  // ==========================================================

  static async findPlayerById(
    id: string
  ) {

    return await PlayerRepository.findById(
      id
    );

  }

}