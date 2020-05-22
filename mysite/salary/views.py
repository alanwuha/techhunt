from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.db import transaction
from django.views.decorators.csrf import csrf_exempt
from salary.models import Employee
from salary.serializers import EmployeeSerializer
from celery import shared_task
import csv

@csrf_exempt
@transaction.atomic
@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload(request):
    try:
        # Extract rows from csv file
        decoded_string = next(request.FILES['file'].chunks()).decode('utf-8')
        rows = [row.split(',') for row in decoded_string.split('\n') if row and row[0] != '#'][1:]

        # Validate rows
        for row in rows:
            # Incorrect number of columns
            if len(row) != 4:
                raise Exception
            # Empty id/name/login or invalid salary
            elif not row[0] or not row[1] or not row[2] or float(row[3]) < 0:
                raise Exception

        # Empty file
        if len(rows) == 0:
            raise Exception

        # Save rows to database, handle rollbacks using transactions
        with transaction.atomic():
            for id, login, name, salary in rows:
                e = Employee(id, login, name, salary)
                e.save()
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_200_OK)