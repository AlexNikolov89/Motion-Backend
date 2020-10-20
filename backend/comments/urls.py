from django.urls import path

from comments.views import ListCreateCommentAPIView

urlpatterns = [
    path('<int:post_id>/', ListCreateCommentAPIView.as_view()),
]