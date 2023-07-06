from django.db import models

# Create your models here.

class Protein(models.Model):
    animal = models.CharField(max_length=16, default='')
    item = models.CharField(max_length=16, default='')
    totalMeat = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    totalOrgan = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    totalBone = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
