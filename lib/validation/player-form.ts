/**
 * ==========================================================
 * AEGIS Migration System
 * File : player-form.ts
 * Layer : Validation
 * Description : Browser & Server Form Validation
 * ==========================================================
 */

import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const PlayerRegistrationFormSchema = z.object({

  governorId: z
    .string()
    .trim()
    .min(1, "Governor ID wajib diisi")
    .regex(/^\d+$/, "Governor ID hanya boleh berisi angka"),

  nickname: z
    .string()
    .trim()
    .min(1, "Nickname wajib diisi")
    .max(30, "Nickname maksimal 30 karakter"),

  discordId: z
  .string()
  .trim()
  .min(1, "Discord Username wajib diisi")
  .max(32, "Discord Username maksimal 32 karakter"),

  power: z.coerce
    .number()
    .positive("Power harus lebih dari 0"),

  merits: z.coerce
    .number()
    .positive("Merits harus lebih dari 0"),

  strongestTroopPower: z.coerce
    .number()
    .positive("Strongest Troop Power harus lebih dari 0"),

  migrationTicketReady: z.boolean(),

  profileScreenshot: z
    .instanceof(File, {
      message: "Profile Screenshot wajib diupload",
    })
    .refine(
      (file) => file.size > 0,
      "Profile Screenshot wajib diupload"
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Ukuran Profile Screenshot maksimal 5 MB"
    )
    .refine(
      (file) => ALLOWED_IMAGE_TYPES.includes(file.type),
      "Format Profile Screenshot harus JPEG, PNG, atau WEBP"
    ),

  troopScreenshot: z
    .instanceof(File, {
      message: "Troop Screenshot wajib diupload",
    })
    .refine(
      (file) => file.size > 0,
      "Troop Screenshot wajib diupload"
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Ukuran Troop Screenshot maksimal 5 MB"
    )
    .refine(
      (file) => ALLOWED_IMAGE_TYPES.includes(file.type),
      "Format Troop Screenshot harus JPEG, PNG, atau WEBP"
    ),

});

export type PlayerRegistrationFormInput =
  z.infer<typeof PlayerRegistrationFormSchema>;