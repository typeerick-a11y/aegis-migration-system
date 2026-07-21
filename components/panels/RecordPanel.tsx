import LegacyPanel from "@/components/shared/LegacyPanel";
import EventRecordCard from "@/components/shared/EventRecordCardProps";
import eventRecords from "@/components/data/eventRecords";

export default function RecordPanel() {
  return (
    <LegacyPanel>

      <div className="grid gap-6 md:grid-cols-3">

        {eventRecords.map((event) => (
          <EventRecordCard
            key={event.event}
            event={event.event}
            record={event.record}
            result={event.result}
          />
        ))}

      </div>

    </LegacyPanel>
  );
}