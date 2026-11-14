import { EventDataTypes } from "@/app/types/eventTypes";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    AwardIcon,
    CalendarDays,
    CirclePlus,
    MapPin,
    Search,
    Users,
} from "lucide-react";
import Image from "next/image";

const categories = [
    "All",
    "Donation",
    "Cleanup",
    "Plantation",
    "Winter Relief",
    "Food Drive",
    "Health Camp",
    "Education",
];

const eventTypeStyles: Record<string, { text: string; bg: string }> = {
    Donation: {
        text: "text-[#e04469]",
        bg: "bg-[#e04469]/20",
    },

    Volunteering: {
        text: "text-[#6BA5E3]",
        bg: "bg-[#2878C8]/30",
    },

    Plantation: {
        text: "text-[#4BA875]",
        bg: "bg-[#16834A]/30",
    },

    Cleanup: {
        text: "text-[#43A9C1]",
        bg: "bg-[#0891B2]/30",
    },

    "Winter Relief": {
        text: "text-[#A084D1]",
        bg: "bg-[#7952B8]/30",
    },

    "Food Drive": {
        text: "text-[#E9A344]",
        bg: "bg-[#D97706]/30",
    },

    "Health Camp": {
        text: "text-[#E77979]",
        bg: "bg-[#DC4444]/30",
    },

    Education: {
        text: "text-[#8290DD]",
        bg: "bg-[#5365C9]/30",
    },
};


const RecentUpcomingEvents = async () => {
    const res = await fetch('http://localhost:5000/home-events');
    const recentEventsData: EventDataTypes[] = await res.json();
    console.log(recentEventsData);
    return (
        <section className="login-section px-4 lg:mt-52 md:mt-45 mt-45 lg:py-22 md:py-18 py-14">
            <div className="mx-auto max-w-7xl px-5 md:px-8">

                {/* Header */}
                <div className="md:flex items-end justify-between gap-5">

                    <div className="flex-1">

                        <div>
                            <div className="md:mb-2 mb-1.5 flex items-center gap-3">
                                <span className="md:h-[2px] h-[1px] md:w-12 w-10 bg-[#F07800]
                                             relative after:absolute after:-right-1 after:-top-[2.25px]
                                             md:after:-top-[3px] after:size-1.5 md:after:size-2 after:rotate-45
                                             after:bg-[#F07800]"></span>
                                <span className="font-kaushan text-lg text-[#FF8500] md:text-xl lg:text-[22px]">
                                    Explore Recent Initiatives
                                </span>
                            </div>

                            <h2 className="font-poppins min-[375px]:text-[24px] min-[425px]:text-[28px] font-bold leading-tight text-[#444444] md:text-4xl lg:text-[38px]">
                                Recent Upcoming Events
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="mt-2 lg:max-w-[550px] md:max-w-[430px] max-w-[350px] md:text-[13px] text-[11px] leading-[1.7] text-[#78818e]">
                            Discover the latest events happening in your community and
                            find meaningful ways to get involved.
                        </p>

                    </div>

                    {/* view all events button */}
                    <Link
                        href="/events"
                        className="flex mt-3 md:mt-0 gap-1.5 items-center md:text-[15px]
                                    text-[13px] font-semibold text-[#FF8500] hover:text-[#e97901]
                                    transition-all duration-200
                                    hover:-translate-y-0.5
                                    active:translate-y-0 active:shadow-none w-fit"
                    >
                        View All Events
                        <ArrowUpRight
                            className="md:size-4 font-bold size-3.5
                            transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                        />
                    </Link>

                </div>

                {/* Events card */}

                <div className="lg:mt-10 md:mt-8 mt-6 grid relative grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {recentEventsData.map((data: EventDataTypes) => (
                        <article
                            key={data._id}
                            className="group flex flex-col overflow-hidden rounded-[30px]
                                                        border border-[#e8e0e0] bg-white
                                                        transition-all duration-300 ease-in-out
                                                        hover:-translate-y-[3px]
                                                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
                        >

                            {/* Image */}
                            <div className="relative mx-[10px] mt-[10px] h-[220px] overflow-hidden rounded-[21px] max-sm:h-[240px]">

                                <Image
                                    src={data.thumbnail}
                                    alt={data.eventTitle}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Event Type Badge */}
                                <div
                                    className={`absolute left-4 top-45.5 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm ${eventTypeStyles[data.eventType]?.bg || "bg-gray-100"
                                        } ${eventTypeStyles[data.eventType]?.text || "text-gray-600"
                                        }`}
                                >
                                    <AwardIcon size={12} />

                                    <span>{data.eventType}</span>
                                </div>

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
                                        {data.location}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays
                                            size={15}
                                            className="text-[#FF8500]"
                                        />
                                        {data.eventDate}
                                    </span>

                                </div>

                                {/* Event Title */}
                                <h3 className="mb-2 font-poppins text-lg font-bold leading-snug text-[#4b4b4b] transition-colors duration-300 group-hover:text-[#181717]">
                                    {data.eventTitle}
                                </h3>

                                {/* Animated Underline */}
                                <span className="mb-3 block h-[1px] w-11 rounded-full bg-[#FF8500] transition-all duration-500 ease-in-out group-hover:w-45" />

                                {/* Description */}
                                <p className="font-inter text-sm leading-6.5 text-[#626B73]">
                                    {data.description}
                                </p>

                                {/* Divider */}
                                <div className="my-3 h-px w-full bg-[#e5e7eb]" />

                                {/* Organizer Name */}
                                <div className="mb-4 flex items-center gap-2 font-inter text-xs text-[#75818B]">

                                    <Users
                                        size={14}
                                        className="shrink-0 text-[#9ca3af]"
                                    />

                                    <span>
                                        Organized By : {data.name || "Community Volunteers"}
                                    </span>

                                </div>
                                {/* View Event Button */}
                                <Link
                                    href={`/events/${data._id}`}
                                    className="mt-auto inline-flex w-full items-center justify-center
                                               gap-2 rounded-full bg-[#F07800] hover:bg-[#DB6C00] px-4 py-2.5
                                               text-[13px] font-semibold text-white
                                               shadow-[0_3px_8px_rgba(7,155,135,0.15)]
                                               transition-all duration-300 active:scale-[0.98]"
                                >
                                    View Event

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />

                                </Link>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default RecentUpcomingEvents;