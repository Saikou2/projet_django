from rest_framework import serializers
from .models import Book, Loan

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title'] 

class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ['id', 'book', 'user', 'loan_date', 'return_date']
        read_only_fields = ['user']  