from django.urls import path
from .views import SiteInfoView, api_root

urlpatterns = [
    path('', api_root),
    path('api/site_info/', SiteInfoView.as_view()),
]
