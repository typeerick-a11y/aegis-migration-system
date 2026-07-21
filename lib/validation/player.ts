/**
 * ==========================================================
 * AEGIS Migration System
 * File : player.ts
 * Layer : Validation
 * Description : Domain Validation
 * ==========================================================
 */

import { z } from "zod";

export const PlayerRegistrationSchema = z.object({

  governorId: z.string(),

  nickname: z.string(),

  discordId: z.string(),

  power: z.number().nonnegative(),

  merits: z.number().nonnegative(),

  meritRatio: z.number().nonnegative(),

  strongestTroopPower: z.number().nonnegative(),

  migrationTicketReady: z.boolean(),

  profileScreenshot: z.string(),

  troopScreenshot: z.string(),

  gradeId: z.string().nullable(),

  status: z.enum([
    "Pending",
    "Accepted",
    "Rejected",
  ]),

  pendingReview: z.boolean(),

  officerNote: z
    .string()
    .nullable()
    .optional(),

});

export type PlayerRegistrationInput =
  z.infer<typeof PlayerRegistrationSchema>;