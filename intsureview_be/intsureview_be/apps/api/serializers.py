# from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Fish


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ["url", "username", "email", "groups"]


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ["url", "name"]

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ('id', 'species', 'description', 'rarity', 'location', 'fun_fact')
