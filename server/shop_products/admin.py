from django.contrib import admin
from .models import MainCategory, SubCategory, Categories, Providers, Products

PER_PAGE = 10


class MainCategoryAdmin(admin.ModelAdmin):
    search_fields = ['main_category']
    list_per_page = PER_PAGE


class SubCategoryAdmin(admin.ModelAdmin):
    search_fields = ['sub_category', 'discount']
    list_display = ('sub_category', 'discount')
    list_per_page = PER_PAGE


class CategoriesAdmin(admin.ModelAdmin):
    search_fields = ['main_category']
    list_per_page = PER_PAGE


class ProvidersAdmin(admin.ModelAdmin):
    search_fields = ['providers_name']
    list_per_page = PER_PAGE


class ProductsAdmin(admin.ModelAdmin):
    search_fields = ['name', 'article', 'price', 'available', 'provider', 'category']
    list_display = ('name', 'article', 'price', 'available', 'provider', 'category')
    list_per_page = 50


admin.site.register(MainCategory, MainCategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(Providers, ProvidersAdmin)
admin.site.register(Products, ProductsAdmin)
