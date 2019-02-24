from django.contrib import admin
from .models import Post

# Register your models here.

class PostsAdmin (admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    # list_display = ('title','created')

admin.site.register(Post, PostsAdmin)
