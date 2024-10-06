from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class SignupSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    """
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'password2', 'email']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')  # Supprimer le champ password2
        user = User(**validated_data)  # Créer une instance de User
        user.set_password(validated_data['password'])  # Hacher le mot de passe
        user.save()  # Sauvegarder l'utilisateur
        return user


class LoginSerializer(serializers.Serializer):
    """
    Serializer pour le login d'un utilisateur.
    """
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)  


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model.
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_superuser']  

    def update(self, instance, validated_data):
        """
        Met à jour un utilisateur existant avec les données fournies.
        """
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)

        # Hachage du mot de passe si fourni
        password = validated_data.get('password')
        if password:
            instance.set_password(password)

        instance.save()  # Sauvegarder l'utilisateur
        return instance
