
"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { EventDataTypes } from "@/app/types/eventTypes";
import JoinEventButton from "@/components/JoinEvent/JoinEventButton";
import { authClient } from "@/lib/auth-client";

interface VolunteerSectionProps {
    eventData: EventDataTypes;
}

const VolunteerSection = ({ eventData }: VolunteerSectionProps) => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [volunteerCount, setVolunteerCount] = useState(0);
    const [isJoined, setIsJoined] = useState<boolean | null>(null);

    useEffect(() => {
        let isMounted = true;

        const getVolunteerCount = async () => {
            try {
                const res = await fetch(`http://localhost:5000/events/${eventData._id}/volunteer-count`,
                    { cache: "no-store" }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch volunteer count!");
                }

                const data = await res.json();

                if (isMounted) {
                    setVolunteerCount(data.volunteerCount);
                }
            } catch (error) {
                console.error("Volunteer Count Error:", error);
            }
        };

        getVolunteerCount();

        return () => {
            isMounted = false;
        };
    }, [eventData._id]);

    const handleJoinStatusChange = (joined: boolean) => {
        setIsJoined(joined);
    };

    const handleJoinSuccess = () => {
        setVolunteerCount((prevCount) => prevCount + 1);
    };

    let volunteerMessage = "Sign up to join hands for this drive";

    if (isPending) {
        volunteerMessage = "Checking your participation...";
    } else if (user && isJoined === null) {
        volunteerMessage = "Checking your participation...";
    } else if (user && isJoined) {
        volunteerMessage = "Thank you for joining this initiative!";
    }

    return (
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
                        {volunteerCount} {volunteerCount === 1 ? "Volunteer" : "Volunteers"} Joined
                    </h3>

                    <p className="font-inter text-[10px] text-[#929ba5]">
                        {volunteerMessage}
                    </p>
                </div>

            </div>

            <JoinEventButton
                key={eventData._id}
                eventData={eventData}
                onJoinStatusChange={handleJoinStatusChange}
                onJoinSuccess={handleJoinSuccess}
            />

        </div>
    );
};

export default VolunteerSection;
