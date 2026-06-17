import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServiceNotFound() {
  return (
    <section className="py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="sm:text-4xl text-2xl font-bold">Service Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The service you are looking for does not exist.
        </p>
        <Button className="mt-8 px-5 py-3 !h-auto" asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
