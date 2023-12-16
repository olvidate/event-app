import { EventList } from "../components/EventList";
import './EventsPage.css';

import { useNavigate } from 'react-router-dom';

export function EventsPage() {
    const navigate = useNavigate();
    return(
        <main>
            <header>
                <h1>Eventos</h1>
                <span>🥳</span>
                <a onClick={()=> {
                    navigate('/events/create');
                }}>
                    Crear Evento
                </a>
            </header>
            <EventList></EventList>
        </main>
    );
}