from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Fish
from .serializers import Fishserializer

api_view(['GET', 'POST'])
def fish_list(request):
    if request.method == 'GET'
