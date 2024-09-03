from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework.response import Response

from cms.models import Product
from cms.serializers import ProductSerializer


@api_view(["GET"])
def api_home(request: HttpRequest, filter: str | None = None, *args, **kwargs):
    products = Product.objects.all()
    products_list = []
    for product in products:
        products_list.append(ProductSerializer(product).data)
    return Response(products_list)
