from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MilestoneViewSet, PersonalInfoViewSet, ProjectViewSet, WorkViewSet

router = DefaultRouter()
router.register(r"personal-info", PersonalInfoViewSet)
router.register(r"milestones", MilestoneViewSet)
router.register(r"projects", ProjectViewSet)
router.register(r"works", WorkViewSet)


urlpatterns = [
    path("", include(router.urls)),
]
