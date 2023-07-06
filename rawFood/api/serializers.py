from rest_framework import serializers
from .models import Protein

class ProteinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = ('id', 'animal', 'item', 'totalMeat', 'totalBone', 'totalOrgan')