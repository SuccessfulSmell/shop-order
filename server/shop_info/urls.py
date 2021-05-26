from django.urls import path
from .views import SiteInfoView, SalesInfoView, AdminSalesInfoView, api_root

urlpatterns = [
    path('', api_root),
    path('api/admin_sales/', AdminSalesInfoView.as_view()),
    path('api/site_info/', SiteInfoView.as_view()),
    path('api/sales/', SalesInfoView.as_view()),
]
