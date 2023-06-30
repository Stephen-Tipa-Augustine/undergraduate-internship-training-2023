from rest_framework import serializers
from . import models


class JobPositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.JobPosition
        fields = '__all__'
