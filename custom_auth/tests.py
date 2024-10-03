from django.test import TestCase

# Create your tests here.
from rest_framework.test import APITestCase
from rest_framework import status

class UserProfileViewTests(APITestCase):
    def test_user_profile(self):
        self.client.login(username='admin', password='password')  # Assurez-vous d'avoir des utilisateurs pour les tests
        response = self.client.get('/api/user-profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response['Content-Type'], 'application/json')

class UserListViewTests(APITestCase):
    def test_user_list(self):
        self.client.login(username='admin', password='password')
        response = self.client.get('/api/user-list/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response['Content-Type'], 'application/json')
