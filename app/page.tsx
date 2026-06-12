import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fleet } from "@/data/fleet";

import {
  ShieldCheck,
  Truck,
  HardHat,
  Users,
  Clock3,
  BadgeDollarSign,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      title: "Reliable Service",
      description:
        "Consistent and dependable equipment rental solutions delivered on time.",
      icon: ShieldCheck,
    },
    {
      title: "Modern Fleet",
      description:
        "Well-maintained boom trucks, forklifts, trailers, and cranes.",
      icon: Truck,
    },
    {
      title: "Safety First",
      description:
        "Strict safety standards and certified operators for every project.",
      icon: HardHat,
    },
    {
      title: "Professional Team",
      description:
        "Experienced staff dedicated to supporting your operational needs.",
      icon: Users,
    },
    {
      title: "Fast Response",
      description:
        "Quick quotations, mobilization, and customer support whenever needed.",
      icon: Clock3,
    },
    {
      title: "Competitive Pricing",
      description:
        "Cost-effective rental packages without compromising quality.",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/images/hero-img.png"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white mx-auto text-center py-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Reliable Heavy Equipment Rental &
              Transportation Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-200 text-center max-w-xl mx-auto">
              Serving Oil & Gas, Construction, Infrastructure and Logistics
              sectors throughout Saudi Arabia.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="px-5 py-3 !h-auto cursor-pointer">
                Explore Fleet
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="px-5 py-3 !h-auto cursor-pointer"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">100+</h3>
              <p>Projects</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">50+</h3>
              <p>Equipment Units</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-background p-8 border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Our Fleet
          </h2>
          <div className="grid gap-6 md:grid-cols-4 mt-12">
            {fleet.slice(0, 4).map((vehicle) => (
              <div
                key={vehicle.name}
                className="overflow-hidden rounded-xl border group hover:shadow-lg transition"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold">{vehicle.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready For Your Next Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact Lulu Al-Khaleej today for reliable equipment rental and
            transportation solutions.
          </p>

          <Button
            size="lg"
            className="mt-8 px-5 py-3 !h-auto cursor-pointer"
          >
            Request Quote
          </Button>
        </div>
      </section>
    </>
  );
}