from rest_framework import serializers

from comments.models import Comment

from users.serializers import UserSerializer

from posts.serializers import PostSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['author', 'text_content', 'post', 'created']

