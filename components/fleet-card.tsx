import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  image: string;
  capacity: string;
  slug: string;
}

export default function FleetCard({
  name,
  image,
  capacity,
  slug,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="relative h-56">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="text-muted-foreground">
          Capacity: {capacity}
        </p>

        <Button
          asChild
          className="mt-4 px-5 py-3 !h-auto cursor-pointer"
        >
          <Link href={`/fleet/${slug}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}