from django.urls import path
from .views import SiteInfoView

urlpatterns = [
    path('site_info/', SiteInfoView.as_view()),
]
