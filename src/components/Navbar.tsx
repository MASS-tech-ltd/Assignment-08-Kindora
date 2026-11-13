
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CalendarPlus,
  Settings,
  CalendarCheck,
  LogOut,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn } from "lucide-react";
import { BiMoon } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Bounce, toast } from "react-toastify";

const navLinks = [
  { label: "Upcoming Events", href: "/events" },
];

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[14px] md:size-[12px] size-[10px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[12px] md:size-[10px] size-[8px]" fill="currentColor" fillRule="evenodd" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[16px] md:size-[15px] size-[12px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="lg:size-[15px] md:size-[13px] size-[10px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

  const { data: session } = authClient.useSession()
  const user = session?.user;

  const handleLogOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.log(error);
      toast.error(error.message || "Logout failed!");
      return;
    }

    toast.success("Logged out successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  };


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
                          bg-[#dd7200] lg:px-5 md:px-4 lg:py-0 md:py-0 py-0 lg:text-[11px] md:text-[10px] text-[9px] font-normal
                          text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                          lg:gap-8 md:gap-3 gap-1.5 px-5">
            <p className="flex min-w-0 items-center gap-2">
              <span aria-hidden className=" md:text-xs text-[10px]">🤝</span>
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

          {/* Theme changing icon */}
          <button
            className={`md:text-lg text-xs flex justify-center items-center
                      bg-[#8c8b8a]/10 
                      text-[#8c8b8a] md:w-8 md:h-8 w-4.5 h-4.5
                        rounded-full transition-all duration-200
                      hover:bg-[#8c8b8a]/15
                        active:scale-90 cursor-pointer
                        ${user ? "md:mr-3.5 mr-2.5" : ""}`}
          >
            <BiMoon />
          </button>

          {/* User section */}
          {
            user ?
              <>{/* User avater start */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <div className="inline-flex items-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger
                              render={
                                <button
                                  type="button"
                                  className="flex items-center gap-1 sm:gap-1.5 outline-none"
                                />
                              }
                            >
                              <Avatar className="cursor-pointer w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 border-2 border-[#FF8500] shadow-sm">
                                <AvatarImage
                                  referrerPolicy="no-referrer"
                                  src={user?.image as string}
                                  alt="User"
                                  className="object-cover"
                                />
                                <AvatarFallback className="bg-[#282828] text-[#fff7ef]">
                                  {user?.name?.charAt(0) || "U"}
                                </AvatarFallback>
                              </Avatar>

                              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                              align="end"
                              sideOffset={8}
                              className="w-42 md:w-52 bg-[#efefef] lg:w-56 max-w-[calc(100vw-2rem)] rounded-xl md:p-1.5 p-1 shadow-lg"
                            >
                              {/* User Information */}
                              <DropdownMenuGroup>
                                <DropdownMenuLabel className="md:px-3 px-2.5 md:py-2 py-1.5">
                                  <p className="md:text-sm text-[13px] font-semibold text-gray-700 truncate">
                                    {user?.name}
                                  </p>

                                  <p className="md:text-xs text-[10px] font-normal text-gray-500 truncate">
                                    {user?.email}
                                  </p>
                                </DropdownMenuLabel>
                              </DropdownMenuGroup>

                              <DropdownMenuSeparator />

                              {/* Create Event */}
                              <DropdownMenuItem
                                render={<Link href="/create-event" />}
                                className="cursor-pointer gap-2 md:py-2 py-1.5 text-xs sm:text-sm"
                              >
                                <CalendarPlus className="w-4 h-4 shrink-0 text-[#ee7b00]" />
                                <span>Create Event</span>
                              </DropdownMenuItem>

                              {/* Manage Events */}
                              <DropdownMenuItem
                                render={<Link href="/manage-events" />}
                                className="cursor-pointer gap-2 md:py-2 py-1.5 text-xs sm:text-sm"
                              >
                                <Settings className="w-4 h-4 shrink-0 text-[#8B5CF6]" />
                                <span>Manage Events</span>
                              </DropdownMenuItem>

                              {/* Joined Events */}
                              <DropdownMenuItem
                                render={<Link href="/my-joined-events" />}
                                className="cursor-pointer gap-2 md:py-2 py-1.5 text-xs sm:text-sm"
                              >
                                <CalendarCheck className="w-4 h-4 shrink-0 text-[#ee7b00]" />
                                <span>Joined Events</span>
                              </DropdownMenuItem>

                              <DropdownMenuSeparator />

                              {/* Logout */}
                              <DropdownMenuItem
                                onClick={handleLogOut}
                                className="cursor-pointer font-medium gap-2 md:py-2 py-1.5
                                text-xs md:text-sm text-[#df0000] focus:text-red-600"
                              >
                                <LogOut className="md:w-4 w-2 md:h-4 h-2 shrink-0" />
                                <span>Logout</span>
                              </DropdownMenuItem>

                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      }
                    >
                      <span className="sr-only">User profile</span>
                    </TooltipTrigger>

                    <TooltipContent
                      side="bottom"
                      className="bg-[#1D271F] text-white border-none rounded-lg px-3 py-2 text-xs font-medium"
                    >
                      {user?.name || "User"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {/* User avater end */}

                {/* Logout button */}
                <div className="hidden md:block self-center pl-2 sm:pl-3">
                  <a
                    onClick={handleLogOut}
                    className={`cursor-pointer flex items-center
              md:gap-1.25 gap-1 lg:mr-6 md:mr-3.5 rounded-full
              md:px-2.25 px-1.5 lg:px-3
              md:py-1.5 py-0.75 lg:py-1.75
              lg:text-[13px] md:text-xs text-[9px]
              font-medium text-red-500 border transition-all duration-200 ease-out hover:-translate-y-[2px]
              hover:shadow-[0_2.5px_0_#e20000] active:translate-y-0 active:shadow-[0_1px_0_#000]
              ${isHomePage
                        ? " border-[#ff4e4e]"
                        : " border-[#ff4e4e]"
                      }`}
                  >
                    <LogOut className="lg:size-3.5 md:size-3 size-2.25" aria-hidden />
                    Logout
                  </a>
                </div>

              </> : <>

                {/* Login button */}
                <div className="flex items-center self-center pl-2 sm:pl-3">
                  <Link
                    href="/login"
                    className={`flex items-center
              md:gap-2 gap-1 lg:mr-6 md:mr-3.5 rounded-full
              md:px-2.25 px-1.5 lg:px-3
              md:py-1.5 py-0.75 lg:py-1.75
              lg:text-[13px] md:text-xs text-[9px]
              font-semibold text-[#4f4e4e] border transition-all duration-200 ease-out hover:-translate-y-[2px]
              hover:shadow-[0_2.5px_0_#000] active:translate-y-0 active:shadow-[0_1px_0_#000]
              ${isHomePage
                        ? "bg-[#ffb820] border-[#999999]"
                        : "bg-[#ffe6a8] border-[#ffc588]"
                      }`}
                  >
                    <LogIn className="lg:size-4 md:size-3.5 size-2.25" aria-hidden />
                    Login
                  </Link>
                </div></>
          }

        </nav>
      </div>
    </header>
  );
}
