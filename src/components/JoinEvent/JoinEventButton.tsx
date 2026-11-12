'use client'
import { EventDataTypes } from "@/app/types/eventTypes";
import { authClient } from "@/lib/auth-client";
import { Heart } from "lucide-react";

interface JoinEventButtonProps {
    eventData: EventDataTypes;
}

const JoinEventButton = ({ eventData }: JoinEventButtonProps) => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log(user);

    const handleJoinEvent = async () => {
        const allData = {
            ...user,
            ...eventData,
            joinDate: new Date(),
        }
        const res = await fetch("http://localhost:5000/join-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allData)
        });

        const joinData = await res.json();
        console.log(joinData);

    }

    return (
        <div className="ml-auto flex items-center gap-2">

            {/* Join Event */}
            <button
                onClick={handleJoinEvent}
                type="button"
                className="min-[375px]:mt-3.5 min-[425px]:mt-0 md:mt-0 ml-0 min-[375px]:ml-[175px] min-[425px]:ml-0 
                                    group inline-flex items-center gap-1.25 rounded-full bg-[#F07800]
                                    lg:px-4 lg:py-2.25 md:px-4 md:py-2.25 px-2.5 py-1.5 lg:text-[12px] md:text-[12px]
                                    text-[9.5px] font-semibold text-white border border-[#999999]
                                    transition-all duration-200 ease-out
                                    hover:-translate-y-0.5 hover:shadow-[0_2px_0_#444444]
                                    active:translate-y-0 active:shadow-none w-fit"
            >
                <Heart size={13} />
                Join Event
            </button>

        </div>
    );
};

export default JoinEventButton;