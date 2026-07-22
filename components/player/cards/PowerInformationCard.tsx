/**
 * ==========================================================
 * AEGIS Migration System
 * File : PowerInformationCard.tsx
 * Layer : Player Card Component
 * Description : Power Information Section
 * ==========================================================
 */

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFormContext } from "react-hook-form";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";

import { SectionHeader } from "../shared/SectionHeader";

export function PowerInformationCard() {

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
          title="Power Information"
          description="Enter your current account power information."
        />

      </CardHeader>

      <CardContent>

        <div className="grid gap-6">

          {/* Power */}

          <div className="space-y-2">

            <Label htmlFor="power">
              Power
            </Label>

            <Input
              id="power"
              type="number"
              inputMode="numeric"
              min={50000000}
              step={1}
              placeholder="Minimum 50,000,000"
              aria-invalid={!!clientErrors.power}
              {...register("power")}
            />

            {clientErrors.power && (
              <p className="text-sm text-red-500">
                {clientErrors.power.message}
              </p>
            )}

          </div>

          {/* Merits */}

          <div className="space-y-2">

            <Label htmlFor="merits">
              Merits
            </Label>

            <Input
              id="merits"
              type="number"
              inputMode="numeric"
              min={5000000}
              step={1}
              placeholder="Minimum 5,000,000"
              aria-invalid={!!clientErrors.merits}
              {...register("merits")}
            />

            {clientErrors.merits && (
              <p className="text-sm text-red-500">
                {clientErrors.merits.message}
              </p>
            )}

          </div>

          {/* Strongest Troop Power */}

          <div className="space-y-2">

            <Label htmlFor="strongestTroopPower">
              Strongest Troop Power
            </Label>

            <Input
              id="strongestTroopPower"
              type="number"
              inputMode="numeric"
              min={10000000}
              step={1}
              placeholder="Minimum 10,000,000"
              aria-invalid={
                !!clientErrors.strongestTroopPower
              }
              {...register("strongestTroopPower")}
            />

            {clientErrors.strongestTroopPower && (
              <p className="text-sm text-red-500">
                {clientErrors.strongestTroopPower.message}
              </p>
            )}

          </div>

        </div>

      </CardContent>

    </Card>
  );
}