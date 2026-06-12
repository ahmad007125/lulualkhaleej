export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-5xl font-bold">
          About Us
        </h1>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          At Lulu Al-Khaleej, we specialize in
          providing reliable transport and heavy
          equipment rental solutions across
          Saudi Arabia.
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
  );
}