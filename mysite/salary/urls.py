from django.urls import path
from salary import views

urlpatterns = [
    path('users/upload', views.upload),
]