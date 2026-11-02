import Image from "next/image";
import { ArrowUpRight, CalendarPlus } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden  pb-24 pt-44 sm:pt-48 lg:min-h-[900px] lg:pb-32 lg:pt-[360px]">
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

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-6 md:px-10 lg:px-12">
        <div className="max-w-[680px] lg:mt-0 md:mt-20 mt-20">
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
              className="h-3 lg:w-[66px] md:w-[56px] w-[42px] shrink-0"
            >
              <path d="M1 6h56" />
              <path d="M52 1.5 57.5 6 52 10.5" />
              <circle cx="1" cy="6" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            <span className="font-kaushan text-[#FF8500] leading-none lg:text-[26px] md:text-lg text-sm">
              Together, we can make a difference
            </span>
          </div>

          {/* Heading */}
          <h1 className="lg:mt-4 md:mt-3 mt-2 font-bold leading-tight tracking-[-0.01em] text-white text-[36px] md:text-[56px] lg:text-[74px]">
            Together We Can <br className="hidden sm:block" />
            Make <span className="text-[#F5A704]">Life Better</span>
          </h1>

          <p className="lg:mt-8 md:mt-6 mt-5 lg:max-w-137.5 md:max-w-105 max-w-75 leading-[1.65] text-[#fff9ea] lg:text-[17px] md:text-[13px] text-xs">
            Every act of kindness has the power to change a life. Join hands with your community, take part in meaningful events, and help build a better tomorrow for everyone.
          </p>

          {/* CTAs */}
          <div className="lg:mt-9 mt-6 flex flex-col md:flex-row items-start md:items-center md:gap-4 gap-3.5">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F5A704]
                         lg:px-7 lg:py-3.5 md:px-6 md:py-2.75 px-4 py-1.5 lg:text-[15px] md:text-[13px] text-[11px] font-semibold text-white border-b border-b-[black]              
                         transition-all duration-200 ease-out hover:-translate-y-0.5
                         hover:shadow-[0_3px_0_#fff] active:translate-y-0 active:shadow-[0_1px_0_#fff]"
            >
              Explore Upcomming Events
              <ArrowUpRight
                className="lg:size-4 md:size-3.5 size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#fff1ce] lg:px-7 lg:py-3.5 md:px-6 md:py-2.75 px-4 py-1.5 lg:text-[15px] md:text-[13px] text-[11px] font-semibold text-[#171717]
              border-b border-b-[black]              
                         transition-all duration-200 ease-out hover:-translate-y-0.5
                         hover:shadow-[0_3px_0_#fff] active:translate-y-0 active:shadow-[0_1px_0_#fff]"
            >
              <CalendarPlus className="lg:size-4 md:size-3.5 size-2.75" aria-hidden />
              Create an Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
