/**
 * ==========================================================
 * AEGIS Migration System
 * File : dashboard.repository.ts
 * Layer : Repository
 * Description : Dashboard Repository
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";

import type {
  DashboardStatistics,
  RecentRegistration,
} from "@/lib/types/dashboard";

export class DashboardRepository {

  static async getStatistics(): Promise<DashboardStatistics> {

    
  // ==========================================
  // Total Registered
  // ==========================================

  const {
    count: totalPlayers,
    error: totalError,
  } =
    await supabaseAdmin
      .from("players")
      .select("*", {
        count: "exact",
        head: true,
      });

  if (totalError) {

    throw new Error(
      "Failed to count players."
    );

  }

// ==========================================
// Pending Review
// ==========================================

const {
  count: pendingReview,
  error: pendingError,
} =
  await supabaseAdmin
    .from("players")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "Pending");

if (pendingError) {

  throw new Error(
    "Failed to count pending players."
  );

}

// ==========================================
// Accepted
// ==========================================

const {
  count: acceptedPlayers,
  error: acceptedError,
} =
  await supabaseAdmin
    .from("players")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "Accepted");

if (acceptedError) {

  throw new Error(
    "Failed to count accepted players."
  );

}

// ==========================================
// Rejected
// ==========================================

const {
  count: rejectedPlayers,
  error: rejectedError,
} =
  await supabaseAdmin
    .from("players")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "Rejected");

if (rejectedError) {

  throw new Error(
    "Failed to count rejected players."
  );

}



  return {

  totalPlayers:
    totalPlayers ?? 0,

  pendingReview:
    pendingReview ?? 0,

  acceptedPlayers:
    acceptedPlayers ?? 0,

  rejectedPlayers:
    rejectedPlayers ?? 0,

};



}static async getRecentRegistrations(): Promise<RecentRegistration[]> {

  const {
    data,
    error,
  } =
    await supabaseAdmin
      .from("players")
      .select(`
        id,
        governor_id,
        nickname,
        power,
        status,
        created_at,
        grade_rules (
          grade
        )
      `)
      .order("created_at", {
        ascending: false,
      })
      .limit(10);

  if (error || !data) {

    throw new Error(
      "Failed to load recent registrations."
    );

  }

  return data.map((player) => ({

    id: player.id,

    governorId:
      player.governor_id,

    nickname:
      player.nickname,

    power:
      player.power,

    grade:
  player.grade_rules?.[0]?.grade ?? "-",

    status:
      player.status,

    createdAt:
      player.created_at,

  }));

}

}