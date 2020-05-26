from django.test import TestCase
from urllib import request
from rest_framework import status
import os
from .MultiPartForm import MultiPartForm

class UploadCsvTestCase(TestCase):

    def setUp(self):
        self.url = 'http://localhost:8000/users/upload'
        self.test_dir = './test'

    def upload_csv(self, filename):
        response = None
        try:
            with open(os.path.join(self.test_dir, filename), 'rb') as f:
                # Form
                form = MultiPartForm()
                form.add_file('file', filename, f, 'text/csv')
                
                # Data
                data = bytes(form)
                
                # Request
                r = request.Request(self.url, data)
                r.add_header('Content-Type', form.get_content_type())
                
                # Response
                response = request.urlopen(r)

                return response.status
        except:
            pass

        return None

    def test_1_new_records(self):
        filename = 'test_1_new_records.csv'
        self.assertEqual(self.upload_csv(filename), status.HTTP_200_OK)

    def test_2_existing_records(self):
        filename = 'test_2_existing_records.csv'
        self.assertEqual(self.upload_csv(filename), status.HTTP_200_OK)

    def test_3_comments(self):
        filename = 'test_3_comments.csv'
        self.assertEqual(self.upload_csv(filename), status.HTTP_200_OK)

    def test_4_empty_file(self):
        filename = 'test_4_empty_file.csv'
        self.assertEqual(self.upload_csv(filename), None)

    def test_5_too_few_columns(self):
        filename = 'test_5_too_few_columns.csv'
        self.assertEqual(self.upload_csv(filename), None)

    def test_6_too_many_columns(self):
        filename = 'test_6_too_many_columns.csv'
        self.assertEqual(self.upload_csv(filename), None)

    def test_7_incorrect_salary(self):
        filename = 'test_7_incorrect_salary.csv'
        self.assertEqual(self.upload_csv(filename), None)

    def test_8_negative_salary(self):
        filename = 'test_8_negative_salary.csv'
        self.assertEqual(self.upload_csv(filename), None)