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
  // {
  //   separator: "|", 
  // },
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
      <div className="container mx-auto sm:px-6 px-4">
        <div className="hidden sm:flex h-20 items-center justify-between">
          <Link href="/">
            <Image
              src="/images/lulu-logo.webp"
              alt="Crane"
              width={80}
              height={39}
            />
          </Link>

          <nav className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="sm:text-md text-sm hover:text-primary transition"
                >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-slate-900 !font-bold" asChild>
              <a href="tel:+966505417597">
                Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="sm:hidden flex flex-col sm:gap-4 gap-3 h-auto items-center justify-between sm:pt-4 pt-3 pb-2">
          <div className="flex items-center justify-between gap-3 w-full">
            <Link href="/">
              <Image
                src="/images/lulu-logo.webp"
                alt="Crane"
                width={80}
                height={39}
              />
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <Button className="px-5 py-3 !h-auto cursor-pointer !font-bold !text-md text-slate-900 !font-bold" asChild>
                <a href="tel:+966505417597">
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <nav className="flex items-center justify-between w-full pt-3 border-t pb-1">
            {links.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="sm:text-md text-sm hover:text-primary transition"
                >
                  {link.name}
                </Link>

                {/* {index < links.length - 1 && (
                  <span className="mx-3 w-[1px] h-[16px] bg-border"></span>
                )} */}
              </div>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}