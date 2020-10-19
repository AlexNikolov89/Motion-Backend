from posts.models import Post
from rest_framework import serializers

from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):

    like_counter = serializers.SerializerMethodField()

    def get_like_counter(self, post):
        return post.liked_by.all().count()

    author = UserSerializer(read_only = True)

    class Meta:
        model = Post
        fields = '__all__'