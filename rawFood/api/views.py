from django.shortcuts import render
from rest_framework import generics
from .models import Protein
from .serializers import ProteinSerializer

# Create your views here.
# where to write all endpoints
# create a gneric appi view - view all proteins and create protein

class ProteinView(generics.ListAPIView):
    queryset = Protein.objects.all()
    serializer_class = ProteinSerializer

