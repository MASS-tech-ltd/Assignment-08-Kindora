
"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn } from "lucide-react";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";

const navLinks = [
  { label: "Upcoming Events", href: "#" },
];

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[16px] md:size-[12px] size-[10px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[14px] md:size-[10px] size-[8px]" fill="currentColor" fillRule="evenodd" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[18px] md:size-[15px] size-[12px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[18px] md:size-[13px] size-[10px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 lg:pt-4 md:pt-6 pt-5 ${isHomePage ? "" : "lg:pt-6 md:pt-5 pt-0"
        }`}
    >
      <div className="mx-auto w-full max-w-[1760px] px-4 md:px-8 lg:px-12">

        {/* Top announcement bar */}
        <div
          className={`flex justify-end lg:mr-45 md:mr-16 mr-12 ${isHomePage ? "" : "hidden"
            }`}
        >
          <div className="flex max-w-full items-center border-t border-t-[#2b2b2b] rounded-t-[26px]
                          bg-[#dd7200] lg:px-5 md:px-4 lg:py-0.5 md:py-0 py-0 lg:text-[12px] md:text-[10px] text-[9px] font-normal
                          text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                          lg:gap-8 md:gap-3 gap-1.5 px-5">
            <p className="flex min-w-0 items-center gap-2">
              <span aria-hidden className="lg:text-base md:text-sm text-[10px]">🤝</span>
              <span className="truncate hidden md:block">Are you prepared to assist them? Let&apos;s volunteer....</span>
            </p>
            <div className="shrink-0 items-center lg:gap-3 md:gap-2 gap-2 flex">
              <span>Follow Us</span>
              <span aria-hidden className="md:h-4 h-2 w-px bg-white/40" />
              <div className="flex items-center lg:gap-3 md:gap-1.75 gap-1.25">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/90 transition-colors duration-300 hover:text-[#656565]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav
          aria-label="Main"
          className={`flex items-center  rounded-3xl md:pl-4 lg:pl-0 lg:px-0 md:px-1 px-2.25 py-2 md:py-2.5 lg:py-3 transition-all duration-300 ${isHomePage
            ? "bg-[#FFF4D9] shadow-[0_18px_50px_rgba(0,0,0,0.18)] lg:rounded-full"
            : "bg-[#fef9eb] border md:pl-4 lg:pl-0 px-3 md:px-0 mt-1 md:mt-1 py-3 md:py-3 lg:py-0 rounded-4xl md:rounded-4xl lg:rounded-full border-[#ffcb93] shadow-md"
            }`}
        >
          <Link href="/" className="flex items-center self-center rounded-full lg:pl-4">
            <Image
              src="/images/kindora-logo.png"
              alt="Kindora"
              width={1994}
              height={438}
              className="w-auto h-5 md:h-7 lg:h-10"
            />
          </Link>

          {/* Yellow divider after the logo */}
          <span className={`lg:w-0.75 md:w-0.5 w-0.5 self-stretch rounded-full mx-2 md:mx-2 lg:mx-7 ${isHomePage ? "bg-[#F5A704]" : "bg-[#ffd4a5]"
            }`} />

          <ul className="flex flex-1 flex-wrap items-center justify-center
                        lg:justify-start lg:pl-6 lg:py-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex lg:text-sm md:text-[13px] text-[10px] font-semibold items-center transition-colors duration-300 hover:text-[#FF8500]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Login button */}
          <button
            className="md:text-lg text-xs flex justify-center items-center
              bg-[#8c8b8a]/10 
               text-[#8c8b8a] md:w-8 md:h-8 w-4.5 h-4.5
               rounded-full transition-all duration-200
               hover:bg-[#8c8b8a]/15
               active:scale-90 cursor-pointer"
          >
            <BiMoon />
          </button>
          <div className="flex items-center self-center pl-2 sm:pl-3">
            <Link
              href="/login"
              className={`flex items-center
              md:gap-2 gap-1 lg:mr-6 md:mr-3.5 rounded-full
              md:px-2.25 px-1.5 lg:px-3
              md:py-1.5 py-0.75 lg:py-1.75
              lg:text-sm md:text-xs text-[9px]
              font-semibold text-[#4b4646] border transition-all duration-200 ease-out hover:-translate-y-[2px]
              hover:shadow-[0_2.5px_0_#000] active:translate-y-0 active:shadow-[0_1px_0_#000]
              ${isHomePage
                  ? "bg-[#F5A704] border-[#999999]"
                  : "bg-[#ffe6a8] border-[#ffc588]"
                }`}
            >
              <LogIn className="lg:size-4 md:size-3.5 size-2.25" aria-hidden />
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
