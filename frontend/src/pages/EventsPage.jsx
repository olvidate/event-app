import { EventList } from "../components/EventList";
import './EventsPage.css';

export function EventsPage() {
    return(
        <main>
            <header>
                <h1>Eventos</h1>
                <span>🥳</span>
            </header>
            <EventList></EventList>
        </main>
    );
}