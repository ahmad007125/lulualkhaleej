"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  // {
  //   name: "Fleet",
  //   href: "/fleet",
  // },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="hidden sm:flex h-20 items-center justify-between">
          <Link href="/">
            <Image
              src="/images/lulu-logo.png"
              alt="Crane"
              width={80}
              height={46}
            />
          </Link>

          <nav className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="px-5 py-3 !h-auto cursor-pointer" asChild>
              <a href="tel:+966505417597">
                Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-4 h-auto items-center justify-between pt-4 pb-2">
          <div className="flex items-center justify-between gap-3 w-full">
            <Link href="/">
              <Image
                src="/images/lulu-logo.png"
                alt="Crane"
                width={80}
                height={46}
              />
            </Link>


            <div className="flex items-center gap-3">
              <ThemeToggle />

              <Button className="px-5 py-3 !h-auto cursor-pointer" asChild>
                <a href="tel:+966505417597">
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <nav className="flex justify-between gap-8 w-full">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}