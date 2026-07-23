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

export type TroopType =
  | "Sword"
  | "Pike"
  | "Archer"
  | "Cavalry";

export interface PlayerRegistration {

  governorId: string;

  nickname: string;

  discordId: string;

  power: number;

  merits: number;

  /**
   * Calculated automatically by backend.
   * meritRatio = merits / power
   */
  meritRatio: number;

  /**
   * Main March
   */
  heroId: string | null;

  troopType: TroopType | null;

  mainMarchPower: number;

  /**
   * Migration
   */
  migrationTicketReady: boolean;

  /**
   * Screenshots
   */
  profileScreenshot: string;

  troopScreenshot: string;

  /**
   * System
   */
  gradeId: string | null;

  status: PlayerStatus;

  pendingReview: boolean;

  officerNote?: string | null;

}