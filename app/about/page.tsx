import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
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
            About Us
          </h1>

          <p className="mt-2 text-lg text-gray-200 max-w-xl">
            Serving Oil & Gas, Construction, Infrastructure and Logistics
            sectors throughout Saudi Arabia.
          </p>
        </div>
      </div>
    </section>

    {/* Main section */}
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold">
          Who We Are
        </h2>

        <p className="mt-4 text-lg leading-normal text-muted-foreground max-w-xl mx-auto">
          We are a leading heavy equipment rental company providing reliable machinery and transport solutions across Saudi Arabia for construction, industrial, and infrastructure projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Mission
            </h3>
            <p className="mt-3 text-muted-foreground">
              Deliver safe and reliable equipment
              solutions.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Vision
            </h3>
            <p className="mt-3 text-muted-foreground">
              Become Saudi Arabia's preferred
              rental partner.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Values
            </h3>
            <p className="mt-3 text-muted-foreground">
              Safety, Reliability, Integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}