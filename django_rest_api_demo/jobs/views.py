from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from . import models, serializers


# Create your views here.
class JobPositionViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = models.JobPosition.objects.all().order_by("-id")
    serializer_class = serializers.JobPositionSerializer
