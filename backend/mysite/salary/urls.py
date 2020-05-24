from django.urls import path
from salary import views
from rest_framework import routers

urlpatterns = [
    path('users/upload', views.upload),
    path('users/', views.employee),
    path('users/<str:pk>/', views.employee_detail)
]
