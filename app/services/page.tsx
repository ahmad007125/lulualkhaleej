import ServiceCard from "@/components/service-card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
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
  );
}