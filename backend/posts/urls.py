from django.urls import path

from posts.views import ListCreatePostsAPIView, RetrieveUpdateDestroyPostAPIView, ToggleLikePostAPIView, \
    ShowLikedPostAPIView, ListFollowersAPIView, ListOfUserPostAPIView

#from posts.views import ShownOwnPosts
from posts.views import ShownOwnPosts

urlpatterns = [
    path('', ListCreatePostsAPIView.as_view()),
    path('<int:pk>/', ListCreatePostsAPIView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:pk>/', ToggleLikePostAPIView.as_view()),
    path('likes/', ShowLikedPostAPIView.as_view()),
    path('following/', ListFollowersAPIView.as_view()),
    path('user/<int:pk>/', ListOfUserPostAPIView.as_view()),
    path('me/', ShownOwnPosts.as_view())
]