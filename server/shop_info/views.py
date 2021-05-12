from .models import SiteSettings
from .service import get_api_root
from .serializers import ContactSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView


@api_view(['GET'])
def api_root(request):
    """ API root with documentation for shop requests. """
    response = get_api_root()
    return Response(response, status=status.HTTP_200_OK)


class SiteInfoView(ListAPIView):
    """ Returns List of SiteInfo. """
    serializer_class = ContactSerializer
    queryset = SiteSettings.objects.all()
