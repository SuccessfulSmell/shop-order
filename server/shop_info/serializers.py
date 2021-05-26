from .models import SiteSettings, AdminSales
from shop_products.models import SubCategory

from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = ['title', 'contact_phone', 'logist_phone', 'address', 'about_info']


class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['sub_category', 'discount']


class AdminSalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminSales
        fields = ['title', 'about_info', 'discount', 'photo']
