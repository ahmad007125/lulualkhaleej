import ServiceCard from "@/components/service-card";
import { services } from "@/data/services";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center">
        <Image
          src="/images/hero-img.png"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="max-w-3xl text-white mx-auto text-center py-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Services
            </h1>

            <p className="mt-2 text-lg text-gray-200 max-w-xl">
              Serving Oil & Gas, Construction, Infrastructure and Logistics
              sectors throughout Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Services
          </h1>

          <div className="grid gap-8 md:grid-cols-3 mt-14">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}