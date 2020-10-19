from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from friends.models import Friend

from friends.serializers import FriendSerializer


class ListFriendsAPIView(ListCreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer