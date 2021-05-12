from django.urls import path
from .views import new_order

urlpatterns = [
    path('add_order/', new_order),
]
