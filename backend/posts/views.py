from django.shortcuts import render
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from posts.models import Post
from posts.serializers import PostSerializer

from posts.permissions import IsAuthorOrReadOnly


class ListCreatePostsAPIView(ListCreateAPIView):
    search_fields = ['title', 'text_content']
    filter_backends = (filters.SearchFilter,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    parser_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    pemission_classes=[]


class ToggleLikePostAPIView(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'

    def post(self, request, *args, **kwargs):
        user = request.user
        post = self.get_object()
        if user in post.liked_by.all():
            post.liked_by.remove(user)
        else:
            post.liked_by.add(user)
        return Response(self.get_serializer(post).data)


class ShowLikedPostAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    #def get_queryset(self):
     #   user_id = self.request.user.id
      #  posts = Post.objects.filter(liked_posts=user_id)
       # return posts

    def get_queryset(self):
        return self.request.user.liked_posts


class ListFollowersAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'

    class Meta:
        ordering = ['id']

    def get_queryset(self):
        post = Post.objects.filter(author__in=self.request.user.followees.all())
        return post


class ListOfUserPostAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []


class ShownOwnPosts(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author=request.user)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)









