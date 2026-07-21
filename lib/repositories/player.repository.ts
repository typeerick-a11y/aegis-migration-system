/**
 * ==========================================================
 * AEGIS Migration System
 * File : player.repository.ts
 * Layer : Repository
 * Description : Player Database Access
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

export class PlayerRepository {

  /**
   * Cari player berdasarkan Governor ID
   */
  static async findByGovernorId(
    governorId: string
  ) {

    const { data, error } =
      await supabaseAdmin
        .from("players")
        .select("*")
        .eq("governor_id", governorId)
        .maybeSingle();

    if (error) {
      throw error;
    }

    return data;

  }

  /**
   * Insert Player
   */
  static async insert(
    payload: Record<string, unknown>
  ) {

    const { data, error } =
      await supabaseAdmin
        .from("players")
        .insert(payload)
        .select()
        .single();

    if (error) {
      throw error;
    }

    return data;

  }

  /**
   * Update Player
   */
  static async update(
    playerId: string,
    payload: Record<string, unknown>
  ) {

    const { data, error } =
      await supabaseAdmin
        .from("players")
        .update(payload)
        .eq("id", playerId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    return data;

  }

  /**
 * Find Player By ID
 */
static async findById(
  id: string
) {

  const { data, error } =
  await supabaseAdmin
    .from("players")
    .select(`
      *,
      grade_rules (
        grade
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;

}



}