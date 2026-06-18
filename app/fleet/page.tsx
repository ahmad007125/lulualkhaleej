import FleetCard from "@/components/fleet-card";
import { fleet } from "@/data/fleet"; 
import Image from "next/image";

export default function FleetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative sm:min-h-[360px] min-h-[206px] flex items-center">
        <Image
          src="/images/hero-img.webp"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10 flex justify-center">
          <div className="max-w-3xl text-white mx-auto text-center sm:py-12 py-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Fleet
            </h1>

            <p className="mt-2 text-lg text-gray-200 max-w-xl">
              Serving Oil & Gas, Construction, Infrastructure and Logistics
              sectors throughout Saudi Arabia.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto sm:px-6 px-4">
          <h1 className="text-5xl font-bold text-center">
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
    </>
  );
}