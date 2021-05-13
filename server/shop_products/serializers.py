from rest_framework import serializers

from .models import Products, Categories, SubCategory


class ProductSerializer(serializers.ModelSerializer):
    discount = serializers.CharField(source='category.discount')
    category_id = serializers.CharField(source='category.id')
    category_name = serializers.CharField(source='category.sub_category')

    class Meta:
        model = Products
        fields = ['id','name', 'article', 'price', 'price_rec', 'price_opt',
                  'currency', 'product_id', 'url', 'picture', 'description',
                  'available', 'provider', 'discount', 'category_name', 'category_id']


class SubCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('id', 'discount', 'sub_category')


class CategoriesSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='main_category.main_category')
    sub_category = SubCategoriesSerializer(many=True, read_only=True)

    class Meta:
        model = Categories
        fields = ['category', 'sub_category']
