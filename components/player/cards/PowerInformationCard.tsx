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

import { SectionHeader } from "../shared/SectionHeader";

export function PowerInformationCard() {
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

          <div className="space-y-2">

            <Label htmlFor="power">
              Power
            </Label>

            <Input
              id="power"
              name="power"
              type="number"
              placeholder="50000000"
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="merits">
              Merits
            </Label>

            <Input
              id="merits"
              name="merits"
              type="number"
              placeholder="250"
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="strongestTroopPower">
              Strongest Troop Power
            </Label>

            <Input
              id="strongestTroopPower"
              name="strongestTroopPower"
              type="number"
              placeholder="12000000"
            />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}