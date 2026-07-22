"use client";

/**
 * ==========================================================
 * AEGIS Migration System
 * File : PlayerRegistrationForm.tsx
 * Layer : Component
 * Description : Player Registration Form
 * ==========================================================
 */

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { GovernorInformationCard } from "./cards/GovernorInformationCard";
import { PowerInformationCard } from "./cards/PowerInformationCard";
import { MigrationCard } from "./cards/MigrationCard";
import { ScreenshotCard } from "./cards/ScreenshotCard";

import { Button } from "@/components/ui/button";

import { registerPlayer } from "@/app/actions/register-player";

import type { ActionResult } from "@/lib/types/action";

const initialState: ActionResult = {
  success: true,
  message: "",
};

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
  const [state, formAction] =
    useActionState(
      registerPlayer,
      initialState
    );

  return (
    <form
      action={formAction}
      className="space-y-8"
    >
      {!state.success && state.message && (
        <div className="rounded-md border border-red-500 bg-red-50 p-4 text-red-600">
          {state.message}
        </div>
      )}

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