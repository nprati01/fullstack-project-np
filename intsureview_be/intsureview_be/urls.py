"""intsureview_be URL Configuration"""

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('intsureview_be.apps.api.urls')),
]
