from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('shop_info.urls')),
    path('api/auth/', include('shop_auth.urls')),
    path('api/products/', include('shop_products.urls')),
    path('api/user/', include('shop_users.urls')),
    path('admin/', admin.site.urls),
]
