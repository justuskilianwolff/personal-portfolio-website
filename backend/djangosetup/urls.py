from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("api/", include("cms.urls")),
    path("markdownx/", include("markdownx.urls")),
    path("", admin.site.urls),
]
