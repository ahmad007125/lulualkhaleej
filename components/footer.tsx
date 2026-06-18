import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto sm:px-6 px-4">
        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="font-bold text-lg mb-4">
              Lulu Al-Khaleej
            </h3>

            <p className="text-muted-foreground">
              Reliable transport and heavy equipment rental
              solutions across Saudi Arabia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/fleet">Fleet</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p>Dallah Industrial Area</p>
            <p>Dammam, Saudi Arabia</p>
            <a href="mailto:info@lulualkhaleej.com" className="mt-1 block">
              info@lulualkhaleej.com
            </a>
            <a href="tel:+966505417597" className="mt-1 block">
              +966 505417597
            </a>
          </div>
        </div>

      </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Lulu Al-Khaleej for Rental Equipment.
        </div>
    </footer>
  );
}