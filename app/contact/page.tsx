import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Dallah,+Dammam,+Eastern+Province,+Saudi+Arabia&z=14&output=embed";

export default function ContactPage() {
  return (
    <>
      <section className="relative sm:min-h-[360px] min-h-[206px] flex items-center">
        <Image
          src="/images/contact-us.webp"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto sm:px-6 px-4 relative z-10 flex justify-center">
          <div className="max-w-3xl text-white mx-auto text-center sm:py-12 py-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal">
              Contact Us
            </h1>

            <p className="mt-2 text-md sm:text-lg text-gray-200 max-w-xl mx-auto leading-normal">
              Providing reliable heavy equipment rental solutions across Saudi
              Arabia. Contact us today for inquiries, quotations, or project
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-14">
            <div>
              <h3 className="sm:text-2xl text-xl font-semibold">Contact Information</h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="mt-1 text-muted-foreground">
                      Dallah Industrial Area,
                      <br />
                      Dammam, Eastern Province,
                      <br />
                      Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@lulualkhaleej.com"
                      className="mt-1 block text-muted-foreground hover:text-primary transition"
                    >
                      info@lulualkhaleej.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+966505417597"
                      className="mt-1 block text-muted-foreground hover:text-primary transition"
                    >
                      +966 505417597
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input placeholder="Company" />

              <Textarea placeholder="Message" rows={6} />

              <Button className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-slate-900">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto sm:px-6 px-4">
          <h2 className="sm:text-3xl text-2xl font-bold text-center mb-3">Our Location</h2>
          <p className="text-center text-muted-foreground mb-10">
            Dallah, Dammam, Eastern Province, Saudi Arabia
          </p>
          <div className="overflow-hidden rounded-xl border aspect-[4/3] md:aspect-[16/7]">
            <iframe
              src={MAP_EMBED_URL}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lulu Al-Khaleej location - Dallah, Dammam, Saudi Arabia"
            />
          </div>
        </div>
      </section>
    </>
  );
}
