from django.urls import path
from . import views

app_name = 'supabase_auth' # ATUALIZADO: Renomeado para 'supabase_auth'

urlpatterns = [
    path('', views.login_view, name='login'), # A rota raiz do app 'supabase_auth' é a tela de login
]