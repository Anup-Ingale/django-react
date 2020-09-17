from rest_framework import generics
from frontend.models import City
from .serializers import FrontEndSerializer

class ListTodo(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = FrontEndSerializer

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = City.objects.all()
    serializer_class = FrontEndSerializer

