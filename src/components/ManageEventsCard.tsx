
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import {
    ArrowRight,
    AwardIcon,
    CalendarDays,
    MapPin,
    Users,
    Pencil,
    Trash2,
    Type,
    Tag,
    Image as ImageIcon,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { EventDataTypes } from "@/app/types/eventTypes";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Bounce, toast } from "react-toastify";


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


const ManageEventsCard = ({ eventData }: { eventData: EventDataTypes }) => {

    const minEventDate = getTomorrowDate();

    // Edit modal state
    const [isEditOpen, setIsEditOpen] = useState(false);

    // Store updated event data
    const [currentEvent, setCurrentEvent] = useState(eventData);


    // Handle Event Update
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const updatedEventData = Object.fromEntries(formData.entries());

        console.log("Event updated Data:", updatedEventData);

        try {

            const res = await fetch(`http://localhost:5000/events/${currentEvent._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedEventData)
            });

            if (!res.ok) {
                throw new Error("Failed to update event");
            }

            const data = await res.json();

            console.log("Update Response:", data);

            if (data.modifiedCount === 1 || data.matchedCount === 1) {

                // Update card data instantly
                setCurrentEvent(prev => ({
                    ...prev,
                    ...updatedEventData
                }));

                toast.success('Event data updated!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                // Close edit modal
                setIsEditOpen(false);

                console.log("Event updated successfully!");

            }

        } catch (error) {

            console.error("Update Error:", error);

        }

    };


    return (
        <article
            key={currentEvent._id}
            className="group flex flex-col overflow-hidden rounded-[30px]
                border border-[#e8e0e0] bg-white
                transition-all duration-300 ease-in-out
                hover:-translate-y-[3px]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
        >

            {/* Image */}
            <div className="relative mx-[10px] mt-[10px] h-[220px] overflow-hidden rounded-[21px] max-sm:h-[240px]">

                <Image
                    src={currentEvent.thumbnail}
                    alt={currentEvent.thumbnail}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Event Type Badge */}
                <div
                    className={`absolute left-4 top-45.5 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm ${eventTypeStyles[currentEvent.eventType]?.bg || "bg-gray-100"
                        } ${eventTypeStyles[currentEvent.eventType]?.text || "text-gray-600"
                        }`}
                >
                    <AwardIcon size={12} />
                    <span>{currentEvent.eventType}</span>
                </div>

            </div>


            {/* Card Content */}
            <div className="flex flex-1 flex-col px-4 pb-5 pt-5 md:px-5">

                {/* Location & Date */}
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-inter text-xs text-[#75818B]">

                    <span className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-[#FF8500]" />
                        {currentEvent.location}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={15} className="text-[#FF8500]" />
                        {currentEvent.eventDate}
                    </span>

                </div>


                {/* Event Title */}
                <h3 className="mb-2 font-poppins text-lg font-bold leading-snug text-[#4b4b4b] transition-colors duration-300 group-hover:text-[#181717]">
                    {currentEvent.eventTitle}
                </h3>


                {/* Animated Underline */}
                <span className="mb-3 block h-[1px] w-11 rounded-full bg-[#FF8500] transition-all duration-500 ease-in-out group-hover:w-45" />


                {/* Description */}
                <p className="font-inter text-sm leading-6.5 text-[#626B73]">
                    {currentEvent.description}
                </p>


                {/* Divider */}
                <div className="my-3 h-px w-full bg-[#e5e7eb]" />


                {/* Organizer Name */}
                <div className="mb-4 flex items-center gap-2 font-inter text-xs text-[#75818B]">

                    <Users size={14} className="shrink-0 text-[#9ca3af]" />

                    <span>
                        Organized By : {currentEvent.name || "Community Volunteers"}
                    </span>

                </div>


                {/* View, Edit & Delete Buttons */}
                <div className="mt-auto flex items-center gap-2">

                    {/* View Event Button */}
                    <Link
                        href={`/events/${currentEvent._id}`}
                        className="inline-flex flex-1 items-center justify-center
                            gap-1.5 rounded-full bg-[#F07800] hover:bg-[#DB6C00]
                            px-2 py-2.5 text-[11px] md:text-[12px] font-semibold text-white
                            transition-all duration-300 active:scale-[0.98]"
                    >
                        View
                        <ArrowRight size={13} />
                    </Link>


                    {/* Edit Button & Dialog */}
                    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>

                        <DialogTrigger
                            render={
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center
                                        gap-1 rounded-full bg-[#EEF0FF] hover:bg-[#E1E4FF]
                                        px-4 py-2.5 text-[11px] md:text-[12px]
                                        font-semibold text-[#746bf0] cursor-pointer
                                        transition-all duration-200 active:scale-95"
                                >
                                    <Pencil size={12} />
                                    Edit
                                </button>
                            }
                        />

                        <DialogContent className="sm:max-w-[550px] max-h-[90dvh] overflow-y-auto">

                            <DialogHeader>
                                <DialogTitle className="font-poppins text-xl font-bold">
                                    Edit Event
                                </DialogTitle>

                                <DialogDescription className="font-inter text-sm">
                                    Update your event information and save your changes.
                                </DialogDescription>
                            </DialogHeader>


                            {/* Custom Edit Form */}
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
                                            defaultValue={currentEvent.eventTitle}
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
                                                defaultValue={currentEvent.eventType}
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
                                                defaultValue={currentEvent.eventDate}
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
                                            defaultValue={currentEvent.location}
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
                                            defaultValue={currentEvent.thumbnail}
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
                                        defaultValue={currentEvent.description}
                                        rows={4}
                                        required
                                        placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                                        className="w-full min-h-[105px] resize-y rounded-lg border border-[#dadada] bg-[#F8FAFB] px-3 py-3 font-inter text-xs leading-relaxed text-[#424B52] outline-none transition-all placeholder:text-[#A0A7AD] focus:border-[#FF8500] focus:ring-2 focus:ring-[#FF8500]/10"
                                    />

                                </div>


                                {/* Save Changes Button */}
                                <DialogFooter>

                                    <DialogClose
                                        render={
                                            <button
                                                type="button"
                                                className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold hover:bg-gray-100"
                                            >
                                                Cancel
                                            </button>
                                        }
                                    />

                                    <button
                                        type="submit"
                                        className="rounded-full bg-[#F07800] px-5 py-2 text-sm font-semibold text-white hover:bg-[#DB6C00]"
                                    >
                                        Save Changes
                                    </button>

                                </DialogFooter>

                            </form>

                        </DialogContent>

                    </Dialog>


                    {/* Delete Button & Confirmation */}
                    <AlertDialog>

                        <AlertDialogTrigger
                            render={
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center
                                        gap-1 rounded-full bg-[#FFF0F2] hover:bg-[#FFE0E5]
                                        px-4 py-2.5 text-[11px] md:text-[12px]
                                        font-semibold text-[#e64d6b] cursor-pointer
                                        transition-all duration-200 active:scale-95"
                                >
                                    <Trash2 size={12} />
                                    Delete
                                </button>
                            }
                        />

                        <AlertDialogContent>

                            <AlertDialogHeader>
                                <AlertDialogTitle className="font-poppins">
                                    Are you absolutely sure?
                                </AlertDialogTitle>

                                <AlertDialogDescription className="font-inter text-sm">
                                    This action cannot be undone. This will permanently
                                    delete your event from the database.
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>

                                <AlertDialogCancel>
                                    Cancel
                                </AlertDialogCancel>

                                <AlertDialogAction
                                    className="bg-red-600 text-white hover:bg-red-700"
                                    disabled
                                >
                                    Delete Event
                                </AlertDialogAction>

                            </AlertDialogFooter>

                        </AlertDialogContent>

                    </AlertDialog>

                </div>

            </div>

        </article>
    );
};

export default ManageEventsCard;
