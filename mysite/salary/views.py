from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.db import transaction
from salary.models import Employee
from salary.serializers import EmployeeSerializer
import csv

@transaction.atomic
@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload(request):
    try:
        # Extract employees from csv file
        employees = []
        with open(request.data['file'].name) as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            # Skip header row
            next(reader)
            for row in reader:
                # Incorrect number of columns
                if len(row) != 4:
                    raise Exception
                # Empty id/name/login or invalid salary
                elif not row[0] or not row[1] or not row[2] or float(row[3]) < 0:
                    raise Exception
                # Skip comment lines
                elif row[0] == '#':
                    pass
                else:
                    employees.append(row)

        # Empty file
        if len(employees) == 0:
            raise Exception

        # Save employees to database, handle rollbacks using transactions
        # Just want to add that we use a second loop for saving to database
        # for better code readability at the cost of speed
        with transaction.atomic():
            for id, login, name, salary in employees:
                e = Employee(id, login, name, salary)
                e.save()
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_200_OK)