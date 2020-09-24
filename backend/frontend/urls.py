from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    # path('', views.index),
    path('add_city/<city>',views.add_city , name ='add_city'),
    path('delete/<city_name>/', views.delete_city, name='delete_city'),

]