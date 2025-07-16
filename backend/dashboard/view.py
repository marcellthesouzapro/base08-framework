from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# @login_required # Removido para permitir que o frontend Supabase gerencie o redirecionamento
def dashboard_view(request):
    # Em uma aplicação real, o frontend React faria a verificação de sessão Supabase
    # e redirecionaria para o login se não autenticado.
    # Esta view Django apenas serve o HTML do dashboard.
    context = {
        'message': 'Bem-vindo ao Painel Administrativo!',
        'user': request.user.username if request.user.is_authenticated else 'Convidado'
    }
    return render(request, 'dashboard/index.html', context)
