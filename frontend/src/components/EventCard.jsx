import './EventCard.css';

export function EventCard({ event }) {
    
    const date = new Date(event.date);
    const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    return (
        <section>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className='info-separator'>
                <p>Fecha: {formattedDate}</p>
                <p>Ubicación: {event.location}</p>
            </div>
            <div className="btn-separator">
                <button>Editar</button>
                <button>Borrar</button>
            </div>
        </section>
    );
}