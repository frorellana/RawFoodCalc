from django.db import models

# Create your models here.

class Animal(models.Model):
    name = models.CharField(max_length=255, default='', unique=True)
    def __str__(self):
        return self.name


class Part(models.Model):
    name = models.CharField(max_length=255, default='', unique=True)
    def __str__(self):
        return self.name

class Ratio(models.Model):
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    part = models.ForeignKey(Part, on_delete=models.CASCADE)
    meat = models.DecimalField(max_digits=7, decimal_places=5, default=0.00)
    bone = models.DecimalField(max_digits=7, decimal_places=5, default=0.00)
    organ = models.DecimalField(max_digits=7, decimal_places=5, default=0.00)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['animal', 'part'], name='unique_ratio_animal_part')
        ]
        
    def __str__(self):
        return  f'{self.animal.name} - {self.part.name} meat/bone/organ ratio: {self.meat}/{self.bone}/{self.organ}'

class Image(models.Model):
    path = models.CharField(max_length=255, default='', unique=True)
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    part = models.ForeignKey(Part, on_delete=models.CASCADE)
    def __str__(self):
        return self.path
    



