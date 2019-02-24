from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('title', 'content', 'created', 'updated')
        model = models.Post