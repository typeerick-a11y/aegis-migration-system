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

const ScreenshotSchema = z
  .instanceof(File, {
    message: "Screenshot wajib diupload",
  })
  .refine(
    (file) => file.size > 0,
    {
      message: "Screenshot wajib diupload",
    }
  )
  .refine(
    (file) => file.size <= MAX_FILE_SIZE,
    {
      message: "Ukuran screenshot maksimal 5 MB",
    }
  )
  .refine(
    (file) => ALLOWED_IMAGE_TYPES.includes(file.type),
    {
      message: "Format file harus JPG, PNG, atau WEBP",
    }
  );

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
    .min(
      50000000,
      "Power minimal 50.000.000"
    ),

  merits: z.coerce
    .number()
    .min(
      5000000,
      "Merits minimal 5.000.000"
    ),

  heroId: z
    .string()
    .uuid("Hero wajib dipilih"),

  troopType: z.enum(
    [
      "Sword",
      "Pike",
      "Archer",
      "Cavalry",
    ],
    {
      message: "Troop Type wajib dipilih",
    }
  ),

  mainMarchPower: z.coerce
    .number()
    .min(
      10000000,
      "Main March Power minimal 10.000.000"
    ),

  migrationTicketReady: z.boolean(),

  profileScreenshot: ScreenshotSchema,

  troopScreenshot: ScreenshotSchema,

});

export type PlayerRegistrationFormValues =
  z.input<typeof PlayerRegistrationFormSchema>;

export type PlayerRegistrationFormInput =
  z.output<typeof PlayerRegistrationFormSchema>;