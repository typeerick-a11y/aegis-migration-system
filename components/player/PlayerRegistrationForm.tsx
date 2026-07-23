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
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";

import { GovernorInformationCard } from "./cards/GovernorInformationCard";
import { PowerInformationCard } from "./cards/PowerInformationCard";
import { MigrationCard } from "./cards/MigrationCard";
import { ScreenshotCard } from "./cards/ScreenshotCard";

import { Button } from "@/components/ui/button";

import { registerPlayer } from "@/app/actions/register-player";

import type { ActionResult } from "@/lib/types/action";
import type { Hero }
  from "@/lib/types/hero";



import {
  PlayerRegistrationFormSchema,
  type PlayerRegistrationFormValues
} from "@/lib/validation/player-form";

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

interface PlayerRegistrationFormProps {

  heroes: Hero[];

}

export function PlayerRegistrationForm({
  heroes,
}: PlayerRegistrationFormProps) {

  const [state, formAction] =
    useActionState(
      registerPlayer,
      initialState
    );

  const form =
  useForm<PlayerRegistrationFormValues>({
      resolver: zodResolver(
        PlayerRegistrationFormSchema
      ),
      mode: "onChange",
    });

 return (

  <FormProvider {...form}>

    <form
      action={formAction}
      className="space-y-8"
    >

      {!state.success && state.message && (

        <div className="rounded-md border border-red-500 bg-red-50 p-4 text-red-600">

          {state.message}

        </div>

      )}

      <GovernorInformationCard
        errors={state.errors}
      />

      <PowerInformationCard
        heroes={heroes}
/>

      <MigrationCard />

      <ScreenshotCard />

      <div className="flex justify-end">

        <SubmitButton />

      </div>

    </form>

  </FormProvider>

);

}