/**
 * ==========================================================
 * AEGIS Migration System
 * File : PowerInformationCard.tsx
 * Layer : Player Card Component
 * Description : Power Information Section
 * ==========================================================
 */

"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFormContext } from "react-hook-form";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";

import type {
  Hero,
} from "@/lib/types/hero";

import { SectionHeader } from "../shared/SectionHeader";
import { HeroCombobox } from "../shared/HeroCombobox";

interface PowerInformationCardProps {
  heroes: Hero[];
}

export function PowerInformationCard({
  heroes,
}: PowerInformationCardProps) {

  const {
    register,
    setValue,
    watch,
    formState: {
      errors: clientErrors,
    },
  } = useFormContext<PlayerRegistrationFormValues>();

  const selectedHero =
    watch("heroId") ?? "";

  const selectedTroopType =
    watch("troopType") ?? "";

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

          {/* Main Hero */}

          <div className="space-y-2">

            <Label>
              Main Hero
            </Label>

            <HeroCombobox
              heroes={heroes}
              value={selectedHero}
              onChange={(value) =>
                setValue(
                  "heroId",
                  value,
                  {
                    shouldValidate: true,
                  }
                )
              }
            />

            <Input
  type="hidden"
  {...register("heroId")}
/>

            {clientErrors.heroId && (

              <p className="text-sm text-red-500">
                {clientErrors.heroId.message}
              </p>

            )}

          </div>

          {/* Troop Type */}

          <div className="space-y-2">

            <Label>
              Troop Type
            </Label>

            <Select
            
              value={selectedTroopType}
              onValueChange={(value) => {

                setValue(
                  "troopType",
                  value as
                    | "Sword"
                    | "Pike"
                    | "Archer"
                    | "Cavalry",
                  {
                    shouldValidate: true,
                  }
                );

              }}
            >

              <SelectTrigger>

                <SelectValue
                  placeholder="Select troop type"
                />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="Sword">
                  Sword
                </SelectItem>

                <SelectItem value="Pike">
                  Pike
                </SelectItem>

                <SelectItem value="Archer">
                  Archer
                </SelectItem>

                <SelectItem value="Cavalry">
                  Cavalry
                </SelectItem>

              </SelectContent>

            </Select>
              <Input
  type="hidden"
  {...register("troopType")}
/>
            {clientErrors.troopType && (

              <p className="text-sm text-red-500">
                {clientErrors.troopType.message}
              </p>

            )}

          </div>

          {/* Main March Power */}

          <div className="space-y-2">

            <Label htmlFor="mainMarchPower">
              Main March Power
            </Label>

            <Input
              id="mainMarchPower"
              type="number"
              inputMode="numeric"
              min={10000000}
              step={1}
              placeholder="Minimum 10,000,000"
              aria-invalid={
                !!clientErrors.mainMarchPower
              }
              {...register("mainMarchPower")}
            />

            {clientErrors.mainMarchPower && (

              <p className="text-sm text-red-500">
                {clientErrors.mainMarchPower.message}
              </p>

            )}

          </div>

        </div>

      </CardContent>

    </Card>

  );

}