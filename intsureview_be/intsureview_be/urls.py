"""intsureview_be URL Configuration"""

from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from intsureview_be.apps.api import views



router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r'fishs', views.FishViewSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
