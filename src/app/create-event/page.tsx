
"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    Type,
    Tag,
    CalendarDays,
    MapPin,
    Image as ImageIcon,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

// Get tomorrow's date according to Bangladesh timezone
const getTomorrowDate = () => {
    const dateParts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(new Date());

    const year = Number(dateParts.find((part) => part.type === "year")?.value);
    const month = Number(dateParts.find((part) => part.type === "month")?.value);
    const day = Number(dateParts.find((part) => part.type === "day")?.value);

    const tomorrow = new Date(Date.UTC(year, month - 1, day + 1));

    return tomorrow.toISOString().split("T")[0];
};

const CreateEvent = () => {

    const minEventDate = getTomorrowDate();

    const { data: session } = authClient.useSession()
    const user = session?.user;

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const eventData = Object.fromEntries(formData.entries());

        // console.log("Event Data:", eventData);
        
        const eventAndUserData = {
            ...user,
            ...eventData,
            joinDate: new Date(),
        }
        console.log("Event Data:", eventAndUserData);

        const res = await fetch("http://localhost:5000/create-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventAndUserData)
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <section className="login-section min-h-screen px-4 lg:pt-36 md:pt-30 pt-26 lg:pb-20 md:pb-18 pb-16">

            <div className="mx-auto w-full lg:max-w-[680px] md:max-w-[580px] max-w-[480px]">

                {/* Back Navigation */}
                <Link
                    href="/events"
                    className="inline-flex items-center font-inter font-semibold gap-2 text-[11.5px] md:text-[13px] text-[#858B91] hover:text-[#F07800] transition-colors duration-200 lg:mb-5 md:mb-4 mb-3"
                >
                    <ArrowLeft size={15} />
                    Back to Upcoming Events
                </Link>

                {/* Create Event Card */}
                <div className="w-full rounded-2xl bg-white border border-[#e3e3e3] p-5 sm:p-6 shadow-[0_3px_15px_rgba(0,0,0,0.075)]">

                    {/* Heading */}
                    <div className="mb-6">

                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f7efe8] px-2.5 py-1 text-[10px] font-semibold text-[#eb7c06] mb-2">
                            <Sparkles size={11} />
                            Community Impact Initiative
                        </div>

                        <h1 className="font-poppins text-[21px] sm:text-[23px] leading-tight font-extrabold tracking-tight text-[#404142]">
                            Create a Community Event
                        </h1>

                        <p className="font-inter text-[11px] sm:text-xs leading-relaxed text-[#858B91] mt-1.5">
                            Organize a local relief effort, environmental cleanup, or community support drive.
                        </p>

                    </div>

                    {/* Event Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-5">

                        {/* Event Title */}
                        <div>
                            <label
                                htmlFor="eventTitle"
                                className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                            >
                                Event Title <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <Type
                                    size={14}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A7AD]"
                                />

                                <input
                                    id="eventTitle"
                                    name="eventTitle"
                                    type="text"
                                    placeholder="e.g. Winter Clothes Distribution – Mirpur 10, Dhaka"
                                    required
                                    className="w-full h-10 rounded-lg border border-[#dadada] bg-[#F8FAFB] pl-9 pr-3 font-inter text-xs text-[#424B52] outline-none transition-all placeholder:text-[#A0A7AD] focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                                />
                            </div>
                        </div>

                        {/* Event Type & Date */}
                        <div className="grid grid-cols-2 gap-3">

                            {/* Event Type */}
                            <div>
                                <label
                                    htmlFor="eventType"
                                    className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                                >
                                    Event Type <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <Tag
                                        size={14}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A7AD] pointer-events-none"
                                    />

                                    <select
                                        id="eventType"
                                        name="eventType"
                                        required
                                        defaultValue="Donation"
                                        className="w-full h-10 appearance-none rounded-lg border border-[#dadada] bg-[#F8FAFB] pl-9 pr-2 font-inter text-xs text-[#424B52] outline-none transition-all focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10 cursor-pointer"
                                    >
                                        <option value="Donation">Donation</option>
                                        <option value="Volunteering">Volunteering</option>
                                        <option value="Cleanup">Cleanup</option>
                                        <option value="Education">Education</option>
                                        <option value="Tree Plantation">Tree Plantation</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Event Date */}
                            <div>
                                <label
                                    htmlFor="eventDate"
                                    className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                                >
                                    Event Date <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <CalendarDays
                                        size={14}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A7AD] pointer-events-none"
                                    />

                                    <input
                                        id="eventDate"
                                        name="eventDate"
                                        type="date"
                                        min={minEventDate}
                                        required
                                        className="w-full h-10 rounded-lg border
                                                 border-[#dadada] bg-[#F8FAFB] pl-9 pr-2 font-inter
                                                 text-xs text-[#424B52] outline-none transition-all
                                                 focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                                    />
                                </div>

                                <p className="font-inter text-[10.5px] text-[#92999F] mt-1.5">
                                    Please select a date starting from tomorrow.
                                </p>
                            </div>

                        </div>

                        {/* Location */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                            >
                                Location / Venue <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={14}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A7AD]"
                                />

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    placeholder="e.g. Kuril Chowrasta, Dhaka"
                                    required
                                    className="w-full h-10 rounded-lg border border-[#dadada] bg-[#F8FAFB] pl-9 pr-3 font-inter text-xs text-[#424B52] outline-none transition-all placeholder:text-[#A0A7AD] focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                                />
                            </div>
                        </div>

                        {/* Thumbnail Image URL */}
                        <div>
                            <label
                                htmlFor="thumbnail"
                                className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                            >
                                Thumbnail Image URL <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <ImageIcon
                                    size={14}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A7AD]"
                                />

                                <input
                                    id="thumbnail"
                                    name="thumbnail"
                                    type="url"
                                    placeholder="https://images.unsplash.com/photo-..."
                                    required
                                    className="w-full h-10 rounded-lg border border-[#dadada] bg-[#F8FAFB] pl-9 pr-3 font-inter text-xs text-[#424B52] outline-none transition-all placeholder:text-[#A0A7AD] focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                                />
                            </div>

                            {/* Quick Photo Presets */}
                            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-2 font-inter text-[10.5px]">

                                <span className="text-[#92999F]">
                                    Quick photo presets:
                                </span>

                                <span className="text-[#F07800]">Winter Clothes</span>
                                <span className="text-[#ababab]">•</span>

                                <span className="text-[#F07800]">Blanket Relief</span>
                                <span className="text-[#ababab]">•</span>

                                <span className="text-[#F07800]">Cleanup</span>
                                <span className="text-[#ababab]">•</span>

                                <span className="text-[#F07800]">Tree Plantation</span>

                            </div>
                        </div>

                        {/* Event Description */}
                        <div>

                            <label
                                htmlFor="description"
                                className="block font-inter text-[13px] font-semibold text-[#424B52] mb-1.5"
                            >
                                Event Description <span className="text-red-500">*</span>
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                required
                                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                                className="w-full min-h-[105px] resize-y rounded-lg border border-[#dadada] bg-[#F8FAFB] px-3 py-3 font-inter text-xs leading-relaxed text-[#424B52] outline-none transition-all placeholder:text-[#A0A7AD] focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                            />

                        </div>

                        {/* Organizer Email */}
                        <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F7F8FA] border border-[#EDF0F2] px-3 py-3">

                            <span className="font-inter text-[11px] text-[#858B91]">
                                Organizer Email attached:
                            </span>

                            <span className="font-inter text-[10px] font-semibold text-[#424B52] break-all">
                                {user?.email}
                            </span>

                        </div>

                        {/* Publish Event Button */}
                        <button
                            type="submit"
                            className="w-full h-11 flex items-center justify-center gap-2 rounded-lg bg-[#F07800] hover:bg-[#DB6C00] text-white font-inter text-[13px] font-semibold shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer"
                        >
                            <Sparkles size={15} />
                            Publish Event
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default CreateEvent;
