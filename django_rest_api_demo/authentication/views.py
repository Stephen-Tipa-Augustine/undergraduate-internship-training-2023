from django.http import JsonResponse
from django.shortcuts import HttpResponse


# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from . import serializers


def index(request):
    return HttpResponse('Hi! This is Django Running')


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = serializers.MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def is_user_authenticated(request):
    return JsonResponse({
        'active': request.user.is_active,
    })
