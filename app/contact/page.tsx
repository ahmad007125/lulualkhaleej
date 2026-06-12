import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactPage() {
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
            Contact Us
          </h1>

          <p className="mt-2 text-lg text-gray-200 max-w-xl">
            Providing reliable heavy equipment rental solutions across Saudi Arabia. Contact us today for inquiries, quotations, or project support.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-14">

          <div>
            <h2 className="text-2xl font-semibold">
              Get In Touch
            </h2>

            <p className="mt-6">
              Dallah Industrial Area,
              Dammam, Saudi Arabia
            </p>

            <a href="mailto:info@lulualkhaleej.com" className="mt-3 block">
              info@lulualkhaleej.com
            </a>

            <a href="tel:+966505417597" className="mt-3 block">
              +966 505417597
            </a>
          </div>

          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Company" />

            <Textarea
              placeholder="Message"
              rows={6}
            />

            <Button className="px-5 py-3 !h-auto cursor-pointer">
              Send Message
            </Button>
          </form>

        </div>
      </div>
    </section>
    </>
  );
}