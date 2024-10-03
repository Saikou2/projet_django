from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import (
    SignupView,
    LoginView,
     UserView,
     LogoutView
    
)




urlpatterns = [
    
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/', UserView.as_view(), name='user'),
    
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user/<int:pk>/', UserView.as_view(), name='user-delete'),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),    
    
]
