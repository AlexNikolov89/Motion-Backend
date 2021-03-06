# Generated by Django 3.1.2 on 2020-10-21 10:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('registration_profiles', '0002_registrationprofile_code_used'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registrationprofile',
            name='id',
        ),
        migrations.AlterField(
            model_name='registrationprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='reg_profile', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
