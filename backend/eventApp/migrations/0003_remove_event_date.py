# Generated by Django 5.0 on 2023-12-16 02:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eventApp', '0002_alter_event_location_alter_event_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='date',
        ),
    ]
