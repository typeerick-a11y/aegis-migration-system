/**
 * ==========================================================
 * AEGIS Migration System
 * File : grade.repository.ts
 * Layer : Repository
 * Description : Grade Database Access
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

export class GradeRepository {

  static async getAllActive() {

    const { data, error } =
      await supabaseAdmin
        .from("grade_rules")
        .select("*")
        .eq("is_active", true)
        .order("display_order");

    if (error) {
      throw error;
    }

    return data;

  }

}