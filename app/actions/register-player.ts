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

import { parseRegisterPlayer } from "@/lib/helpers/register-player-parser";
import { REGISTRATION_SUCCESS_COOKIE } from "@/lib/helpers/registration-cookie";

import { MigrationService } from "@/lib/services/migration.service";

import { PlayerRegistrationFormSchema } from "@/lib/validation/player-form";

import { redirect } from "next/navigation";

export async function registerPlayer(
  formData: FormData
): Promise<void> {

  console.log("================================");
  console.log("REGISTER PLAYER");
  console.log("================================");

  // ==========================================================
  // Parse FormData
  // ==========================================================

  const player =
    parseRegisterPlayer(formData);

  // ==========================================================
  // Browser Validation
  // ==========================================================

  const validation =
    PlayerRegistrationFormSchema.safeParse(player);

  if (!validation.success) {

    console.error(
      validation.error.flatten().fieldErrors
    );

    return;

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

  console.log(
  "Registration Success Cookie Saved."
);

redirect("/register/success");

  

}