import SectionTitle from "@/components/shared/SectionTitle";
import BattleHonorCard from "@/components/shared/BattleHonorCard";
import battleHonors from "@/components/data/battleHonors";

export default function BattleHonorSection() {
  return (
    <div className="mt-24">

      <SectionTitle
        title="Battle Honors"
        subtitle="Outstanding achievements in large-scale coalition battles."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        {battleHonors.map((battle) => (
          <BattleHonorCard
            key={battle.title}
            title={battle.title}
            rank={battle.rank}
            description={battle.description}
          />
        ))}

      </div>

    </div>
  );
}