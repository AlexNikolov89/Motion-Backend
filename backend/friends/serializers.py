from rest_framework import serializers

from friends.models import Friend

from users.serializers import UserSerializer


class FriendSerializer(serializers.ModelSerializer):
    sender = UserSerializer()
    receiver = UserSerializer()

    class Meta:
        model = Friend
        fields = '__all__'