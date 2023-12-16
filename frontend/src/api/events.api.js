import axios from 'axios';

const eventsApi = axios.create({
    baseURL: 'http://localhost:8000/api/events',
})

export const getAllEvents = () => {
    return eventsApi.get('/');
}

export const getEvent = (id) => eventsApi.get(`/${id}/`);

export const createEvent = (event) => eventsApi.post('/', event);

export const deleteEvent = (id) => eventsApi.delete(`/${id}`);

export const updateEvent = (id, event) => eventsApi.put(`/${id}/`, event);