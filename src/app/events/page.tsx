
import UpcomingEventsClient from "@/components/UpcomingEventsClient";
import { EventDataTypes } from "../types/eventTypes";


const UpcomingEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`,{
        cache: 'no-store'
    });

    const allData: EventDataTypes[] = await res.json();

    return <UpcomingEventsClient allData={allData} />;
};

export default UpcomingEvents;
