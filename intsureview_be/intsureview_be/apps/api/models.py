from django.db import models

class Fish(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    species = models.CharField(max_length=75)
    description = models.TextField(max_length=200)
    rarity = models.CharField(max_length=15)
    location = models.TextField(max_length=200)
    fun_fact = models.TextField(max_length=200)

    class Meta:
        verbose_name_plural = "fish"

    def __str__(self):
        return self.species
