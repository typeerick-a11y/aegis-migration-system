/**
 * ==========================================================
 * AEGIS Migration System
 * File : migration-status.repository.ts
 * Layer : Repository
 * Description : Migration Status Repository
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

import type {
  MigrationStatus,
} from "@/lib/types/migration-status";

export class MigrationStatusRepository {

  static async getAll(): Promise<MigrationStatus[]> {

    const { data: grades, error: gradesError } =
      await supabaseAdmin
        .from("grade_rules")
        .select("*")
        .eq("is_active", true)
        .order("display_order");

    if (gradesError || !grades) {

      throw new Error(
        "Failed to load grade rules."
      );

    }

    const result: MigrationStatus[] = [];

    for (const grade of grades) {

      const { count, error } =
        await supabaseAdmin
          .from("players")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("grade_id", grade.id);

      if (error) {

        throw new Error(
          "Failed to count registered players."
        );

      }

      result.push({

        id: grade.id,

        grade: grade.grade,

        slots: grade.slots,

        registered: count ?? 0,

        remaining:
          Math.max(
            grade.slots - (count ?? 0),
            0
          ),

        badgeColor:
          grade.badge_color,

        displayOrder:
          grade.display_order,

      });

    }

    return result;

  }

}