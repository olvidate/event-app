import axios from 'axios';

const eventsApi = axios.create({
    baseURL: 'http://localhost:8000/api/events',
})

export const getAllEvents = () => {
    return eventsApi.get('/');
}