"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClientsSlider from "@/components/clients-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { fleet } from "@/data/fleet";

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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  "/images/boom-banner.webp",
  "/images/banner.webp",
];

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
      {/* <section className="relative flex items-end md:aspect-[16/6] sm:aspect-[16/8] aspect-[16/9]">
        <Image
          src="/images/banner.webp"
          alt="Heavy Equipment"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-top"
        />

        <div className="container mx-auto sm:px-6 px-4 relative z-10 md:pb-18 sm:pb-10 pb-6">
          <h4 className="md:text-4xl sm:text-2xl text-xl text-end font-bold leading-normal text-white">Lulu Alkhaleej</h4>
          <p className="md:text-2xl sm:text-xl text-lg text-end text-white">YOUR PARTNER IN HEAVY LIFTING</p>
        </div>
      </section> */}

      <section className="relative flex items-end md:aspect-[16/6] sm:aspect-[16/8] aspect-[16/9] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="slide"
          speed={500}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full md:aspect-[16/6] sm:aspect-[16/8] aspect-[16/9]">
                <Image
                  src={slide}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto sm:px-6 px-4">
          <div className="grid md:gap-6 gap-0 md:grid-cols-4 grid-cols-2">
            <div className="border-r md:border-b-0 border-b border-chart-4 md:p-8 px-4 py-6 text-center">
              <h3 className="md:text-4xl sm:text-2xl text-xl font-bold">5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="md:border-r md:border-b-0 border-b border-chart-4 md:p-8 px-4 py-6 text-center">
              <h3 className="md:text-4xl sm:text-2xl text-xl font-bold">500+</h3>
              <p>Projects</p>
            </div>

            <div className="border-r border-chart-4 md:p-8 px-4 py-6 text-center">
              <h3 className="md:text-4xl sm:text-2xl text-xl font-bold">100+</h3>
              <p>Equipment Units</p>
            </div>

            <div className="md:p-8 px-4 py-6 text-center">
              <h3 className="md:text-4xl sm:text-2xl text-xl font-bold">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center">
            Our Services
          </h2>
          <p className="sm:mt-4 mt-2 text-center text-muted-foreground max-w-2xl mx-auto">A Powerful Fleet Built to Handle Every Challenge.</p>

          <div className="space-y-16">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 gap-8 items-center mt-12">
              <div className="max-w-3xl text-white mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold leading-normal text-foreground">
                  Reliable Boom Trucks
                </h1>

                <p className="md:mt-6 mt-4 text-md text-muted-foreground max-w-xl mx-auto">
                  Serving the Oil & Gas, Construction, Infrastructure, Industrial, and Logistics sectors across Saudi Arabia, we provide reliable boom truck rental services for lifting, transportation, equipment installation, loading and unloading, and site support operations. With a modern fleet, skilled operators, and a strong focus on safety, we deliver efficient solutions that keep your projects running smoothly and on schedule.
                </p>

                <div className="mt-6 flex gap-4">
                    
                    <Link
                      href="/services"
                      className="text-md hover:text-primary transition"
                      >
                      <Button size="lg" className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white">
                        Explore Services
                      </Button>
                    </Link>

                </div>
              </div>
              <div className="rounded-xl overflow-hidden w-full">
                <Image
                  src="/images/boomtruck-main.webp"
                  alt="Boom Trucks in Heavy Equipment"
                  fill
                  priority
                  className="object-cover object-top !relative"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-12 gap-8 items-center">
              <div className="rounded-xl overflow-hidden w-full">
                <Image
                  src="/images/lulu-lowbed.webp"
                  alt="Boom Trucks in Heavy Equipment"
                  fill
                  priority
                  className="object-cover object-top !relative"
                />
              </div>
              <div className="max-w-3xl text-white mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold leading-normal text-foreground">
                  Reliable Lowbed Trailers
                </h1>

                <p className="md:mt-6 mt-4 text-md text-muted-foreground max-w-xl mx-auto">
                  We provide reliable lowbed trailer rental services across Saudi Arabia for the transportation of heavy machinery, construction equipment, oversized cargo, and industrial loads. Our modern fleet, experienced operators, and focus on safety ensure efficient and dependable transport solutions for every project.
                </p>

                <div className="mt-8 flex gap-4">
                    
                    <Link
                      href="/services"
                      className="text-md hover:text-primary transition"
                      >
                      <Button size="lg" className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white">
                        Explore Services
                      </Button>
                    </Link>

                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 gap-8 items-center mt-12">
              <div className="max-w-3xl text-white mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold leading-normal text-foreground">
                  Reliable Flatbed Trailers
                </h1>

                <p className="md:mt-6 mt-4 text-md text-muted-foreground max-w-xl mx-auto">
                  From construction materials and steel structures to industrial equipment and general cargo, our flatbed trailer rental services provide safe, efficient, and reliable transportation across Saudi Arabia. Backed by a modern fleet, experienced drivers, and a strong commitment to safety, we help businesses keep operations running smoothly and projects on schedule.
                </p>

                <div className="mt-8 flex gap-4">
                    
                    <Link
                      href="/services"
                      className="text-md hover:text-primary transition"
                      >
                      <Button size="lg" className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-white">
                        Explore Services
                      </Button>
                    </Link>

                </div>
              </div>
              <div className="rounded-xl overflow-hidden w-full">
                <Image
                  src="/images/lulu-flat-bed.webp"
                  alt="Boom Trucks in Heavy Equipment"
                  fill
                  priority
                  className="object-cover object-top !relative"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <Image
          src="/images/bg-section.webp"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/60" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10">
          <h2 className="sm:text-4xl text-2xl font-bold text-center">
            Why Choose Us
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Your Reliable Partner for Heavy Lifting and Logistics Solutions</p>

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
      {/* <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/flatbed-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10">
          <h2 className="sm:text-4xl text-2xl font-bold text-center text-white">
            Our Fleet
          </h2>
          <p className="mt-4 text-center text-gray-200 max-w-2xl mx-auto">A Powerful Fleet Built to Handle Every Challenge.</p>
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
      </section> */}

      {/* Our Clients */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center">Our Clients</h2>
          <p className="sm:mt-4 mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
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
          src="/images/boom-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10">
          <h2 className="sm:text-4xl text-2xl font-bold text-center text-white">
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
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center text-foreground">
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