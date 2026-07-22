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

    const {
      data: grades,
      error: gradesError,
    } =
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

      // ======================================================
      // Registered Players
      // ======================================================

      const {
        count: registeredCount,
        error: registeredError,
      } =
        await supabaseAdmin
          .from("players")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("grade_id", grade.id);

      if (registeredError) {

        throw new Error(
          "Failed to count registered players."
        );

      }

      // ======================================================
      // Accepted Players
      // ======================================================

      const {
        count: acceptedCount,
        error: acceptedError,
      } =
        await supabaseAdmin
          .from("players")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("grade_id", grade.id)
          .eq("status", "Accepted");

      if (acceptedError) {

        throw new Error(
          "Failed to count accepted players."
        );

      }

      // ======================================================
      // Result
      // ======================================================

      result.push({

        id: grade.id,

        grade: grade.grade,

        slots: grade.slots,

        registered:
          registeredCount ?? 0,

        accepted:
          acceptedCount ?? 0,

        remaining:
          Math.max(
            grade.slots - (registeredCount ?? 0),
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