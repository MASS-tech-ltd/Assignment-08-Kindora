import { auth } from "@/lib/auth";
import { CalendarDays } from "lucide-react";
import { headers } from "next/headers";
import { EventDataTypes } from "../types/eventTypes";
import ManageEventsCard from "@/components/ManageEventsCard";



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
                        <ManageEventsCard key={eventData._id} eventData={eventData}></ManageEventsCard>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ManageEventsPage;