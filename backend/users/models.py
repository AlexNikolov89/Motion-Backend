from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
    about = models.TextField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=20, blank=True, default='')
    phone_num = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(unique=True)
    followers = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followees', blank=True)

    def __str__(self):
        return self.username

