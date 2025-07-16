from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', include('dashboard.urls')),
    path('', include('auth.urls')), # NOVO: A rota raiz agora aponta para as URLs do app 'auth'
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.DJANGO_VITE_ASSETS_URL, document_root=settings.DJANGO_VITE_ASSETS_PATH)