from django.urls import path
from .views import new_order, ChangePasswordView

urlpatterns = [
    path('add_order/', new_order),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
]
