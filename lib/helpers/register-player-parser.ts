/**
 * ==========================================================
 * AEGIS Migration System
 * File : register-player-parser.ts
 * Layer : Helper
 * Description : Parse Register FormData
 * ==========================================================
 */

import type { PlayerRegistrationFormInput } from "@/lib/validation/player-form";

export function parseRegisterPlayer(
  formData: FormData
): PlayerRegistrationFormInput {

  return {

    governorId:
      String(formData.get("governorId") ?? ""),

    nickname:
      String(formData.get("nickname") ?? ""),

    discordId:
      String(formData.get("discordId") ?? ""),

    power:
      Number(formData.get("power")),

    merits:
      Number(formData.get("merits")),

    heroId:
      String(formData.get("heroId") ?? ""),

    troopType:
      String(formData.get("troopType") ?? "") as
        | "Sword"
        | "Pike"
        | "Archer"
        | "Cavalry",

    mainMarchPower:
      Number(formData.get("mainMarchPower")),

    migrationTicketReady:
      formData.get("migrationTicketReady") === "on",

    profileScreenshot:
      formData.get("profileScreenshot") as File,

    troopScreenshot:
      formData.get("troopScreenshot") as File,

  };

}