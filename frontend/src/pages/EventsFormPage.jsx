import './EventsFormPage.css';
import 'react-datetime/css/react-datetime.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { createEvent, getEvent, updateEvent } from '../api/events.api';
import Datetime from 'react-datetime';
import moment from 'moment';

export function EventsFormPage() {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    function transfromDateToISO(originalDate) {
        const [day, month, year, time] = originalDate.split(/[\/\s:]/);
        const isoDate = `${year}-${month}-${day}T${time}:00`;
        return isoDate;
    }

    const onSubmit = handleSubmit(async (data) => {
        if(params.id) {
            await updateEvent(params.id, data);
        } else {
            data.date = transfromDateToISO(data.date);
            await createEvent(data);
        }
        navigate('/');
    });

    useEffect(()=> {
        async function loadEvent() {
            if(params.id) {
                const {data: {title, description, date, location}} = await getEvent(params.id)
                setValue('title', title)
                setValue('description', description)
                setValue('date')
                setValue('location', location)
            }
        }
        loadEvent();
    }, []);

    return (
        <main>
            <header>
                {params.id ? <h1>Editar Evento</h1> : <h1>Crear Evento</h1>}
            </header>

            <form autoComplete='off'>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id='title' 
                        {...register('title', {required: true})}
                    />
                    {errors.title && <span>El título es requerido</span>}
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" 
                        {...register('description', {required: true})}
                    ></textarea>
                    {errors.description && <span>La descripción es requerida</span>}
                </div>
                <div>
                    <label htmlFor="date">Fecha</label>
                    <Datetime
                        dateFormat="DD/MM/YYYY"
                        timeFormat="HH:mm"
                        inputProps={{
                        id: 'date',
                        name: 'date',
                        ...register('date', { required: true }),
                        }}
                    />
                    {errors.date && <span>La fecha es requerida</span>}
                </div>
                <div>
                    <label htmlFor="location">Ubicación</label>
                    <input type="text" id="location"
                        {...register('location', {required: true})}
                    />
                    {errors.location && <span>La ubicación es requerida</span>}
                </div>
                <div className="form-btn-separator">
                    <button onClick={onSubmit}>{params.id ? 'Editar' : 'Crear'}</button>
                    {params.id ? <button onClick={()=> {
                        navigate('/');
                    }}>Cancelar</button> : null}
                </div>
            </form>
            <a onClick={()=> {
                navigate('/');
            }}>Regresar</a>
        </main>
    );
}