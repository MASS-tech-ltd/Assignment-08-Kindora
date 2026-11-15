
'use client'

import { useEffect, useState } from "react";
import { EventDataTypes } from "@/app/types/eventTypes";
import { authClient } from "@/lib/auth-client";
import getTokenFromClient from "@/lib/getTokenFromClient";
import { Heart, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface JoinEventButtonProps {
    eventData: EventDataTypes;
    onJoinStatusChange?: (joined: boolean) => void;
    onJoinSuccess?: () => void;
}

const JoinEventButton = ({
    eventData,
    onJoinStatusChange,
    onJoinSuccess
}: JoinEventButtonProps) => {

    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [joinStatus, setJoinStatus] = useState<{
        key: string;
        joined: boolean;
    } | null>(null);

    const [isJoining, setIsJoining] = useState(false);

    const currentKey = `${user?.id || "guest"}-${eventData._id}`;

    const isJoined = joinStatus?.key === currentKey && joinStatus.joined;

    const isChecking = Boolean(user) && joinStatus?.key !== currentKey;


    // Check whether the current user already joined this event
    useEffect(() => {

        if (!user) return;

        let isMounted = true;

        const checkJoinStatus = async () => {

            try {

                const token = await getTokenFromClient();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/events/${eventData._id}/join-status`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to check join status!");
                }

                const data = await res.json();

                if (isMounted) {
                    setJoinStatus({
                        key: currentKey,
                        joined: data.joined,
                    });

                    onJoinStatusChange?.(data.joined);
                }

            } catch (error) {
                console.error("Join Status Error:", error);

                if (isMounted) {
                    setJoinStatus({
                        key: currentKey,
                        joined: false,
                    });

                    onJoinStatusChange?.(false);
                }
            }
        };

        checkJoinStatus();

        return () => {
            isMounted = false;
        };

    }, [user?.id, eventData._id]);


    // Handle Join Event
    const handleJoinEvent = async () => {

        if (!user) {
            router.push("/login");
            return;
        }

        if (isJoined || isJoining || isChecking) {
            return;
        }

        try {
            setIsJoining(true);

            const allData = {
                ...user,
                ...eventData,
                eventId: eventData._id,
                joinDate: new Date(),
            };

            const token = await getTokenFromClient();

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/join-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(allData)
            });

            const joinData = await res.json();

            console.log(joinData);

            if (res.ok || (res.status === 409 && joinData.joined)) {

                setJoinStatus({
                    key: currentKey,
                    joined: true,
                });

                onJoinStatusChange?.(true);

                if (res.ok) {
                    onJoinSuccess?.();
                }

            } else {
                throw new Error(joinData.message || "Failed to join event!");
            }

        } catch (error) {
            console.error("Join Event Error:", error);

        } finally {
            setIsJoining(false);
        }
    };


    return (
        <div className="ml-auto flex items-center gap-2">

            {/* Join Event */}
            <button
                onClick={handleJoinEvent}
                type="button"
                disabled={isJoined || isJoining || isChecking}
                className={`cursor-pointer min-[375px]:mt-3.5 min-[425px]:mt-0 md:mt-0 ml-0 min-[375px]:ml-[175px] min-[425px]:ml-0 
                                    group inline-flex items-center gap-1.25 rounded-full bg-[#F07800]
                                    lg:px-4 lg:py-2.25 md:px-4 md:py-2.25 px-2.5 py-1.5 lg:text-[12px] md:text-[12px]
                                    text-[9.5px] font-semibold text-white border border-[#999999]
                                    transition-all duration-200 ease-out
                                    hover:-translate-y-0.5 hover:shadow-[0_2px_0_#444444]
                                    active:translate-y-0 active:shadow-none w-fit
                                    disabled:cursor-not-allowed disabled:opacity-80
                                    ${isJoined ? "bg-[#087D4B] hover:bg-[#087D4B]" : ""}`}
            >

                {isChecking || isJoining ? (
                    <>
                        <Loader2 size={13} className="animate-spin" />
                        {isChecking ? "Checking..." : "Joining..."}
                    </>
                ) : isJoined ? (
                    <>
                        <Check size={13} />
                        Joined
                    </>
                ) : (
                    <>
                        <Heart size={13} />
                        Join Event
                    </>
                )}

            </button>

        </div>
    );
};

export default JoinEventButton;
