from rest_framework import status
from rest_framework import filters
from rest_framework import generics

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from .service import ToolsByService, EtpromByService
from .models import Categories, Products
from .serializers import ProductSerializer, CategoriesSerializer

tools_service = ToolsByService()
etprom_service = EtpromByService()


@api_view(['GET'])
def update_products(request):
    """ Update products in database. """
    tools_response = tools_service.update_data()
    etprom_response = etprom_service.update_data()
    response = {'tools.by': tools_response, 'etprom.by': etprom_response}
    if 'error_msg' in tools_response or 'error_msg' in etprom_response:
        return Response(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    return Response(response, status=status.HTTP_200_OK)


class ProductsView(generics.ListCreateAPIView):
    """ Returns List of all products. """
    serializer_class = ProductSerializer
    queryset = Products.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 10

    filter_backends = [filters.SearchFilter, ]
    search_fields = ['name', 'article', 'product_id']


class CategoriesView(generics.ListCreateAPIView):
    """ Returns List of all categories. """
    serializer_class = CategoriesSerializer
    queryset = Categories.objects.all()


class CategorySearchProducsView(generics.ListCreateAPIView):
    """ Returns List of all products by ID. """
    serializer_class = ProductSerializer
    paginator = PageNumberPagination()
    paginator.page_size = 10

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Products.objects.filter(category__id=category_id)
