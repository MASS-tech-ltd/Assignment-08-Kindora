
import Image from "next/image";
import {
    HandHeart,
    PackageOpen,
    House,
    Heart,
    HandHelping,
} from "lucide-react";

const features = [
    {
        id: 1,
        title: "Economic Empowerment",
        description:
            "Empowering individuals through job training, financial literacy, and small business support to create sustainable livelihoods.",
        icon: HandHeart,
    },
    {
        id: 2,
        title: "Clean Water and Sanitation",
        description:
            "Empowering individuals through job training, financial literacy, and small business support to create sustainable livelihoods.",
        icon: PackageOpen,
    },
    {
        id: 3,
        title: "Housing and Shelter Initiatives",
        description:
            "Empowering individuals through job training, financial literacy, and small business support to create sustainable livelihoods.",
        icon: House,
    },
];

const WhatWeDo = () => {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 md:px-10 mt-32 md:mt-42 lg:mt-60">
            <div className="mx-auto grid max-w-[1310px] grid-cols-1 items-center gap-12 lg:grid-cols-[630px_1fr] lg:gap-9">

                {/* Heading */}
                <div className="lg:col-start-1 lg:row-start-1">
                    <div className="mb-4 flex items-center gap-3">
                        <HandHeart
                            size={20}
                            strokeWidth={1.8}
                            className="text-[#FF6900]"
                        />

                        <span className="text-[14px] font-semibold tracking-[4px] text-[#101C29]">
                            WHAT WE DO
                        </span>
                    </div>

                    <h2 className="max-w-[600px] text-[28px] leading-[1.15] font-bold text-[#071321] md:text-[42px] lg:text-5xl">
                        Building hope creating lasting change
                    </h2>
                </div>

                {/* Image Section */}
                <div className="relative mx-auto h-[470px] w-full max-w-[620px] sm:h-[550px] md:h-[600px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[684px]">

                    {/* Donate Now Button */}
                    <a
                        href="/donate"
                        className="absolute top-[9%] lg:left-20 md:left-14 left-4 z-20 flex h-[175px] w-[48px]
                                   flex-col items-center justify-center gap-2 rounded-xl 
                                   bg-[#F5A704] text-white shadow-sm transition-all 
                                   duration-300 hover:bg-[#e85e00] sm:h-[190px] 
                                   sm:w-[55px] lg:top-[9%] lg:h-[212px] lg:w-[55px]"
                    >
                        <span className="rotate-180 text-[15px] font-bold [writing-mode:vertical-rl]">
                            Donate Now
                        </span>

                        <HandHelping size={23} strokeWidth={2} />
                    </a>

                    {/* Main Image */}
                    <div className="absolute top-0 right-0 h-[82%] w-[76%] overflow-hidden rounded-[28px] sm:rounded-[32px] lg:h-full lg:w-[455px]">
                        <Image
                            src="/images/what-we-do-image-1.jpg"
                            alt="Children receiving support from a community initiative"
                            fill
                            priority
                            sizes="(max-width: 768px) 76vw, 455px"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Small Circular Image */}
                    <div className="absolute bottom-[14%] left-[0%] z-10 size-[175px]
                                    overflow-hidden rounded-full border-[6px] 
                                    border-white sm:size-[215px] md:size-[235px] 
                                    lg:bottom-[11%] md:left-[-30px] lg:left-[-30px] lg:size-[266px]">
                        <Image
                            src="/images/what-we-do-image-2.jpg"
                            alt="A happy child holding a heart"
                            fill
                            sizes="(max-width: 768px) 235px, 266px"
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Features */}
                <div className="lg:col-start-1 lg:row-start-2">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className={`flex gap-5 py-7 sm:gap-7 ${index !== features.length - 1
                                        ? "border-b border-[#E9E9E9]"
                                        : ""
                                    }`}
                            >
                                {/* Feature Icon */}
                                <div className="relative flex size-[76px] shrink-0 items-center justify-center">
                                    <span className="absolute bottom-[4px] left-1/2 size-[42px] -translate-x-1/2 rounded-full bg-[#F5A704]" />

                                    <Icon
                                        size={54}
                                        strokeWidth={1.15}
                                        className="relative z-10 text-[#071321]"
                                    />

                                    {feature.id === 3 && (
                                        <Heart
                                            size={24}
                                            strokeWidth={1.8}
                                            className="absolute top-[35px] left-1/2 z-20 -translate-x-1/2 text-[#071321]"
                                        />
                                    )}
                                </div>

                                {/* Feature Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="mb-2 text-[18px] font-semibold text-[#101C29] sm:text-[20px]">
                                        {feature.title}
                                    </h3>

                                    <p className="max-w-[510px] text-[14px] leading-[1.9] text-[#858585] sm:text-[15px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;
