from rest_framework import viewsets, permissions
from .models import Book, Loan
from rest_framework.exceptions import PermissionDenied
from .serializers import BookSerializer, LoanSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny



class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
   
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        """
        Personnalise les permissions en fonction du type de requête.
        Pour les méthodes GET, tout utilisateur authentifié peut accéder.
        Pour les autres méthodes (POST, PUT, DELETE), seul un superutilisateur peut accéder.
        """
        if self.request.method == 'GET':
            
            return [IsAuthenticated()]
        else:
           
            if not self.request.user.is_superuser:
                raise PermissionDenied("Vous devez être superutilisateur pour modifier ou supprimer des livres.")
            return [IsAuthenticated()]
        
class LoanViewSet(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            if user.is_superuser:  
                return Loan.objects.all()
            return Loan.objects.filter(user=user)  
        return Loan.objects.none()  
    def perform_create(self, serializer):
        user = self.request.user
        if user.is_authenticated:
            serializer.save(user=user)  
        else:
            raise PermissionDenied("Vous devez vous connecter pour avoir accès.")
