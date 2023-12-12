from django.db import models

class Event(models.Model):
    # Título del evento (Varchar, máximo 100 caracteres)
    title = models.CharField(max_length=100)
    # Título del evento (Text, puede permitir valores nulos)
    # (del caso contrario pediria un valor por defecto)
    description = models.TextField(blank=True, null=True)
    # Fecha del evento (DateTime)
    date = models.DateTimeField()
    # Ubicación del evento (Varchar, máximo 200 caracteres)
    location = models.CharField(max_length=200)

    # Método para mostrar el título en el
    # panel de administración de Django.
    def __str__(self):
        return self.title