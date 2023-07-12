from django.db import models

class Fish(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    species = models.CharField(max_length=75)
    description = models.TextField(max_length=300)
    rarity = models.BooleanField(default=False)
    location = models.TextField(max_length=100)

    class Meta :
        ordering = ['created']
        

    def __str__(self):
        return self.species
