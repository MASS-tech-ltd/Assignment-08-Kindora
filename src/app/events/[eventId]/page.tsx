
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    MapPin,
    Users,
    Heart,
    Share2,
    Mail,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import { EventDataTypes } from "@/app/types/eventTypes";
import JoinEventButton from "@/components/JoinEvent/JoinEventButton";


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

const EventDetailsPage = async ({params}: {
    params: Promise<{ eventId: string }>}) => {

    const { eventId } = await params;

    const res = await fetch(`http://localhost:5000/events/${eventId}`);

    const eventData: EventDataTypes = await res.json();

    return (
        <section className="login-section min-h-screen bg-[#f5f8fa] px-4 lg:pt-36 md:pt-30 pt-26 lg:pb-18 md:pb-13 pb-14">

            <div className="mx-auto w-full lg:max-w-[740px] max-w-[640px]">

                {/* Back to Events */}
                <Link
                    href="/events"
                    className="inline-flex items-center font-inter font-semibold gap-2 text-[11.5px] md:text-[13px] text-[#858B91] hover:text-[#F07800] transition-colors duration-200 lg:mb-5 md:mb-4 mb-3"
                >
                    <ArrowLeft size={15} />
                    Back to Upcoming Events
                </Link>

                {/* Hero Section */}
                <div className="relative overflow-hidden rounded-t-[20px] lg:h-[300px] md:h-[260px] h-[245px]">

                    <Image
                        src={eventData.thumbnail}
                        alt="Volunteers distributing food"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, 640px"
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                    {/* Event Type */}
                    <div
                        className={`absolute lg:left-155 md:left-133 lg:top-64 md:top-53 min-[425px]:left-74 min-[375px]:left-62 top-50
                            z-10 inline-flex items-center gap-1 rounded-full 
                            md:px-2.5 md:py-1 md:text-[11px] px-2 py-1 text-[10px] 
                            font-semibold shadow-sm ${eventTypeStyles[eventData.eventType]?.bg || "bg-gray-100"
                            } ${eventTypeStyles[eventData.eventType]?.text || "text-gray-600"
                            }`}
                    >
                        <Heart size={11} />

                        <span>{eventData.eventType}</span>
                    </div>

                    {/* Hero Content */}
                    <div className="absolute bottom-5 left-4 right-4">

                        <h1 className="mb-2 font-poppins min-[425px]:text-[22px] min-[375px]:text-[20px] font-bold leading-tight text-white md:text-[30px]">
                            {eventData.eventTitle}
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-inter text-[11px] font-medium text-white/90">

                            <span className="inline-flex items-center gap-1.5">
                                <MapPin size={13} className="text-[#FF8500]" />
                                {eventData.location}
                            </span>

                            <span className="inline-flex items-center gap-1.5">
                                <CalendarDays size={13} className="text-[#FF8500]" />
                                {eventData.eventDate}
                            </span>

                        </div>

                    </div>
                </div>

                {/* Main Content Container */}
                <div className="rounded-b-[20px] bg-white px-4 pb-5 pt-5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:px-6">

                    {/* Volunteers & Join Event */}
                    <div className="mb-5 flex min-[425px]:flex min-[375px]:block flex-wrap items-center
                                    justify-between gap-3 border border-[#e9edef] 
                                    bg-[#fafcfc] px-5 py-3
                                    rounded-full min-[425px]:rounded-full min-[375px]:rounded-xl">

                        <div className="flex min-w-0 items-center gap-2.5">

                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f6f1e8] text-[#FF8500]">
                                <Users size={18} />
                            </div>

                            <div>
                                <h3 className="font-poppins text-[11px] font-bold text-[#303c49]">
                                    0 Volunteers Joined
                                </h3>

                                <p className="font-inter text-[10px] text-[#929ba5]">
                                    Sign up to join hands for this drive
                                </p>
                            </div>

                        </div>
                        {/* Join event button */}
                        <JoinEventButton key={eventData._id} eventData={eventData}></JoinEventButton>

                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_180px] sm:gap-5">

                        {/* Left Content */}
                        <div className="min-w-0">

                            {/* About Event */}
                            <div className="mb-5">

                                <h2 className="mb-3 font-poppins text-[15px] font-bold text-[#252d38]">
                                    About this Event
                                </h2>

                                <p className="font-inter text-[12px] leading-[1.7] text-[#7a858f]">
                                    {eventData.description}
                                </p>

                            </div>

                            {/* Divider */}
                            <div className="mb-4 h-px w-full bg-[#e7e8ea]" />

                            {/* Volunteer Guidelines */}
                            <div>

                                <h3 className="mb-3 font-inter text-[10px] font-bold uppercase tracking-wide text-[#84909a]">
                                    Volunteer Guidelines
                                </h3>

                                <ul className="space-y-2.5 font-inter text-[10px] leading-[1.3] text-[#858e98]">

                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#FF8500]" />
                                        Be respectful, friendly, and supportive toward all participants and community members.
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#FF8500]" />
                                        Follow the event organizer&apos;s instructions and work cooperatively with fellow volunteers.
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#FF8500]" />
                                        Handle all donated items responsibly and ensure they reach the people in need.
                                    </li>

                                </ul>

                            </div>

                        </div>

                        {/* Organizer Sidebar */}
                        <aside className="h-fit rounded-xl border border-[#e9edef] bg-white p-3.5">

                            <h3 className="mb-3 font-inter text-[11px] font-bold uppercase tracking-wide text-[#89939d]">
                                Event Organizer
                            </h3>

                            {/* Organizer Info */}
                            <div className="flex items-center gap-2">

                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f5efe9] font-poppins text-[12px] font-bold text-[#FF8500]">
                                    D
                                </div>

                                <div className="min-w-0">

                                    <h4 className="truncate font-poppins text-[11px] font-bold text-[#343d49]">
                                        Dolore expedita dese
                                    </h4>

                                    <p className="mt-1 flex items-center gap-1 font-inter text-[8.5px] text-[#929ba5]">
                                        <Mail size={9} />
                                        mypit@mailinator.com
                                    </p>

                                </div>

                            </div>

                            {/* Verification */}
                            <div className="my-3 h-px bg-[#edf0f2]" />

                            <div className="flex items-center gap-1.5 font-inter text-[10px] text-[#84909a]">

                                <CheckCircle2
                                    size={13}
                                    className="shrink-0 text-[#FF8500]"
                                />

                                Verified Platform Member

                            </div>

                        </aside>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default EventDetailsPage;
