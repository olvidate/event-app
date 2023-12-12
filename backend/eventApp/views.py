from rest_framework import viewsets
from .serializer import EventSerializer
from .models import Event

class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()