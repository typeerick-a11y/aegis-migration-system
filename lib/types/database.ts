export interface PlayerRecord {
  id: string;

  governor_id: string;
  nickname: string;
  discord_id: string;

  power: number;
  merits: number;
  merit_ratio: number;

  strongest_troop_power: number;

  migration_ticket_ready: boolean;

  profile_screenshot: string;
  troop_screenshot: string;

  grade_id: string;

  status: string;
  pending_review: boolean;

  officer_note: string | null;

  created_at: string;
  updated_at: string;
}