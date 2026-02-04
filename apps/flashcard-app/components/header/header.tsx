"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logo";

function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/">
          <Logo className="cursor-pointer" />
        </Link>

        <div className="border-color: var(--color-black) flex h-[52px] w-[300px] flex-row items-center justify-between rounded-[100px] border p-[4px] shadow-md shadow-black bg-white">
          <Link
            className={`flex h-full w-[50%] items-center justify-center rounded-[100px] font-bold transition-all ${
              pathname === "/" 
                ? "bg-yellow-500 border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" 
                : "text-gray-500 hover:text-black"
            }`}
            href="/"
          >
            Study Mode
          </Link>
          <Link
            className={`flex h-full w-[50%] items-center justify-center rounded-[100px] font-bold transition-all ${
              pathname === "/all-cards" 
                ? "bg-yellow-500 border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" 
                : "text-gray-500 hover:text-black"
            }`}
            href="/all-cards"
          >
            All Cards
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { Header };
