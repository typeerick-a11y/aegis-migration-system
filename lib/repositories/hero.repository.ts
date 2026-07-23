/**
 * ==========================================================
 * AEGIS Migration System
 * File : hero.repository.ts
 * Layer : Repository
 * Description : Hero Database Access
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

export class HeroRepository {

  /**
   * Get All Heroes
   */
  static async findAll() {

    const { data, error } =
      await supabaseAdmin
        .from("heroes")
        .select("*")
        .order("name", {
          ascending: true,
        });

    if (error) {
      throw error;
    }

    return data;

  }

}