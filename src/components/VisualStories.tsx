
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CalendarDays } from "lucide-react";

const stories = [
    {
        id: 1,
        title: "Night Blanket Relief",
        slogan: "Shelterless Night Support",
        location: "Mirpur, Dhaka",
        description:
            "We distributed warm blankets to homeless people in Mirpur, helping them survive the cold winter night.",
        image: "/images/Night_blanket_relief.png",
        date: "Dec 15, 2024",
    },
    {
        id: 2,
        title: "Green Bangladesh",
        slogan: "Plant Today, Breathe Tomorrow",
        location: "Dhanmondi, Dhaka",
        description:
            "We planted trees to build a greener and healthier Bangladesh for future generations.",
        image: "/images/Tree-pantation.png",
        date: "Jul 12, 2024",
    },
    {
        id: 3,
        title: "Free Health Camp",
        slogan: "Healthy Community, Happy Society",
        location: "Shahbag, Dhaka",
        description:
            "We organized a free health camp to provide basic medical support to underprivileged people.",
        image: "/images/Free-medical-camp.png",
        date: "Mar 20, 2024",
    },
    {
        id: 4,
        title: "Joy for Kids",
        slogan: "Little Smiles, Big Hope",
        location: "Rampura, Dhaka",
        description:
            "We brought joy to underprivileged children through fun activities, drawing and gifts.",
        image: "/images/joy-for-kids.png",
        date: "Jan 26, 2024",
    },
];

const VisualStories = () => {
    return (
        <section className="visual-stories-section mt-44 md:mt-45 py-14 md:py-16 lg:py-24 lg:mt-60">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div>
                    <img
                        src="/images/heart-palms.png"
                        alt="logo-watermark"
                        aria-hidden="true"
                        className="absolute lg:top-440 md:top-455 top-650 lg:left-170 md:left-90 min-[375px]:left-55 min-[425px]:left-68 lg:size-65 md:size-45 size-40 opacity-2 floating-hand"
                    />
                </div>

                {/* Section Heading */}
                <div className=" mb-8 flex flex-col justify-between gap-3.5 md:mb-14 md:flex-row md:items-end">

                    <div>
                        <div className="md:mb-3 mb-2 flex items-center gap-3">
                            <span className="md:h-[2px] h-[1px] md:w-12 w-10 bg-[#F07800]
                                             relative after:absolute after:-right-1 after:-top-[2.25px]
                                             md:after:-top-[3px] after:size-1.5 md:after:size-2 after:rotate-45
                                             after:bg-[#F07800]"></span>
                            <span className="font-kaushan text-lg text-[#FF8500] md:text-xl lg:text-[22px]">
                                Our Visual Stories
                            </span>
                        </div>

                        <h2 className="font-poppins min-[375px]:text-[24px] min-[425px]:text-[28px] font-bold leading-tight text-[#444444] md:text-4xl lg:text-[38px]">
                            Moments of Kindness
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#F5A704]
                                    lg:px-7 lg:py-3.5 md:px-6 md:py-2.75 px-4 py-1.5 lg:text-[15px] md:text-[13px]
                                    text-[11px] font-semibold text-white border border-[#999999]
                                    transition-all duration-200 ease-out
                                    hover:-translate-y-0.5 hover:shadow-[0_3px_0_#444444]
                                    active:translate-y-0 active:shadow-none w-fit"
                    >
                        View All Stories
                        <ArrowUpRight
                            className="lg:size-4 md:size-3.5 size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                        />
                    </a>

                </div>

                {/* Story Cards */}
                <div className="grid relative grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {stories.map((story) => (
                        <article
                            key={story.id}
                            className="group flex flex-col overflow-hidden rounded-[30px]
           border border-[#e8e0e0] bg-white
           transition-all duration-300 ease-in-out
           hover:-translate-y-[3px]
           hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
                        >

                            {/* Image */}
                            <div className="relative mx-[10px] mt-[10px] h-[220px] overflow-hidden rounded-[21px] max-sm:h-[240px]">

                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Slogan */}
                                <p className="absolute bottom-5 left-5 z-10 max-w-[90%] font-kaushan text-sm leading-relaxed text-white drop-shadow-md md:text-sm">
                                    {story.slogan}
                                </p>

                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col px-4 pb-5 pt-5 md:px-5">

                                {/* Location & Date */}
                                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-inter text-xs text-[#75818B]">

                                    <span className="flex items-center gap-1.5">
                                        <MapPin
                                            size={16}
                                            className="text-[#FF8500]"
                                        />
                                        {story.location}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays
                                            size={15}
                                            className="text-[#FF8500]"
                                        />
                                        {story.date}
                                    </span>

                                </div>

                                {/* Event Title */}
                                <h3 className="mb-2 font-poppins text-lg font-bold leading-snug text-[#424242] transition-colors duration-300 group-hover:text-green-950">
                                    {story.title}
                                </h3>

                                {/* Animated Underline */}
                                <span className="mb-3 block h-[1.25px] w-8 rounded-full bg-[#FF8500] transition-all duration-500 ease-in-out group-hover:w-30" />

                                {/* Description */}
                                <p className="font-inter text-sm leading-6.5 text-[#626B73]">
                                    {story.description}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default VisualStories;
