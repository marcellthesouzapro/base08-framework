from django.shortcuts import render, redirect
from django.conf import settings

def login_view(request):
    # Se o usuário já estiver autenticado via Django (ex: sessão persistente), redireciona para o dashboard
    # Nota: A autenticação Supabase é primariamente no frontend, mas esta verificação é para o Django.
    if request.user.is_authenticated:
        return redirect('dashboard:main')

    context = {
        'SUPABASE_URL': settings.SUPABASE_URL,
        'SUPABASE_ANON_KEY': settings.SUPABASE_ANON_KEY,
    }
    return render(request, 'supabase_auth/login.html', context) # ATUALIZADO: Caminho do template