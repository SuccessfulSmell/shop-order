from django.contrib import admin
from .models import SiteSettings, AdminSales
from django_singleton_admin.admin import DjangoSingletonModelAdmin

PER_PAGE = 10


class SalesCategoryAdmin(admin.ModelAdmin):
    search_fields = ['title', 'discount']
    list_per_page = PER_PAGE


admin.site.register(SiteSettings, DjangoSingletonModelAdmin)
admin.site.register(AdminSales)
