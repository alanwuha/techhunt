from rest_framework import serializers
from salary.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'login', 'name', 'salary']