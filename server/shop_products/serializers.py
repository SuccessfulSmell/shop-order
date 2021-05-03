from rest_framework import serializers

from .models import Products, Categories


class ProductSerializer(serializers.ModelSerializer):
    discount = serializers.CharField(source='category.discount')
    category_name = serializers.CharField(source='category.sub_category')

    class Meta:
        model = Products
        fields = ['name', 'article', 'price', 'price_rec', 'price_opt',
                  'currency', 'product_id', 'url', 'picture', 'description',
                  'available', 'provider', 'discount', 'category_name']


class CategoriesSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='main_category.main_category')
    sub_category = serializers.StringRelatedField(many=True)

    class Meta:
        model = Categories
        fields = ['category', 'sub_category']
