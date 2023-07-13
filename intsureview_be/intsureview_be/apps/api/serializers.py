# from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Fish




class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = '__all__'
