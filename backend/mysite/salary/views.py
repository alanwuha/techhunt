from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.db import transaction
from django.views.decorators.csrf import csrf_exempt
from salary.models import Employee
from salary.serializers import EmployeeSerializer
from celery import shared_task

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

        return Response(status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def employee(request):
    """
    List all employees.
    """
    try:
        # Get employees
        employees = Employee.objects.all()

        # Get query parameters
        minSalary = float(request.query_params['minSalary'])
        maxSalary = float(request.query_params['maxSalary'])
        offset = int(request.query_params['offset'])
        limit = int(request.query_params['limit'])
        sort = request.query_params['sort'].strip()

        # Apply filters
        employees = employees.filter(salary__gte=minSalary).filter(salary__lte=maxSalary).order_by(sort)

        # Count of total results
        count = len(employees)
        
        # Slice by offset and limit
        employees = employees[offset:offset+limit]

        # Next
        if offset+limit < count:
            nextOffset = offset + limit
        else:
            nextOffset = None

        # Previous
        if offset > 0:
            if offset - limit > 0:
                previousOffset = offset - limit
            else:
                previousOffset = 0
        else:
            previousOffset = None

        # Construct response data
        serializer = EmployeeSerializer(employees, many=True)
        response = {
            'count': count,
            'next_offset': nextOffset,
            'previous_offset': previousOffset,
            'limit': limit,
            'results': serializer.data,
        }

        return Response(response)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

