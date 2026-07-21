/**
 * ==========================================================
 * AEGIS Migration System
 * File : player.ts
 * Layer : Domain Type
 * Description : Player Domain Model
 * ==========================================================
 */

export type PlayerStatus =
  | "Pending"
  | "Accepted"
  | "Rejected";

export interface PlayerRegistration {

  governorId: string;

  nickname: string;

  discordId: string;

  power: number;

  merits: number;

  meritRatio: number;

  strongestTroopPower: number;

  migrationTicketReady: boolean;

  profileScreenshot: string;

  troopScreenshot: string;

  gradeId: string | null;

  status: PlayerStatus;

  pendingReview: boolean;

  officerNote?: string | null;

}