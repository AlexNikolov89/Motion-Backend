from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

from friends.models import Friend


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
    about = models.TextField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=20, blank=True, default='')
    phone_num = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(unique=True)
    followers = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followees', blank=True)

    @property
    def friends(self):
        friends = []
        received_requests = Friend.objects.filter(receiver=self, status='a')
        for friend in received_requests:
            friends.append(friend.sender)
        requested_requests = Friend.objects.filter(sender=self, status='a')
        for friend in requested_requests:
            friends.append(friend.receiver)
        return friends

    def __str__(self):
        return self.email

