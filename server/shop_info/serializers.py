from .models import SiteSettings

from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = ['title', 'contact_phone', 'logist_phone', 'address', 'about_info']
