
import UpcomingEventsClient from "@/components/UpcomingEventsClient";
import { EventDataTypes } from "../types/eventTypes";


const UpcomingEvents = async () => {
    const res = await fetch("http://localhost:5000/events");

    const allData: EventDataTypes[] = await res.json();

    return <UpcomingEventsClient allData={allData} />;
};

export default UpcomingEvents;
