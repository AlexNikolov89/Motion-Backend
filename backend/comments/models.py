from django.db import models

from users.models import User

from posts.models import Post

AUTH_USER_MODEL = 'users.User'

class Comment(models.Model):
    author = models.ForeignKey(to=User, related_name='poster', on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, related_name='post_comment', on_delete=models.CASCADE)
    text_content = models.TextField(max_length=400)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author}'
