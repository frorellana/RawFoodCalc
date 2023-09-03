from rest_framework import serializers
from django.db import IntegrityError
from .models import Animal, Part, Ratio, Image

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ('id', 'name')
    
class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ('id', 'name')
    
class RatioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ratio
        fields = ('id', 'animal', 'part', 'meat', 'bone', 'organ')

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError("This combination of animal and part already exists.")
        
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'animal', 'part', 'path')


      
