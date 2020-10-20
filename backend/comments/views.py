from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from comments.models import Comment

from comments.serializers import CommentSerializer


class ListCreateCommentAPIView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'post_id'

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, post_id=self.kwargs['post_id'])






