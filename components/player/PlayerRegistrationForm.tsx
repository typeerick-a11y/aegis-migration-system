"use client";

/**
 * ==========================================================
 * AEGIS Migration System
 * File : PlayerRegistrationForm.tsx
 * Layer : Component
 * Description : Player Registration Form
 * ==========================================================
 */

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { GovernorInformationCard } from "./cards/GovernorInformationCard";
import { PowerInformationCard } from "./cards/PowerInformationCard";
import { MigrationCard } from "./cards/MigrationCard";
import { ScreenshotCard } from "./cards/ScreenshotCard";
import { Button } from "@/components/ui/button";

import { registerPlayer } from "@/app/actions/register-player";


function SubmitButton() {

  const { pending } = useFormStatus();

  return (

    <Button
      type="submit"
      size="lg"
      className="w-full"
      disabled={pending}
    >

      {pending
        ? "Submitting..."
        : "Submit Registration"}

    </Button>

  );

}
export function PlayerRegistrationForm() {

  // ==========================================================
  // Governor
  // ==========================================================

  const [governorId, setGovernorId] =
    useState("");

  const [nickname, setNickname] =
    useState("");

  const [discordId, setDiscordId] =
    useState("");

  // ==========================================================
  // Power
  // ==========================================================

  const [power, setPower] =
    useState("");

  const [merits, setMerits] =
    useState("");

  const [strongestTroopPower, setStrongestTroopPower] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
  useState(false);

  return (
    <form
  action={registerPlayer}
  className="space-y-8"
>

  <GovernorInformationCard />

  <PowerInformationCard />

  <MigrationCard />

  <ScreenshotCard />

   <div className="flex justify-end">

   <SubmitButton />

  </div>

</form>

    
    

  );

  
}