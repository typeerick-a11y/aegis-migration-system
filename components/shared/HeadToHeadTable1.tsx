type HeadToHead = {
  kingdom: string;
  win: number;
  lose: number;
};

type HeadToHeadTableProps = {
  data: HeadToHead[];
};

export default function HeadToHeadTable({
  data,
}: HeadToHeadTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900">

      <table className="w-full">

        <thead className="bg-yellow-500/10">

          {/* Desktop */}
          <tr className="hidden md:table-row">

            <th className="px-6 py-4 text-left text-yellow-400">
              Kingdom
            </th>

            <th className="px-6 py-4 text-center text-yellow-400">
              W
            </th>

            <th className="px-6 py-4 text-center text-yellow-400">
              L
            </th>

            <th className="px-6 py-4 text-center text-yellow-400">
              Win Rate
            </th>

          </tr>

          {/* Mobile */}
          <tr className="md:hidden">

            <th className="px-4 py-3 text-left text-xs font-semibold text-yellow-400">
              Kingdom
            </th>

            <th className="px-4 py-3 text-center text-xs font-semibold text-yellow-400">
              W-L
            </th>

            <th className="px-4 py-3 text-right text-xs font-semibold text-yellow-400">
              Rate
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => {

            const total = item.win + item.lose;

            const rate =
              total === 0
                ? 0
                : Math.round((item.win / total) * 100);

            return (

              <>
                {/* Desktop */}
                <tr
                  key={`${item.kingdom}-desktop`}
                  className="
                    hidden
                    md:table-row
                    border-t
                    border-zinc-800
                    hover:bg-zinc-800/50
                  "
                >

                  <td className="px-6 py-4 font-semibold">
                    {item.kingdom}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {item.win}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {item.lose}
                  </td>

                  <td className="px-6 py-4 text-center font-bold text-green-400">
                    {rate}%
                  </td>

                </tr>

                {/* Mobile */}
                <tr
                  key={`${item.kingdom}-mobile`}
                  className="
                    md:hidden
                    border-t
                    border-zinc-800
                  "
                >

                  <td className="px-4 py-3 text-sm font-semibold">
                    {item.kingdom}
                  </td>

                  <td className="px-4 py-3 text-center text-sm">
                    {item.win}-{item.lose}
                  </td>

                  <td className="px-4 py-3 text-right text-sm font-bold text-green-400">
                    {rate}%
                  </td>

                </tr>

              </>

            );

          })}

        </tbody>

      </table>

    </div>
  );
}