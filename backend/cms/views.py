from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework.response import Response

from cms.models import PersonalInfo
from cms.serializers import ProductSerializer

# FIXME


@api_view(["GET"])
def api_home(request: HttpRequest, filter: str | None = None, *args, **kwargs):
    products = PersonalInfo.objects.all()
    products_list = []
    for product in products:
        products_list.append(ProductSerializer(product).data)
    return Response(products_list)
