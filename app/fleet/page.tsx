import FleetCard from "@/components/fleet-card";
import { fleet } from "@/data/fleet";

export default function FleetPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold">
          Our Fleet
        </h1>

        <div className="grid gap-8 md:grid-cols-3 mt-14">
          {fleet.map((vehicle) => (
            <FleetCard
              key={vehicle.slug}
              {...vehicle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}