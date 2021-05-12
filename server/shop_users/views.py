from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.response import Response

from shop_auth.serializers import UserSerializer
from .service import add_new_order


@api_view(['POST'])
def new_order(request):
    serializer = UserSerializer(request.user)
    username = serializer.data.get('username', '')
    response = add_new_order(username=username, products=request.data.get('products', []))
    return Response(response, status=status.HTTP_200_OK)
