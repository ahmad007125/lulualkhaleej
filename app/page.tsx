import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[85vh] flex items-center">

        <Image
          src="/images/hero-img.png"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">

            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Reliable Heavy Equipment Rental &
              Transportation Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Serving Oil & Gas, Construction,
              Infrastructure and Logistics sectors
              throughout Saudi Arabia.
            </p>

            <div className="mt-8 flex gap-4">
              <Button size="lg">
                Explore Fleet
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">
                10+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">
                100+
              </h3>
              <p>Projects</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">
                50+
              </h3>
              <p>Equipment Units</p>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <h3 className="text-4xl font-bold">
                24/7
              </h3>
              <p>Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us */}

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mt-12">

            {[
              "Reliable Service",
              "Modern Fleet",
              "Safety First",
              "Professional Team",
              "Fast Response",
              "Competitive Pricing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-background p-8 border"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}

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

            {[
              "Boom Truck",
              "Flatbed",
              "Lowbed",
              "Forklift",
            ].map((vehicle) => (
              <div
                key={vehicle}
                className="overflow-hidden rounded-xl border"
              >
                <div className="h-48 bg-muted" />

                <div className="p-6">
                  <h3 className="font-semibold">
                    {vehicle}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready For Your Next Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact Lulu Al-Khaleej today for
            reliable equipment rental and
            transportation solutions.
          </p>

          <Button
            size="lg"
            className="mt-8"
          >
            Request Quote
          </Button>

        </div>
      </section>
    </>
  );
}