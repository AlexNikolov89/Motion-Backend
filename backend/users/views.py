from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from posts.models import User
from users.serializers import UserSerializer

User = get_user_model()


class ListCreateUsersAPIView(ListCreateAPIView):
    search_fields = ['first_name', 'last_name', 'username']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    parmission_classes = [IsAuthenticated]


class ToggleFollowUserAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'

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

class RetrieveLoggedInUserInfoAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user
