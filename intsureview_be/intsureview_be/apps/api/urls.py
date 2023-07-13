from django.urls import path, include
from rest_framework import routers
from .views import FishViewSet

router= routers.DefaultRouter()
router.register(r'fish', FishViewSet)

urlpatterns=[
    path('', include(router.urls))
]
