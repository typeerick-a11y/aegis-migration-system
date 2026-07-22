/**
 * ==========================================================
 * AEGIS Migration System
 * File : MigrationCard.tsx
 * Layer : Player Card Component
 * Description : Migration Information Section
 * ==========================================================
 */

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import {
  Controller,
  useFormContext,
} from "react-hook-form";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";

import { SectionHeader } from "../shared/SectionHeader";

export function MigrationCard() {

  const { control } =
    useFormContext<PlayerRegistrationFormValues>();

  return (

    <Card>

      <CardHeader>

        <SectionHeader
          title="Migration"
          description="Migration ticket information."
        />

      </CardHeader>

      <CardContent>

        <div className="flex items-center space-x-3">

          <Controller
            name="migrationTicketReady"
            control={control}
            defaultValue={false}
            render={({ field }) => (

              <Checkbox
                id="migrationTicketReady"
                checked={field.value}
                onCheckedChange={(checked) =>
                  field.onChange(Boolean(checked))
                }
              />

            )}
          />

          <Label
            htmlFor="migrationTicketReady"
            className="cursor-pointer"
          >
            I already have a Migration Ticket ready.
          </Label>

        </div>

      </CardContent>

    </Card>

  );

}