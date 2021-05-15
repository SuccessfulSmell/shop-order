from django.urls import path
from .views import new_order, ChangePasswordView, UpdateProfileView

urlpatterns = [
    path('add_order/', new_order),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
]
