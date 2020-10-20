from rest_framework import serializers

from friends.models import Friend

from users.serializers import UserfriendSerializer


class FriendSerializer(serializers.ModelSerializer):
    sender = UserfriendSerializer()
    receiver = UserfriendSerializer()

    class Meta:
        model = Friend
        fields = '__all__'