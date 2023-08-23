from django.contrib import admin
from .models import Animal, Part, Ratio, Image

# Register your models here.
admin.site.register(Animal)
admin.site.register(Part)
admin.site.register(Image)
admin.site.register(Ratio)