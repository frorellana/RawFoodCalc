from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from .models import Animal, Part, Image, Part, Ratio
from .serializers import AnimalSerializer, ImageSerializer, RatioSerializer, PartSerializer
from rest_framework.permissions import IsAdminUser, DjangoModelPermissionsOrAnonReadOnly, IsAuthenticatedOrReadOnly

# Create your views here.
# where to write all endpoints
# create a gneric api view - for crud operations
# DjangoModelPermissionsOrAnonReadOnly needed to give access to only those users who have been authorized


class AnimalListView(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Animal.objects.all().order_by('name')
    serializer_class = AnimalSerializer

class AnimalDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class PartListView(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Part.objects.all().order_by('name')
    serializer_class = PartSerializer

class PartDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Part.objects.all()
    serializer_class = PartSerializer

class RatioListView(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Ratio.objects.all()
    serializer_class = RatioSerializer

class RatioDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Ratio.objects.all()
    serializer_class = RatioSerializer


class ImageListView(generics.ListCreateAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class ImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class AnimalPartRatioView(APIView):
    def get(self, request, *args, **kwargs):
        animals = Animal.objects.all()
        data = []

        for animal in animals:
            animal_data = AnimalSerializer(animal).data
            ratios = animal.ratio_set.select_related('part')

            ratio_data = []
            for ratio in ratios:
                ratio_data.append({
                    'part': ratio.part.name,
                    'meat': ratio.meat,
                    'bone': ratio.bone,
                    'organ': ratio.organ
                })

            animal_data['ratios'] = ratio_data
            data.append(animal_data)
        return Response(data)
