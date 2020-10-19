from django.urls import path

from friends.views import ListFriendsAPIView

from friends.views import PostFriendRequestView

urlpatterns = [
    path('', ListFriendsAPIView.as_view()),
    path('request/<int:user_id>/', PostFriendRequestView.as_view()),
]