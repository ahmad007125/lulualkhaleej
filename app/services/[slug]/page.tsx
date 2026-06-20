import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Lulu Al-Khaleej`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative min-h-[360px] flex items-end">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10 pb-12">
          <Button
            variant="secondary"
            size="sm"
            className="sm:mb-6 mb-2 px-4 py-2 !h-auto"
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            {service.title}
          </h1>
          <p className="sm:mt-4 mt-2 text-md sm:text-lg text-gray-200 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto sm:px-6 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="sm:text-3xl text-2xl font-bold">Overview</h2>
              <p className="sm:mt-6 mt-2 text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 rounded-xl border p-8 bg-muted">
            <h3 className="text-xl font-semibold">Applications</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {service.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-lg bg-background border px-5 py-4"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-3xl text-2xl font-bold text-center">Related Services</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-xl border bg-background hover:shadow-lg transition"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto sm:px-6 px-4 text-center">
          <h2 className="sm:text-3xl text-2xl font-bold text-white">Need {service.title}?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-slate-300">
            Contact our team for availability, pricing, and project support
            across Saudi Arabia.
          </p>
          <Button
            size="lg"
            className="mt-8 px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white"
            asChild
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
