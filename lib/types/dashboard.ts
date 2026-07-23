export interface DashboardStatistics {

  totalPlayers: number;

  pendingReview: number;

  acceptedPlayers: number;

  rejectedPlayers: number;

}

export interface RecentRegistration {

  id: string;

  governorId: string;

  nickname: string;

  power: number;

  grade: string;

  status: string;

  createdAt: string;

}