/**
 * ==========================================================
 * AEGIS Migration System
 * File : officer.ts
 * Layer : Validation
 * Description : Officer Validation
 * ==========================================================
 */

import { z } from "zod";

/* ==========================================================
   Login
========================================================== */

export const OfficerLoginSchema = z.object({

  email: z
    .string()
    .trim()
    .email("Email tidak valid"),

  password: z
    .string()
    .min(6, "Password minimal 6 karakter"),

});

/* ==========================================================
   Create Officer
========================================================== */

export const CreateOfficerSchema = z.object({

  fullName: z
    .string()
    .trim()
    .min(2, "Nama wajib diisi"),

  email: z
    .string()
    .trim()
    .email("Email tidak valid"),

  role: z.enum([
    "Super Admin",
    "Officer",
    "Viewer",
  ]),

});

/* ==========================================================
   Update Officer
========================================================== */

export const UpdateOfficerSchema = CreateOfficerSchema.partial();

/* ==========================================================
   Export Types
========================================================== */

export type OfficerLoginInput =
  z.infer<typeof OfficerLoginSchema>;

export type CreateOfficerInput =
  z.infer<typeof CreateOfficerSchema>;

export type UpdateOfficerInput =
  z.infer<typeof UpdateOfficerSchema>;