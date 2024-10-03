from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, LoanViewSet
from . import views


router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'loans', LoanViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('api/books/', views.BookListView.as_view(), name='book-list'),
]