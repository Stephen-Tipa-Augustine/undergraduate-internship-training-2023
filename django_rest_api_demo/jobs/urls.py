from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

app_name = 'distant-travel'
router = DefaultRouter()
router.register(r'opportunities', views.JobPositionViewSet, basename='opportunities')

# define the urls
urlpatterns = [
    path('', include(router.urls)),
]
