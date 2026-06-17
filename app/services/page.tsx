import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative sm:min-h-[360px] min-h-[206px] flex items-center">
        <Image
          src="/images/hero-img.png"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="max-w-3xl text-white mx-auto text-center sm:py-12 py-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal">
              Services
            </h1>

            <p className="mt-2 text-md sm:text-lg text-gray-200 max-w-xl mx-auto leading-normal">
            A modern and well-maintained fleet equipped to support projects across Saudi Arabia with safety, reliability, and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="sm:text-3xl text-2xl font-bold">
            Supporting Every Project Stage
          </h2>
          <p className="mt-4 sm:text-lg text-md leading-normal text-muted-foreground max-w-xl mx-auto">With a modern fleet and skilled operators, we provide reliable equipment and transport solutions that ensure productivity, safety, and efficiency from start to finish.</p>

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
      {/* CTA Section */}
      <section className="sm:py-24 py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="sm:text-4xl text-2xl font-bold">
            Ready For Your Next Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact Lulu Al-Khaleej today for reliable equipment rental and
            transportation solutions.
          </p>

          <Button
            size="lg"
            className="mt-8 px-5 py-3 !h-auto cursor-pointer"
            asChild
          >
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}