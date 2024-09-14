from rest_framework import serializers

from cms.models import PersonalInfo

# TODO: fix


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ["id", "title", "description", "price", "get_discounted_price"]
