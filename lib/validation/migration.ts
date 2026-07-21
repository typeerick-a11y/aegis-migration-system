/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration.ts
 * Layer : Validation
 * Description : Migration Validation
 * ==========================================================
 */

import { z } from "zod";

/* ==========================================================
   Migration Settings
========================================================== */

export const MigrationSettingsSchema = z.object({

  registrationOpen: z.boolean(),

  minimumPower: z.coerce
    .number()
    .int()
    .nonnegative("Minimum Power tidak valid"),

  maximumPower: z.coerce
    .number()
    .int()
    .nonnegative("Maximum Power tidak valid"),

  minimumKillPoints: z.coerce
    .number()
    .int()
    .nonnegative("Minimum Kill Points tidak valid"),

  requiredMigrationTickets: z.coerce
    .number()
    .int()
    .nonnegative("Jumlah Migration Ticket tidak valid"),

  targetKingdom: z.coerce
    .number()
    .int()
    .positive("Target Kingdom tidak valid"),

});

/* ==========================================================
   Export Types
========================================================== */

export type MigrationSettingsInput =
  z.infer<typeof MigrationSettingsSchema>;