/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-settings.repository.ts
 * Layer : Repository
 * Description : Migration Settings Repository
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

import type {
  MigrationSettings,
} from "@/lib/types/migration-settings";

export class MigrationSettingsRepository {

  static async getSettings(): Promise<MigrationSettings> {

    const { data, error } =
      await supabaseAdmin
        .from("migration_settings")
        .select("*")
        .single();

    if (error || !data) {

      throw new Error(
        "Failed to load migration settings."
      );

    }

    return {

      id: data.id,

      kingdomName: data.kingdom_name,

      kingdomNumber: data.kingdom_number,

      previewStart: data.preview_start,

      regularStart: data.regular_start,

      freeStart: data.free_start,

      migrationEnd: data.migration_end,

      registrationOpen:
        data.registration_open,

      discordInvite:
        data.discord_invite,

      announcement:
        data.announcement,

      createdAt:
        data.created_at,

      updatedAt:
        data.updated_at,

    };

  }

}