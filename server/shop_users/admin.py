from django.contrib import admin
from .models import UserDiscount, ProductsInOrder, UserOrder

PER_PAGE = 10


class UserDiscountAdmin(admin.ModelAdmin):
    search_fields = ['user', 'discount']
    list_display = ('user', 'discount')
    list_per_page = PER_PAGE


class ProductsInOrderAdmin(admin.ModelAdmin):
    search_fields = ['id', 'user', 'product_count', 'product']
    list_display = ('id', 'user', 'product_count', 'product')
    list_per_page = PER_PAGE


class UserOrderAdmin(admin.ModelAdmin):
    search_fields = ['id', 'user', 'total_price', 'date']
    list_display = ('id', 'user', 'total_price', 'date')
    list_per_page = PER_PAGE


admin.site.register(UserDiscount, UserDiscountAdmin)
admin.site.register(ProductsInOrder, ProductsInOrderAdmin)
admin.site.register(UserOrder, UserOrderAdmin)
