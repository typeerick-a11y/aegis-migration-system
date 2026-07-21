export type Achievement = {
  title: string;
  value: number | string;
  icon: string;
};

export type EventRecord = {
  event: string;
  record: string;
  result: string;
};

export type BattleHonor = {
  title: string;
  rank: string;
  description: string;
};

export type HeadToHead = {
  kingdom: string;
  win: number;
  lose: number;
};

export type Alliance = {
  tag: string;
  name: string;
  logo: string;
};