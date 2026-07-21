import LegacyPanel from "@/components/shared/LegacyPanel";
import HallOfFameCard from "@/components/shared/HallOfFameCard";
import hallOfFame from "@/components/data/hallOfFame";

export default function HallPanel() {
  return (
    <LegacyPanel>

  <div className="mb-4 text-center">
  <p className="text-sm font-medium text-yellow-400">
    Limited Reward Recipient
  </p>
</div>

  <div
    className="
      grid
      grid-cols-2
      gap-4

      lg:grid-cols-3
      lg:gap-6
    "
  >
      

        {hallOfFame.map((player) => (
          <HallOfFameCard
            key={player}
            name={player}
          />
        ))}

      </div>

    </LegacyPanel>
  );
}