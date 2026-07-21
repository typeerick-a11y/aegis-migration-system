/**
 * ==========================================================
 * AEGIS Migration System
 * File : player-form.ts
 * Layer : Validation
 * Description : Browser Form Validation
 * ==========================================================
 */

import { z } from "zod";

export const PlayerRegistrationFormSchema = z.object({

  governorId: z
    .string()
    .trim()
    .min(1, "Governor ID wajib diisi"),

  nickname: z
    .string()
    .trim()
    .min(1, "Nickname wajib diisi"),

  discordId: z
    .string()
    .trim()
    .min(1, "Discord ID wajib diisi"),

  power: z.coerce
    .number()
    .nonnegative("Power tidak valid"),

  merits: z.coerce
    .number()
    .nonnegative("Merits tidak valid"),

  strongestTroopPower: z.coerce
    .number()
    .nonnegative("Strongest Troop Power tidak valid"),

  migrationTicketReady: z.boolean(),

  profileScreenshot: z.instanceof(File, {
    message: "Profile Screenshot wajib diupload",
  }),

  troopScreenshot: z.instanceof(File, {
    message: "Troop Screenshot wajib diupload",
  }),

});

export type PlayerRegistrationFormInput =
  z.infer<typeof PlayerRegistrationFormSchema>;