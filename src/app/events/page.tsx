
import Link from "next/link";
import {
    CalendarDays,
    CirclePlus,
    Search,
} from "lucide-react";

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

const UpcomingEvents = () => {
    return (
        <section className="bg-[#f8fafc] px-4 pt-8 pb-7">
            <div className="mx-auto w-full max-w-[816px]">

                {/* Header */}
                <div className="flex items-end justify-between gap-5">

                    <div className="flex-1">

                        {/* Badge */}
                        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#e5f5ef] px-2.5 py-1 text-[9px] font-semibold text-[#07876a]">
                            <CalendarDays size={11} />
                            <span>Future Community Drives</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[25px] leading-tight font-bold tracking-tight text-[#111827]">
                            Upcoming Events
                        </h2>

                        {/* Description */}
                        <p className="mt-1.5 max-w-[390px] text-[10px] leading-[1.7] text-[#78818e]">
                            Discover verified volunteer initiatives scheduled for upcoming dates. Past events are
                            automatically excluded so you can focus on active drives that need support.
                        </p>

                    </div>

                    {/* Create Event Button */}
                    <Link
                        href="/events/create-event"
                        className="mb-1 inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#079b87] px-4 py-2.5 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(7,155,135,0.18)] transition-all duration-200 hover:bg-[#078675] active:scale-95"
                    >
                        <CirclePlus size={12} />
                        Create Event
                    </Link>

                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-[#e5e7eb]" />

                {/* Filters and Search */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center gap-1.5">

                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`rounded-full px-3 py-1.5 text-[9px] font-semibold transition-all duration-200 ${category === "All"
                                        ? "bg-[#079b87] text-white shadow-sm"
                                        : "border border-[#edf0f2] bg-white text-[#697386] hover:border-[#079b87] hover:text-[#079b87]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                    {/* Search Input */}
                    <div className="flex h-[34px] w-full max-w-[192px] items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-3 shadow-[0_2px_5px_rgba(0,0,0,0.04)] transition-all duration-200 focus-within:border-[#079b87]">

                        <Search
                            size={13}
                            className="shrink-0 text-[#9ca3af]"
                        />

                        <input
                            type="text"
                            placeholder="Search events or areas..."
                            className="w-full bg-transparent text-[9px] text-[#374151] outline-none placeholder:text-[#9ca3af]"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default UpcomingEvents;
