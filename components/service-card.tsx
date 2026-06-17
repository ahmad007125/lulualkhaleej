import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function ServiceCard({
  title,
  image,
  description,
  slug,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 text-left">
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-muted-foreground text-sm">
          {description}
        </p>

        <Button
          asChild
          className="mt-5 px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-slate-900"
        >
          <Link href={`/services/${slug}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}