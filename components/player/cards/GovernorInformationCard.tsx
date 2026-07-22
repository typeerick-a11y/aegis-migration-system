/**
 * ==========================================================
 * AEGIS Migration System
 * File : GovernorInformationCard.tsx
 * Layer : Player Card Component
 * Description : Governor Information Section
 * ==========================================================
 */

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SectionHeader } from "../shared/SectionHeader";
import { useFormContext } from "react-hook-form";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";


interface GovernorInformationCardProps {
  errors?: Record<string, string[]>;
}

export function GovernorInformationCard({
  errors,
}: GovernorInformationCardProps) {

  const {
  register,
  formState: {
    errors: clientErrors,
  },
} = useFormContext<PlayerRegistrationFormValues>();

  return (
    <Card>

      <CardHeader>

        <SectionHeader
          title="Governor Information"
          description="Enter your Governor account information."
        />

      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <Label htmlFor="governorId">
              Governor ID
            </Label>

            <Input
  id="governorId"
  placeholder="123456789"
  aria-invalid={
    !!clientErrors.governorId ||
    !!errors?.governorId
  }
  {...register("governorId")}
/>
{clientErrors.governorId && (
  <p className="text-sm text-red-500">
    {clientErrors.governorId.message}
  </p>
)}

{!clientErrors.governorId &&
  errors?.governorId && (
    <p className="text-sm text-red-500">
      {errors.governorId[0]}
    </p>
)}
          </div>

          <div className="space-y-2">

            <Label htmlFor="nickname">
              Nickname
            </Label>

           <Input
  id="nickname"
  placeholder="Your Governor Name"
  aria-invalid={
    !!clientErrors.nickname ||
    !!errors?.nickname
  }
  {...register("nickname")}
/>

{clientErrors.nickname && (
  <p className="text-sm text-red-500">
    {clientErrors.nickname.message}
  </p>
)}

{!clientErrors.nickname &&
  errors?.nickname && (
    <p className="text-sm text-red-500">
      {errors.nickname[0]}
    </p>
)}

          </div>

          <div className="space-y-2 md:col-span-2">

            <Label htmlFor="discordId">
              Discord Username
            </Label>

           <Input
  id="discordId"
  placeholder="your.discord.username"
  autoComplete="off"
  aria-invalid={
    !!clientErrors.discordId ||
    !!errors?.discordId
  }
  {...register("discordId")}
/>

{clientErrors.discordId && (
  <p className="text-sm text-red-500">
    {clientErrors.discordId.message}
  </p>
)}

{!clientErrors.discordId &&
  errors?.discordId && (
    <p className="text-sm text-red-500">
      {errors.discordId[0]}
    </p>
)}

          </div>

        </div>

      </CardContent>

    </Card>
  );
}