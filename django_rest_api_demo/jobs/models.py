from django.db import models


# Create your models here.
class JobPosition(models.Model):
    title = models.CharField(max_length=200)
    salary_scale = models.CharField(max_length=4)
    department = models.CharField(max_length=100)
    division = models.CharField(max_length=100)
    commitment = models.CharField(max_length=20)
