from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import Event

class EventTests(APITestCase):
    def setUp(self):
        # Configuración inicial para los tests
        self.event_data = {
            'title': 'Evento de prueba',
            'description': 'Descripción del evento de prueba',
            'location': 'Ubicación de prueba',
        }
        self.event = Event.objects.create(**self.event_data)
        self.url_list = reverse('events-list') # URL's definidas por DRF (router)
        self.url_detail = reverse('events-detail', args=[self.event.id])

    def test_create_event(self):
        # Prueba para crear un evento
        response = self.client.post(self.url_list, self.event_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Event.objects.count(), 2)  # Numero esperado de eventos (incluye el setup)

    def test_get_event_list(self):
        # Prueba para obtener la lista de eventos
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), Event.objects.count())

    def test_get_event_detail(self):
        # Prueba para obtener detalles de un evento
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.event.title)
