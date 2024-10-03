from rest_framework import generics, status
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User  
from .serializers import LoginSerializer,UserSerializer, SignupSerializer 
from rest_framework.views import APIView
from rest_framework.decorators import action


class SignupView(generics.CreateAPIView):
    """
    View for user signup.
    """
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        
        return user

class LoginView(generics.GenericAPIView):
    """
    View for user login. JWT tokens are generated upon successful login.
    """
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer


    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'is_superuser': user.is_superuser,
                'detail': 'Login successful'
            }, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserView(generics.RetrieveUpdateAPIView):
    """
    View for retrieving and updating the authenticated user.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
    
    
    def list(self, request, *args, **kwargs):
        
        if not request.user.is_superuser:
            raise PermissionDenied("You do not have permission to view this content.")
        
        return super().list(request, *args, **kwargs)
    
    @action(detail=True, methods=['delete'], permission_classes=[IsAuthenticated])
    def delete_user(self, request, pk=None):
        user = self.get_object()

        # Vérifier si l'utilisateur est un super utilisateur avant de supprimer un autre utilisateur
        if not request.user.is_superuser:
            raise PermissionDenied("tu n'a pas la permissions de supprimer un user.")
        
        # Empêcher la suppression de soi-même
        if user == request.user:
            return Response({'detail': "tu ne peu te supprimer toi meme."}, status=status.HTTP_400_BAD_REQUEST)
        
        user.delete()
        return Response({'detail': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        
        return Response({"message": "Déconnecté avec succès"}, status=200)