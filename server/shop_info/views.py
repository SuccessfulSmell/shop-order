from django.shortcuts import render

# Create your views here.

from .models import SiteSettings

from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from rest_framework import serializers


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = ['title', 'contact_phone', 'logist_phone', 'address', 'about_info']


class SiteInfoView(ListAPIView):
    """ Returns List of SiteInfo. """
    serializer_class = CitySerializer
    queryset = SiteSettings.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 10
