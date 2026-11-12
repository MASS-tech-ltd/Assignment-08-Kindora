import { auth } from "@/lib/auth";
import { ArrowRight, AwardIcon, CalendarDays, CirclePlus, MapPin, Users } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { EventDataTypes } from "../types/eventTypes";
import Image from "next/image";


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


const ManageEventsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/my-created-events/${user?.email}`);
    const myCreatedEvents: EventDataTypes[] = await res.json();
    console.log(myCreatedEvents);

    return (
        <section className="login-section px-4 lg:pt-36 md:pt-30 pt-26 lg:pb-18 md:pb-13 pb-14">
            <div className="mx-auto max-w-7xl px-5 md:px-8">

                {/* Header */}
                <div className="md:flex items-end justify-between gap-5">

                    <div className="flex-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#8B5CF6]/10 px-2.5 py-1 text-[10px] font-semibold text-[#8B5CF6] mb-2">
                            <CalendarDays size={11.5} />
                            <span>Event Organizer Panel</span>
                        </div>

                        {/* Title */}
                        <h2 className="md:text-3xl min-[425px]:text-[23px] min-[375px]:text-[21px] leading-tight font-bold  text-[#111827]">
                            Manage My Events
                        </h2>

                        {/* Description */}
                        <p className="mt-2 lg:max-w-[550px] md:max-w-[430px] max-w-[350px] md:text-[12px] text-[10.5px] leading-[1.7] text-[#78818e]">
                            Manage the events you&apos;ve created and keep everything organized. 
                            Track your activities, update event details, and make a lasting 
                            impact in your community.
                        </p>

                    </div>

                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-[#d3d4d7]" />

                {/* Events card */}

                <div className="lg:mt-10 md:mt-8 mt-6 grid relative grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {myCreatedEvents.map((eventData: EventDataTypes) => (
                        <article
                            key={eventData._id}
                            className="group flex flex-col overflow-hidden rounded-[30px]
                                                        border border-[#e8e0e0] bg-white
                                                        transition-all duration-300 ease-in-out
                                                        hover:-translate-y-[3px]
                                                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
                        >

                            {/* Image */}
                            <div className="relative mx-[10px] mt-[10px] h-[220px] overflow-hidden rounded-[21px] max-sm:h-[240px]">

                                <Image
                                    src={eventData.thumbnail}
                                    alt={eventData.thumbnail}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Event Type Badge */}
                                <div
                                    className={`absolute left-4 top-45.5 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm ${eventTypeStyles[eventData.eventType]?.bg || "bg-gray-100"
                                        } ${eventTypeStyles[eventData.eventType]?.text || "text-gray-600"
                                        }`}
                                >
                                    <AwardIcon size={12} />

                                    <span>{eventData.eventType}</span>
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
                                        {eventData.location}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays
                                            size={15}
                                            className="text-[#FF8500]"
                                        />
                                        {eventData.eventDate}
                                    </span>

                                </div>

                                {/* Event Title */}
                                <h3 className="mb-2 font-poppins text-lg font-bold leading-snug text-[#4b4b4b] transition-colors duration-300 group-hover:text-[#181717]">
                                    {eventData.eventTitle}
                                </h3>

                                {/* Animated Underline */}
                                <span className="mb-3 block h-[1px] w-11 rounded-full bg-[#FF8500] transition-all duration-500 ease-in-out group-hover:w-45" />

                                {/* Description */}
                                <p className="font-inter text-sm leading-6.5 text-[#626B73]">
                                    {eventData.description}
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
                                        Joined On : {new Date(eventData.joinDate).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>

                                </div>
                                {/* View Event Button */}
                                <Link
                                    href={`/events/${eventData._id}`}
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

export default ManageEventsPage;