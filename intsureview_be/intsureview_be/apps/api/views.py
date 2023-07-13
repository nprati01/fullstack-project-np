from rest_framework import viewsets
from rest_framework import permissions
from .models import Fish
from .serializers import FishSerializer





class FishViewSet(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer


    # I wrote my backend several times before decifind to stick to ModelViewSets
    # as per the instructions MVS--provide a restricted set of Http request methods for crud functionalit
    # and have distincish responses for success/failure of endpoint
    # If your looking for an @API viewset I can do that as well I just felt this was dryer for the purpose of this project
    
