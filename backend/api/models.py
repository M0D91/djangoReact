from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50, verbose_name='Título')
    content = models.TextField(verbose_name='Contenido')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Creado')
    updated = models.DateTimeField(auto_now=True, verbose_name='Modificado')
    # order = models.SmallIntegerField(verbose_name="Orden", default=0)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        # ordering = ['order','title']
        ordering = ['title']

    def __str__(self):
        return self.title
