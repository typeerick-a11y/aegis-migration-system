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

export function GovernorInformationCard() {
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
              name="governorId"
              placeholder="123456789"
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="nickname">
              Nickname
            </Label>

            <Input
              id="nickname"
              name="nickname"
              placeholder="Your Governor Name"
            />

          </div>

          <div className="space-y-2 md:col-span-2">

            <Label htmlFor="discordId">
              Discord ID
            </Label>

            <Input
              id="discordId"
              name="discordId"
              placeholder="username"
            />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}