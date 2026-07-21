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

import { SectionHeader } from "../shared/SectionHeader";

export function MigrationCard() {
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

          <Checkbox
            id="migrationTicketReady"
            name="migrationTicketReady"
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