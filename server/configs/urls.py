from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('shop_info.urls')),
    path('api/auth/', include('shop_auth.urls')),
    path('api/products/', include('shop_products.urls')),
    path('api/user/', include('shop_users.urls')),
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
