from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response

from posts.models import User
from users.serializers import UserSerializer


class ListCreateUsersAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ToggleFollowUserAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def patch(self, request, *args, **kwargs):
        user = request.user
        user_to_follow = self.get_object()
        if user_to_follow in user.followees.all():
            user.followees.remove(user_to_follow)
        else:
            user.followees.add(user_to_follow)
        return Response(self.get_serializer(user_to_follow).data)


class ListFollowersUserAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followers


class ListFolloweesUserAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followees
