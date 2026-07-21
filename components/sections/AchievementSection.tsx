import achievements from "@/components/data/achievements";
import CountUp from "@/components/animations/CountUp";
import PremiumCard from "@/components/shared/PremiumCard";

export default function AchievementSection() {
  return (
    <div
      className="
        grid

        grid-cols-2
        gap-4

        xl:grid-cols-4
        md:grid-cols-2
        lg:gap-6
      "
    >
      {achievements.map((item) => (
        <PremiumCard
          key={item.title}
          className="
            p-4
            lg:p-8
          "
        >
          {/* Icon */}

          <div
            className="
              flex

              h-10
              w-10

              lg:h-16
              lg:w-16

              items-center
              justify-center

              text-3xl
              lg:text-5xl

              transition-transform
              duration-300

              group-hover:scale-110
            "
          >
            {item.icon}
          </div>

          {/* Value */}

          <h3
            className="
              mt-3

              text-3xl
              lg:text-5xl

              font-black
              text-yellow-400
            "
          >
            {typeof item.value === "number" ? (
              <CountUp
                value={item.value}
                digits={2}
              />
            ) : (
              item.value
            )}
          </h3>

          {/* Title */}

          <p
            className="
              mt-2

              text-xs
              lg:text-base

              leading-tight
              text-zinc-300
            "
          >
            {item.title}
          </p>

        </PremiumCard>
      ))}
    </div>
  );
}