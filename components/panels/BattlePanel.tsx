import LegacyPanel from "@/components/shared/LegacyPanel";
import BattleHonorCard from "@/components/shared/BattleHonorCard";
import battleHonors from "@/components/data/battleHonors";

export default function BattlePanel() {
  return (
    <LegacyPanel>

      <div className="grid gap-6 md:grid-cols-2">

        {battleHonors.map((battle) => (
          <BattleHonorCard
            key={battle.title}
            title={battle.title}
            rank={battle.rank}
            description={battle.description}
          />
        ))}

      </div>

    </LegacyPanel>
  );
}