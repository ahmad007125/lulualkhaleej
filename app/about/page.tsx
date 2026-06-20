import Image from "next/image";
import { Eye, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    title: "Mission",
    description: "Deliver safe and reliable equipment solutions.",
    icon: Target,
  },
  {
    title: "Vision",
    description: "Become Saudi Arabia's preferred rental partner.",
    icon: Eye,
  },
  {
    title: "Values",
    description: "Safety, Reliability, Integrity.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative sm:min-h-[360px] min-h-[206px] flex items-center">
        <Image
          src="/images/boom-trucks.webp"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10 flex justify-center">
          <div className="max-w-3xl text-white mx-auto text-center sm:py-12 py-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal">
              About Us
            </h1>
            <p className="mt-2 text-md sm:text-lg text-gray-200 max-w-xl mx-auto leading-normal">
              Serving Oil & Gas, Construction, Infrastructure and Logistics
              sectors throughout Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto sm:px-6 px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Who We Are</h2>

          <p className="mt-4 text-lg leading-normal text-muted-foreground max-w-xl mx-auto">
            Trusted heavy equipment rental and transport services across Saudi Arabia for construction and industrial projects.
          </p>

          <div className="overflow-hidden rounded-xl mt-10">
            <Image
              src="/images/team.webp"
              alt="Team Image"
              fill
              priority
              className="object-cover object-top !relative"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-background p-8 border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-left"
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto sm:px-6 px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center">Message from CEO</h2>

          {/* <div className="grid md:grid-cols-[280px_1fr] mt-14 items-start"> */}
          <div className="grid mt-8 items-start">
            <div className="mx-auto md:mx-0">
              {/* <div className="relative w-full h-[300px] rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/images/ceo-placeholder.svg"
                  alt="CEO - Lulu Al-Khaleej"
                  fill
                  className="object-cover"
                />
              </div> */}
              {/* <div className="mt-5 text-center md:text-left">
                <h3 className="font-semibold text-lg">Arshad Ghumman</h3>
                <p className="text-muted-foreground text-sm">
                  Chief Executive Officer
                </p>
              </div> */}
            </div>

            <div className="rounded-xl bg-background border px-8 py-12 text-center">
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At Lulu Al-Khaleej, our commitment goes beyond providing
                equipment<br></br> we partner with our clients to ensure their projects
                succeed safely, on time, and within budget. Since our founding,
                we have built our reputation on reliability, professional
                service, and a deep understanding of the Saudi industrial
                landscape.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Whether you need boom trucks, cranes, forklifts, or heavy
                transportation, our team is ready to deliver solutions tailored
                to your project needs. Thank you for trusting Lulu Al-Khaleej as
                your equipment rental partner.
              </p>
              <p className="mt-6 font-semibold">Arshad Ghumman, CEO</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="sm:py-24 py-16 bg-slate-900 text-white">
        <div className="container mx-auto sm:px-6 px-4 text-center">
          <h2 className="sm:text-4xl text-2xl font-bold">
            Ready For Your Next Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact Lulu Al-Khaleej today for reliable equipment rental and
            transportation solutions.
          </p>

          <Button
            size="lg"
            className="mt-8 px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white"
            asChild
          >
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
