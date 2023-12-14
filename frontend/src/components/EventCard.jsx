import './EventCard.css';

export function EventCard({ event }) {
    return (
        <section>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
        </section>
    );
}