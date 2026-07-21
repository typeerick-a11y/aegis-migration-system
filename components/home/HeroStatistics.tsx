import CountUp from "@/components/animations/CountUp";

const stats = [
  {
    icon: "👥",
    value: 84,
    label: "Registered",
  },
  {
    icon: "✅",
    value: 39,
    label: "Accepted",
  },
  {
    icon: "⏳",
    value: 45,
    label: "Pending",
  },
  {
    icon: "🏰",
    value: 6,
    label: "Alliances",
  },
];

export default function HeroStatistics() {
  return (
    <div className="mt-16">

      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">

        {stats.map((item, index) => (
          <div
            key={item.label}
            className="
              relative
              text-center
              group
            "
          >
            {/* Vertical Divider */}
            {index !== stats.length - 1 && (
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  h-12
                  w-px
                  -translate-y-1/2
                  bg-yellow-500/20
                  md:block
                "
              />
            )}

            <div
              className="
                text-3xl
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            <h3 className="mt-3 text-4xl font-black text-yellow-400">
              <CountUp
                value={item.value}
                digits={2}
              />
            </h3>

            <p
              className="
                mt-2
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              {item.label}
            </p>
          </div>
        ))}

      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

    </div>
  );
}