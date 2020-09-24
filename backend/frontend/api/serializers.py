from rest_framework import serializers
from frontend.models import City


class FrontEndSerializer(serializers.ModelSerializer):
    class Meta :
        model = City
        fields =['id','name']
