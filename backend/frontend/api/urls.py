from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    # path('', views.ListUsers),
    path('<int:pk>/', views.DetailTodo.as_view()),
]

