import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClientsSlider from "@/components/clients-slider";
import { fleet } from "@/data/fleet";

import {
  ShieldCheck,
  Truck,
  HardHat,
  Users,
  Clock3,
  BadgeDollarSign,
  Building2,
  Factory,
  Route,
  Fuel,
  Award,
  Handshake,
  Star,
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

  const industries = [
    {
      title: "Oil & Gas",
      description:
        "Supporting upstream and downstream operations with reliable equipment.",
      icon: Fuel,
    },
    {
      title: "Construction",
      description:
        "Heavy machinery and transport for building and civil projects.",
      icon: Building2,
    },
    {
      title: "Infrastructure",
      description:
        "Equipment solutions for roads, bridges, and public works.",
      icon: Route,
    },
    {
      title: "Industrial & Logistics",
      description:
        "Material handling and fleet support for warehouses and plants.",
      icon: Factory,
    },
  ];

  const highlights = [
    {
      title: "Proven Track Record",
      description:
        "Over a decade of successful project deliveries across the Kingdom.",
      icon: Award,
    },
    {
      title: "Trusted Partnerships",
      description:
        "Long-term relationships with leading contractors and industrial clients.",
      icon: Handshake,
    },
    {
      title: "Excellence in Service",
      description:
        "Committed to quality, safety, and customer satisfaction on every job.",
      icon: Star,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/images/banner-img.png"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/70" />

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
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/flatbed-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Fleet
          </h2>
          <div className="grid gap-6 md:grid-cols-4 mt-12">
            {fleet.slice(0, 4).map((vehicle) => (
              <div
                key={vehicle.name}
                className="overflow-hidden rounded-xl border group hover:shadow-lg transition bg-background"
              >
                <div className="relative aspect-video w-full overflow-hidden">
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

      {/* Our Clients */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Our Clients</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across oil & gas, construction, and
            industrial sectors in Saudi Arabia.
          </p>
          <div className="mt-12">
            <ClientsSlider />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/boom-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 text-center text-gray-200 max-w-2xl mx-auto">
            Delivering specialized equipment solutions tailored to the unique
            demands of every sector we support.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-background/95 backdrop-blur-sm p-8 border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-xl mb-3">{item.title}</h3>

                  <p className="text-muted-foreground leading-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground">
            Built on Trust & Excellence
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">
            We leave a lasting impression through consistent quality, safety,
            and professional service on every project.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border bg-background p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-xl mb-3 text-foreground">{item.title}</h3>

                  <p className="text-muted-foreground leading-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
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
            asChild
          >
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}