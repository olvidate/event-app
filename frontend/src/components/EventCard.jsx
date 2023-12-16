import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';
import { deleteEvent } from '../api/events.api';
import moment from 'moment';

export function EventCard({ event }) {
    const navigate = useNavigate();
    return (
        <section>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className='info-separator'>
                <p>Ubicación: {event.location}</p>
            </div>
            <div className="btn-separator">
                <button onClick={()=> {
                    navigate('/events/edit/' + event.id);
                }}>Editar</button>
                <button onClick={async ()=> {
                    const accepted = window.confirm('¿Estás seguro de borrar el evento?\nEsta acción no se puede deshacer');
                    if(accepted) {
                        await deleteEvent(event.id);
                        console.log('borrar')
                    };
                    navigate('/');
                }}>Borrar</button>
            </div>
        </section>
    );
}