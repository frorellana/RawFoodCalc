from django.urls import path
from .views import AnimalPartRatioView, AnimalListView, AnimalDetailView, PartListView, PartDetailView, ImageListView, ImageDetailView, RatioListView, RatioDetailView

urlpatterns = [
  path('animals', AnimalListView.as_view()), 
  path('animals/<int:pk>/', AnimalDetailView.as_view()), 
  path('parts', PartListView.as_view()), 
  path('parts/<int:pk>/',PartDetailView.as_view()),
  path('images', ImageListView.as_view()), 
  path('images/<int:pk>/',ImageDetailView.as_view()),
  path('ratios', RatioListView.as_view()),
  path('ratios/<int:pk>/',RatioDetailView.as_view()),
  path('animalPartRatio', AnimalPartRatioView.as_view())
]