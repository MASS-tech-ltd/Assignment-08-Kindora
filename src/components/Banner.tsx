import Image from "next/image";
import { ArrowUpRight, CalendarPlus } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden  pb-24 pt-44 sm:pt-48 lg:min-h-[900px] lg:pb-32 lg:pt-[300px]">
      {/* Background photo */}
      <Image
        src="/images/bannerImg2.png"
        alt="Banner photo"
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark green wash so the copy stays readable, photo clear on the right */}
      {/* <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-dark from-[4%] via-brand-dark/85 via-[52%] to-transparent to-[76%]"
      /> */}
      {/* Extra shading at the top so the navbar sits on a dark surface */}
      {/* <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-dark/75 via-brand-dark/30 to-transparent"
      /> */}

      {/* Decorative dotted heart */}
      <svg
        aria-hidden
        viewBox="0 0 130 60"
        fill="none"
        stroke="currentColor"
        className="pointer-events-none absolute bottom-12 left-[47%] hidden h-24 w-52 text-brand-orange/55 lg:block"
      >
        <path
          d="M28 46c-9-7-15-13-15-21a9.5 9.5 0 0 1 15-7.6A9.5 9.5 0 0 1 43 25c0 8-6 14-15 21z"
          strokeWidth="1.8"
        />
        <circle cx="58" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="69" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="79" cy="17" r="2" fill="currentColor" stroke="none" />
        <circle cx="90" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="101" cy="15" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="113" cy="10" r="2" fill="currentColor" stroke="none" />
        <circle cx="124" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-4 md:px-8 lg:px-12">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[#FF8500]">
            <svg
              aria-hidden
              viewBox="0 0 66 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-[66px] shrink-0"
            >
              <path d="M1 6h56" />
              <path d="M52 1.5 57.5 6 52 10.5" />
              <circle cx="1" cy="6" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            <span className="font-kaushan text-[#FF8500] text-[22px] leading-none sm:text-[26px]">
              Together, we can make a difference
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-[42px] font-bold leading-[1.25] tracking-[-0.01em] text-white sm:text-[56px] lg:text-[74px]">
            Together We Can <br className="hidden sm:block" />
            Make <span className="text-[#F5A704]">Life Better</span>
          </h1>

          <p className="mt-8 max-w-[550px] text-[15.5px] leading-[1.65] text-[#fff9ea] sm:text-[17px]">
            Every act of kindness has the power to change a life. Join hands with your community, take part in meaningful events, and help build a better tomorrow for everyone. Together, we can make every little effort count.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F5A704]
                         px-7 py-3.5 text-[15px] font-semibold text-white border-b border-b-[black]              
                         transition-all duration-200 ease-out hover:-translate-y-[2px]
                         hover:shadow-[0_3px_0_#fff] active:translate-y-0 active:shadow-[0_1px_0_#fff]"
            >
              Explore Upcomming Events
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#fff1ce] px-7 py-3.5 text-[15px] font-semibold text-[#171717]
              border-b border-b-[black]              
                         transition-all duration-200 ease-out hover:-translate-y-[2px]
                         hover:shadow-[0_3px_0_#fff] active:translate-y-0 active:shadow-[0_1px_0_#fff]"
            >
              <CalendarPlus className="size-4" aria-hidden />
              Create an Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
