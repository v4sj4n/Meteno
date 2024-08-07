"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "My Profile", href: "/profile" },
  ];
  return (
    <nav className="h-20 w-full px-16 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/metenoLogo.png"
          alt="logo"
          priority={false}
          width={100}
          height={100}
        />
      </Link>

      <ul className="flex gap-2">
        {navLinks.map(({ href, title }) => (
          <li key={title}>
            <Link
              href={href}
              className={clsx("text-zinc-500", {
                "font-bold text-zinc-700": pathname === href,
              })}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
