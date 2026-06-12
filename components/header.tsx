"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";

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
  {
    name: "Fleet",
    href: "/fleet",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold">
              Lulu Al-Khaleej
            </h1>
          </Link>

          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-amber-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button>
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}