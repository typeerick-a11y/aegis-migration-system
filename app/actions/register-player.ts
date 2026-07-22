"use server";

/**
 * ==========================================================
 * AEGIS Migration System
 * File : register-player.ts
 * Layer : Server Action
 * Description : Register Player Action
 * ==========================================================
 */

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { parseRegisterPlayer } from "@/lib/helpers/register-player-parser";
import { REGISTRATION_SUCCESS_COOKIE } from "@/lib/helpers/registration-cookie";

import { MigrationService } from "@/lib/services/migration.service";

import { PlayerRegistrationFormSchema } from "@/lib/validation/player-form";

import type { ActionResult } from "@/lib/types/action";

export async function registerPlayer(
  prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {

  console.log("================================");
  console.log("REGISTER PLAYER");
  console.log("================================");

  try {

    // ==========================================================
    // Parse FormData
    // ==========================================================

    const player =
      parseRegisterPlayer(formData);

      console.log("========== FORM DATA ==========");

for (const [key, value] of formData.entries()) {
  console.log(key, value);
}

console.log("===============================");

    // ==========================================================
    // Server Validation
    // ==========================================================

    const validation =
  PlayerRegistrationFormSchema.safeParse(player);

if (!validation.success) {

  console.log("==========================");
  console.log("VALIDATION ERROR");
  console.log(validation.error.flatten());
  console.log("==========================");

  return {
    success: false,
    message: "Validation failed.",
    errors: validation.error.flatten().fieldErrors,
  };

}

    const validatedPlayer =
      validation.data;

    // ==========================================================
    // Register Player
    // ==========================================================

    const savedPlayer =
      await MigrationService.register(
        validatedPlayer
      );

    const playerRecord =
      savedPlayer as { id: string };

    // ==========================================================
    // Save Success Cookie
    // ==========================================================

    const cookieStore =
      await cookies();

    cookieStore.set(
      REGISTRATION_SUCCESS_COOKIE,
      playerRecord.id,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60,
        path: "/",
      }
    );

  } catch (error) {

    console.error(error);

    return {

      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Registration failed.",

    };

  }

  redirect("/register/success");

}