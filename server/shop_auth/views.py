import datetime

from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.views import api_settings, ObtainJSONWebToken

from .serializers import UserSerializer, UserSerializerWithToken
from .utils import my_jwt_response_handler as jwt_response_payload_handler
from .service import get_user_products, set_discount, get_discount


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    username = serializer.data.get('username', '')
    products = get_user_products(username)
    user_discount = get_discount(username)
    response = {'user_data': serializer.data, 'user_orders': products,
                'user_discount': user_discount}
    return Response(response)


class SignIn(ObtainJSONWebToken):

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.object.get('user') or request.user
            token = serializer.object.get('token')
            response_data = jwt_response_payload_handler(token, user, request)
            response = Response(response_data)
            if api_settings.JWT_AUTH_COOKIE:
                expiration = (datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA)
                response.set_cookie(api_settings.JWT_AUTH_COOKIE, token,
                                    expires=expiration, httponly=True)
            return Response(response.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignUp(APIView):
    permission_classes = (permissions.AllowAny,)

    @staticmethod
    def post(request):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            username = serializer.data.get('username', '')
            set_discount(username)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
