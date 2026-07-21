import SectionTitle from "@/components/shared/SectionTitle";
import EventRecordCard from "@/components/shared/EventRecordCardProps";
import eventRecords from "@/components/data/eventRecords";

export default function EventRecordSection() {
  return (
    <div className="mt-24">

      <SectionTitle
        title="Event Records"
        subtitle="Competitive performance across major kingdom events."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {eventRecords.map((event) => (
          <EventRecordCard
            key={event.event}
            event={event.event}
            record={event.record}
            result={event.result}
          />
        ))}

      </div>

    </div>
  );
}