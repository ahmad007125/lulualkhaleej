import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
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

            <p className="mt-3">
              info@lulualkhaleej.com
            </p>

            <p className="mt-3">
              +966 XX XXX XXXX
            </p>
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

            <Button>
              Send Message
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}