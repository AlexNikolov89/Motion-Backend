from django.urls import path

from users.views import ListCreateUsersAPIView, ToggleFollowUserAPIView, ListFollowersUserAPIView, \
    ListFolloweesUserAPIView

urlpatterns = [
    path('', ListCreateUsersAPIView.as_view()),
    path('toggle-follow/<int:pk>/', ToggleFollowUserAPIView.as_view()),
    path('followers/', ListFollowersUserAPIView.as_view()),
    path('following/', ListFolloweesUserAPIView.as_view()),
]