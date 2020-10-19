from django.urls import path

from friends.views import ListFriendsAPIView

urlpatterns = [
    path('', ListFriendsAPIView.as_view()),
]