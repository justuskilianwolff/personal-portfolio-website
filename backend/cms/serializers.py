from cms.models import Activity, IconLink, Milestone, PersonalInfo, Project, TextLink, Work
from rest_framework import serializers


class IconLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = IconLink
        fields = "__all__"


class PersonalInfoSerializer(serializers.ModelSerializer):
    links = IconLinkSerializer(many=True, read_only=True)

    class Meta:
        model = PersonalInfo
        fields = "__all__"


class TextLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextLink
        fields = "__all__"


class MilestoneSerializer(serializers.ModelSerializer):
    # TODO: sort by date

    class Meta:
        model = Milestone
        fields = "__all__"


class ActivitySerializer(serializers.ModelSerializer):
    technologies = IconLinkSerializer(many=True, read_only=True)
    links = TextLinkSerializer(many=True, read_only=True)

    class Meta:
        model = Activity
        fields = "__all__"


class WorkSerializer(ActivitySerializer):
    class Meta:
        model = Work
        fields = "__all__"


class ProjectSerializer(ActivitySerializer):
    class Meta:
        model = Project
        fields = "__all__"
