from django.urls import path

from posts.views import ListCreatePostsAPIView, RetrieveUpdateDestroyPostAPIView, ToggleLikePostAPIView, \
    ShowLikedPostAPIView, ListFollowersAPIView, ListOfUserPostAPIView

urlpatterns = [
    path('', ListCreatePostsAPIView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:pk>/', ToggleLikePostAPIView.as_view()),
    path('likes/', ShowLikedPostAPIView.as_view()),
    path('following/', ListFollowersAPIView.as_view()),
    path('user/<int:pk>/', ListOfUserPostAPIView.as_view()),
]