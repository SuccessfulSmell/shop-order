from django.contrib import admin
from .models import SiteSettings
from django_singleton_admin.admin import DjangoSingletonModelAdmin

admin.site.register(SiteSettings, DjangoSingletonModelAdmin)