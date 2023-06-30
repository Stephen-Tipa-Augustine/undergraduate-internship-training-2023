from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from authentication.views import index
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name='index'),
    path('authentication/', include('authentication.urls', namespace='authentication')),
    path('jobs/', include('jobs.urls', namespace='jobs')),
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) +\
              static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
