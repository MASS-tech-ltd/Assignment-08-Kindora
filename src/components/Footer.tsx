
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Headphones,
    Mail,
    Send,
} from "lucide-react";
import BackToTop from "./BackToTop";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Events", href: "/events" },
    { name: "Our Campaign", href: "/campaigns" },
    { name: "Events Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
];

const OurCommunity = [
    { name: "Community Stories", href: "/" },
    { name: "Volunteer Network", href: "/" },
    { name: "Upcoming Events", href: "/" },
    { name: "Success Stories", href: "/" },
    { name: "Our Social Impact", href: "/" },
    { name: "Support a Campaign", href: "/" },
];
const projects = [
    { name: "Community Events", href: "/events" },
    { name: "Volunteer Programs", href: "/events" },
    { name: "Education Support", href: "/events" },
    { name: "Health & Care", href: "/events" },
    { name: "Environmental Care", href: "/events" },
    { name: "Social Campaigns", href: "/events" },
];

const Footer = () => {
    return (
        <footer
            id="top"
            className="relative pt-5 bg-cover bg-center bg-no-repeat text-white"

            style={{
                backgroundImage: `
                         linear-gradient(
                            rgba(3, 25, 20, 0.96),
                             rgba(3, 25, 20, 0.99)
                            ),
                            url('/images/Footer-bg-image2.png')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Newsletter Section */}
                <div className="flex flex-col items-center justify-between gap-8 border-b border-white/20 py-12 md:flex-row md:py-16 lg:px-3">

                    <div className="text-center md:text-left">
                        <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl lg:text-[40px]">
                            Subscribe to Our Newsletter
                        </h2>

                        <p className="mt-3 font-inter text-sm text-white/60 sm:text-base">
                            Stay connected with us and never miss an opportunity to make a difference.
                        </p>
                    </div>

                    <form className="flex w-full max-w-[450px] items-center rounded-full border-2 border-white bg-white p-1 md:w-[42%]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-3 font-inter text-sm text-[#333] outline-none placeholder:text-gray-500 sm:px-6"
                        />

                        <button
                            type="submit"
                            aria-label="Subscribe to newsletter"
                            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#087D68] text-white transition-all duration-300 hover:bg-[#F07800]"
                        >
                            <Send size={22} />
                        </button>
                    </form>

                </div>

                {/* Main Footer */}
                <div className="grid grid-cols-1 md:gap-14 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:py-14 lg:py-16">

                    {/* Column 1: Brand Information */}
                    <div className="lg:text-left text-center md:text-left">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/images/Footer-logo2.png"
                                alt="Kindora Logo"
                                width={190}
                                height={60}
                                className="h-auto w-[185px] object-contain"
                            />
                        </Link>

                        <div className="lg:block md:block flex justify-center">
                            <p className="mt-2 max-w-[290px] font-inter text-sm leading-[22px] text-white/65">
                                Every act of kindness has the power to change a life.
                                Join hands with Kindora and help build a better,
                                happier, and stronger community.
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="lg:block md:block flex justify-center">
                            <div className="mt-7 flex items-center gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#087D68]">
                                    <Headphones size={21} />
                                </div>

                                <div>
                                    <p className="font-inter text-xs text-white/55">
                                        Call Us:
                                    </p>
                                    <a
                                        href="tel:+8801XXXXXXXXX"
                                        className="block font-inter text-base font-semibold text-white transition-colors hover:text-[#F5A704]"
                                    >
                                        +880 9638-267943
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="lg:block md:block flex justify-center">
                            <div className="mt-5 flex items-center gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F5A704]">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <p className="font-inter text-xs text-white/55">
                                        Email Us:
                                    </p>
                                    <a
                                        href="mailto:hello@kindora.org"
                                        className="block break-all font-inter text-sm font-semibold text-white transition-colors hover:text-[#F5A704] sm:text-base"
                                    >
                                        hellobd@kindora.org
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="mx-auto w-fit lg:mx-0 lg:ml-18 md:ml-14">
                        <h3 className="relative mb-9 w-fit pb-3 font-poppins text-xl font-bold text-white">
                            Quick Links
                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F5A704]" />
                            <span className="absolute bottom-0 left-0 h-[4px] w-4 bg-white" />
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex w-fit items-center gap-3 font-inter text-sm text-white/60 transition-colors duration-300 hover:text-[#F5A704]"
                                    >
                                        <ChevronRight
                                            size={17}
                                            className="shrink-0 text-[#F5A704] transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Community */}
                    <div className="mx-auto w-fit md:mx-0 lg:mx-0 lg:ml-14">
                        <h3 className="relative mb-9 w-fit pb-3 font-poppins text-xl font-bold text-white">
                            Our Community
                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F5A704]" />
                            <span className="absolute bottom-0 left-0 h-[4px] w-4 bg-white" />
                        </h3>

                        <ul className="space-y-4">
                            {OurCommunity.map((community, index) => (
                                <li key={`${community.name}-${index}`}>
                                    <Link
                                        href={community.href}
                                        className="group flex w-fit items-center gap-3 font-inter text-sm text-white/60 transition-colors duration-300 hover:text-[#F5A704]"
                                    >
                                        <ChevronRight
                                            size={17}
                                            className="shrink-0 text-[#F5A704] transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                        {community.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Our Projects */}
                    <div className="mx-auto w-fit lg:mx-0 lg:ml-14 md:ml-14">
                        <h3 className="relative mb-9 w-fit pb-3 font-poppins text-xl font-bold text-white">
                            Our Projects
                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F5A704]" />
                            <span className="absolute bottom-0 left-0 h-[4px] w-4 bg-white" />
                        </h3>

                        <ul className="space-y-4">
                            {projects.map((project, index) => (
                                <li key={`${project.name}-${index}`}>
                                    <Link
                                        href={project.href}
                                        className="group flex w-fit items-center gap-3 font-inter text-sm text-white/60 transition-colors duration-300 hover:text-[#F5A704]"
                                    >
                                        <ChevronRight
                                            size={17}
                                            className="shrink-0 text-[#F5A704] transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                        {project.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Bottom Bar */}
            <div className="bg-[#036956]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left">

                    <p className="font-inter text-xs text-white sm:text-sm">
                        © Copyright 2026 Kindora. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 font-inter text-xs text-white sm:text-sm">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-[#ffdf51]"
                        >
                            Privacy Policy
                        </Link>

                        <span className="h-5 w-px bg-white/30" />

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-[#ffdf51]"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>
            </div>

            {/* Back To Top Button */}
            <BackToTop></BackToTop>

        </footer>
    );
};

export default Footer;
