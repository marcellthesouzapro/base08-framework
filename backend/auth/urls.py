from django.urls import path
from . import views

app_name = 'auth'

urlpatterns = [
    path('', views.login_view, name='login'), # A rota raiz do app 'auth' é a tela de login
]
