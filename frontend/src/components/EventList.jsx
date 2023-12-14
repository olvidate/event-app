import { useEffect, useState } from "react";
import { getAllEvents } from "../api/events.api";
import { EventCard } from "./EventCard";
import './EventList.css';

export function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function loadEvents() {
            const res = await getAllEvents();
            setEvents(res.data);
        }
        loadEvents();
    }, []);

    return (
        <div className="list-container">
            {events.map((event) => (
                <EventCard key={event.id} event={event}></EventCard>
            ))}
        </div>
    );
}