from rest_framework import serializers
from .models import Event

# Serializador del modelo Event
# para convertir los objetos de este modelo en JSON
# (Se envian todos los campos del modelo)
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'