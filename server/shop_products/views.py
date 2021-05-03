from rest_framework import status
from rest_framework import filters
from rest_framework import generics

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from .service import ToolsByService
from .models import Categories, Products
from .serializers import ProductSerializer, CategoriesSerializer

service = ToolsByService()


@api_view(['GET'])
def update_products(request):
    """ Update products in database. """
    response = service.update_data()
    if 'error_msg' in response:
        return Response(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(response, status=status.HTTP_200_OK)


class ProductsView(generics.ListCreateAPIView):
    """ Returns List of all products. """
    serializer_class = ProductSerializer
    queryset = Products.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 10

    filter_backends = [filters.SearchFilter, ]
    search_fields = ['category__sub_category', 'name', 'article', 'product_id']


class CategoriesView(generics.ListCreateAPIView):
    """ Returns List of all categories. """
    serializer_class = CategoriesSerializer
    queryset = Categories.objects.all()
