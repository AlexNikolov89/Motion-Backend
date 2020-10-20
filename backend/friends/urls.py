from django.urls import path

from friends.views import ListFriendsAPIView

from friends.views import SendFriendRequestView

from friends.views import GetPatchDeleteFriendRequest

urlpatterns = [
    path('', ListFriendsAPIView.as_view()),
    path('request/<int:user_id>/', SendFriendRequestView.as_view()),
    path('requests/<int:friend_request_id>/', GetPatchDeleteFriendRequest.as_view()),
]