from django.db import models
from django.core.validators import MinValueValidator

class Employee(models.Model):
    id = models.CharField(max_length=5, primary_key=True)
    login = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    salary = models.FloatField(validators=[MinValueValidator(0.0)])

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f'{self.id} {self.login} {self.name} {self.salary}'