from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, GenericAPIView

from friends.models import Friend

from friends.serializers import FriendSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

User = get_user_model()


class ListFriendsAPIView(ListCreateAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer


class PostFriendRequestView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = Friend(sender=user, receiver=receiver)
        friend_request.save()
        return  Response(self.get_serializer(friend_request).data)
