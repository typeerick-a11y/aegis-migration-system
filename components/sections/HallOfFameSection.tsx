import SectionTitle from "@/components/shared/SectionTitle";
import HallOfFameCard from "@/components/shared/HallOfFameCard";
import hallOfFame from "@/components/data/hallOfFame";

export default function HallOfFameSection() {
  return (
    <div className="mt-24">

      <SectionTitle
        title="Hall of Fame"
        subtitle="Players who earned the exclusive Stellar Champion Limited Reward."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {hallOfFame.map((player) => (
          <HallOfFameCard
            key={player}
            name={player}
          />
        ))}

      </div>

    </div>
  );
}