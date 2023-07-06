from django.urls import path
from .views import ProteinView

urlpatterns = [
  path('protein', ProteinView.as_view())
]