/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration.service.ts
 * Layer : Business Service
 * Description : Migration Business Flow
 * ==========================================================
 */

import type { PlayerRegistrationFormInput } from "@/lib/validation/player-form";

import { StorageService }
  from "@/lib/services/storage.service";

import { MeritService }
  from "@/lib/services/merit.service";

import { GradeService }
  from "@/lib/services/grade.service";

import { MigrationValidationService }
  from "@/lib/services/migration-validation.service";

import { PlayerService }
  from "@/lib/services/player.service";  


export class MigrationService {

  static async register(
  player: PlayerRegistrationFormInput
): Promise<Record<string, unknown>>


   {
      let profileScreenshotPath: string | null = null;

      let troopScreenshotPath: string | null = null;
      
      try {




  // ==========================================
// STEP 2
// Upload Profile Screenshot
// ==========================================

profileScreenshotPath =
  await StorageService.uploadProfileScreenshot(
    player.governorId,
    player.profileScreenshot

  );

console.log(
  "Profile Screenshot:",
  profileScreenshotPath
);

   // ==========================================
// STEP 3
// Upload Troop Screenshot
// ==========================================

troopScreenshotPath =
  await StorageService.uploadTroopScreenshot(
    player.governorId,
    player.troopScreenshot
  );

console.log(
  "Troop Screenshot:",
  troopScreenshotPath


);

//rollback test nanti disini

  // ==========================================
// STEP 4
// Calculate Merit Ratio
// ==========================================

const meritRatio =
  MeritService.calculate(
    player.power,
    player.merits
  );

console.log(
  "Merit Ratio:",
  meritRatio
);

    // ==========================================
// STEP 5
// Find Grade
// ==========================================

const grade =
  await GradeService.findGradeByPower(
    player.power
  );

if (!grade) {

  throw new Error(
    "Grade not found."
  );

}

console.log(
  "Grade:",
  grade.grade
);

// ==========================================
// STEP 6
// Build Player Registration
// ==========================================

const playerRegistration = {

  governorId: player.governorId,

  nickname: player.nickname,

  discordId: player.discordId,

  power: player.power,

  merits: player.merits,

  meritRatio,

  strongestTroopPower:
    player.strongestTroopPower,

  migrationTicketReady:
    player.migrationTicketReady,

  profileScreenshot:
    profileScreenshotPath,

  troopScreenshot:
    troopScreenshotPath,

  gradeId:
    grade.id,

  status:
    "Pending" as const,

  pendingReview:
    true,

  officerNote:
    null,

};

console.log(
  playerRegistration
);


// ==========================================
// STEP 7
// Validate Migration
// ==========================================

MigrationValidationService.validate(
  playerRegistration
);

// ==========================================
// STEP 8
// Save Player
// ==========================================

const savedPlayer =
  await PlayerService.savePlayer(
    playerRegistration
  );

console.log(
  "Player Saved:",
  savedPlayer
);

return savedPlayer;

} catch (error) {

  console.error(
    "Migration Error:",
    error
  );

  // Rollback Troop Screenshot
  if (troopScreenshotPath) {

    await StorageService.remove(
      troopScreenshotPath
    );

  }

  // Rollback Profile Screenshot
  if (profileScreenshotPath) {

    await StorageService.remove(
      profileScreenshotPath
    );

  }

  throw error;

}

}}