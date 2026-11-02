import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronDown, LogIn } from "lucide-react";

const navLinks = [
  { label: "Upcoming Events", href: "#"},
];

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[16px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[14px]" fill="currentColor" fillRule="evenodd" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4">
      <div className="mx-auto w-full max-w-[1760px] px-4 md:px-8 lg:px-12">
        {/* Top announcement bar */}
        <div className="flex justify-end mr-45">
          <div className="flex max-w-full items-center gap-0 border-t border-t-[#2b2b2b] rounded-t-[26px]
                          bg-[#dd7200] px-5 py-1 text-[12px] font-normal
                          text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                          sm:gap-8 sm:px-7">
            <p className="flex min-w-0 items-center gap-2">
              <span aria-hidden className="text-base">🤝</span>
              <span className="truncate">Are you prepared to assist them? Let&apos;s volunteer....</span>
            </p>
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <span>Follow Us</span>
              <span aria-hidden className="h-4 w-px bg-white/40" />
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/90 transition-colors hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav aria-label="Main" className="flex items-stretch rounded-3xl bg-[#FFF4D9] px-2 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] lg:rounded-full">
          <Link href="/" className="flex items-center self-center rounded-full px-3 lg:pl-4">
            <Image
              src="/images/kindora-logo.png"
              alt="Kindora"
              width={1994}
              height={438}
              className="h-12 w-auto lg:h-10"
            />
          </Link>

          {/* Yellow divider after the logo */}
          <span className="hidden w-[3px] self-stretch rounded-full bg-[#F5A704] sm:block lg:mx-7" />

          <ul className="flex flex-1 flex-wrap items-center justify-center
                         gap-x-6 gap-y-2 px-3 py-1 text-[15px] font-semibold text-[#14211c]
                         sm:text-sm lg:justify-start lg:pl-6 lg:py-0 xl:text-[15px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 transition-colors duration-300 hover:text-[#FF8500]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Login button */}
          <div className="flex items-center self-center pl-2 sm:pl-3 lg:pl-5">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-[#F5A704] px-5 py-2.5
              text-sm font-semibold text-[#4b4646] lg:px-7 lg:mr-6 border border-[#999999]
              transition-all duration-200 ease-out hover:-translate-y-[2px]
              hover:shadow-[0_3px_0_#000] active:translate-y-0 active:shadow-[0_1px_0_#000]
              "
            >
              <LogIn className="size-4" aria-hidden />
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
