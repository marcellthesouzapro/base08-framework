# **🚀 base08: Painel Administrativo Moderno com Django, Vite & Docker**

Bem-vindo ao base08\! Este projeto serve como um framework robusto e escalável para construir painéis administrativos modernos. Ele integra um backend poderoso em Django com um frontend dinâmico em React (via Vite), utilizando PostgreSQL como banco de dados (hospedado no Supabase) e Docker para um ambiente de desenvolvimento e produção consistente.

## **✨ Visão Geral**

O base08 foi projetado para ser um ponto de partida rápido, permitindo que desenvolvedores foquem na implementação de funcionalidades específicas do negócio, em vez de gastar tempo com a configuração inicial da infraestrutura.

**Principais Características:**

* **Backend Django:** Lógica de negócio, modelos de dados e APIs.  
* **Frontend React com Vite:** Interface de usuário rápida e interativa.  
* **Tailwind CSS v4:** Estilização utilitária e responsiva.  
* **PostgreSQL (Supabase):** Banco de dados relacional robusto e gerenciado.  
* **Autenticação Supabase:** Tela de login integrada para gerenciamento de usuários.  
* **Docker & Docker Compose:** Ambientes de desenvolvimento e produção isolados e reproduzíveis.  
* **Hot-Reloading:** Desenvolvimento ágil com feedback instantâneo no frontend e backend.

## **📦 Tecnologias (Stack)**

* **Backend:** Python 3.10, Django 5.0, Gunicorn, psycopg2-binary, python-decouple, dj-database-url.  
* **Frontend:** Node.js 20, React 18, Vite 5, Tailwind CSS 4.0.0-next.11, Supabase JS client.  
* **Banco de Dados:** PostgreSQL (via Supabase).  
* **Orquestração:** Docker, Docker Compose.

## **📁 Estrutura do Projeto**

A estrutura do projeto é modular, separando claramente o backend do frontend e os arquivos de configuração:

base08/  
├── backend/                  \# Código do Django (backend)  
│   ├── base08/               \# Configurações principais do projeto Django  
│   ├── core/                 \# App Django para funcionalidades centrais  
│   ├── auth/                 \# App Django para autenticação (tela de login)  
│   ├── dashboard/            \# App Django para o painel (integração frontend)  
│   ├── manage.py             \# Utilitário de linha de comando do Django  
│   ├── requirements.txt      \# Dependências Python  
│   ├── Dockerfile            \# Configuração Docker para o backend (produção)  
│   └── entrypoint.sh         \# Script de entrada do contêiner backend  
├── frontend/                 \# Código do Vite/React (frontend)  
│   ├── public/               \# Arquivos estáticos públicos  
│   ├── src/                  \# Código-fonte React  
│   ├── index.html            \# HTML principal do frontend  
│   ├── package.json          \# Dependências Node.js  
│   ├── postcss.config.js     \# Configuração do PostCSS  
│   ├── tailwind.config.js    \# Configuração do Tailwind CSS  
│   ├── vite.config.js        \# Configuração do Vite  
│   └── Dockerfile            \# Configuração Docker para o frontend (produção)  
├── .env.example              \# Exemplo de variáveis de ambiente  
├── docker-compose.yml        \# Orquestração dos serviços Docker  
└── .gitignore                \# Arquivos e pastas a serem ignorados pelo Git

## **🚀 Como Começar**

Siga estes passos para configurar e executar o projeto em sua máquina local.

### **1\. Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas:

* **Git:** [Download Git](https://git-scm.com/downloads)  
* **Docker Desktop:** [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)  
* **Conta Supabase:** Crie um projeto no Supabase para seu banco de dados PostgreSQL e obtenha suas chaves de API. [Supabase Website](https://supabase.com/)

### **2\. Clonar o Repositório**

Abra seu terminal e clone o repositório:

git clone \<URL\_DO\_SEU\_REPOSITORIO\>  
cd base08

### **3\. Configurar Variáveis de Ambiente**

As variáveis de ambiente são cruciais para a segurança e configuração do projeto.

1. Na raiz do projeto (base08/), copie o arquivo de exemplo .env.example para .env:  
   cp .env.example .env

2. Abra o arquivo .env e preencha as seguintes variáveis com suas credenciais do Supabase:  
   SECRET\_KEY=sua\_chave\_secreta\_aqui\_para\_producao\_e\_dev  
   DEBUG=True  
   ALLOWED\_HOSTS=127.0.0.1,localhost,backend,frontend

   \# Variáveis para conexão com o Supabase (Banco de Dados)  
   \# Exemplo: postgresql://\[user\]:\[password\]@\[host\]:\[port\]/\[database\_name\]  
   DATABASE\_URL=postgresql://postgres:\[SUA\_SENHA\_DO\_DB\_SUPABASE\]@\[SEU\_HOST\_DO\_DB\_SUPABASE\]:5432/postgres

   \# Variáveis para autenticação Supabase (API)  
   \# Encontradas em Project Settings \-\> API no painel do Supabase  
   SUPABASE\_URL=https://your-project-ref.supabase.co  
   SUPABASE\_ANON\_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcHJvamVjdC1yZWYiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY3ODk5OTk5OSwiZXhwIjoxNjc5MDAzNTk5fQ.SUA\_CHAVE\_ANON\_AQUI

   * Substitua os placeholders \[SUA\_SENHA\_DO\_DB\_SUPABASE\], \[SEU\_HOST\_DO\_DB\_SUPABASE\], your-project-ref.supabase.co e SUA\_CHAVE\_ANON\_AQUI com os valores reais do seu projeto Supabase.

### **4\. Iniciar os Contêineres Docker**

Na raiz do projeto (base08/), execute o seguinte comando:

docker-compose up \--build

Este comando construirá as imagens Docker (se necessário) e iniciará os serviços do backend (Django) e frontend (Vite). Mantenha este terminal aberto, pois ele exibirá os logs de ambos os serviços.

### **5\. Configuração Inicial do Banco de Dados**

Em um **novo terminal** (mantendo o anterior rodando), navegue até a raiz do projeto (base08/). Você precisará executar as migrações do Django e criar um superusuário para o painel de administração.

1. **Acesse o shell do contêiner do backend:**  
   docker-compose exec backend bash

2. **Aplique as migrações do banco de dados:**  
   python manage.py migrate

   Isso criará as tabelas necessárias no seu banco de dados Supabase.  
3. **Crie um superusuário para o Admin do Django:**  
   python manage.py createsuperuser

   Siga as instruções no terminal para definir um nome de usuário, e-mail e senha.  
4. **Saia do contêiner:**  
   exit

### **6\. Acessar a Aplicação**

Com os contêineres rodando e o banco de dados configurado, você pode acessar a aplicação no seu navegador:

* **Página de Login (Nova Página Inicial):** http://localhost:8000/  
* **Painel Administrativo (Frontend Vite/React):** Após o login bem-sucedido, você será redirecionado para http://localhost:8000/dashboard/  
* **Admin Django:** http://localhost:8000/admin/ (use as credenciais do superusuário criado).

## **💻 Desenvolvimento**

### **Hot-Reloading**

O projeto está configurado para hot-reloading em ambos os lados:

* **Backend (Django):** Alterações nos arquivos Python dentro de backend/ farão o servidor Django reiniciar automaticamente no contêiner.  
* **Frontend (Vite/React):** Alterações nos arquivos JavaScript/JSX/CSS dentro de frontend/src/ serão detectadas pelo Vite, e o navegador atualizará instantaneamente.

### **Próximos Passos**

* **Defina seus Modelos Django:** Comece a criar ou modificar modelos em backend/core/models.py ou em novos aplicativos Django para estruturar seus dados.  
* **Crie APIs RESTful:** Utilize o [Django REST Framework](https://www.django-rest-framework.org/) (recomendado) para expor seus dados e lógica de negócio ao frontend.  
* **Desenvolva suas Telas React:** Construa os componentes e páginas do seu painel na pasta frontend/src/, consumindo as APIs do backend.  
* **Gerenciamento de Sessão Supabase no Frontend:** Para proteger as rotas do React, você precisará verificar a sessão do Supabase no frontend e redirecionar para o login se o usuário não estiver autenticado.  
* **Estilize com Tailwind CSS:** Continue utilizando as classes utilitárias do Tailwind para construir interfaces responsivas e visualmente atraentes.

## **⚠️ Solução de Problemas Comuns**

* Erro: Unknown at rule @tailwindcss(unknownAtRules) no index.css  
  Este erro indica que o PostCSS não está processando corretamente as diretivas @tailwind.  
  * **Solução:** Certifique-se de que o contêiner frontend está rodando e execute docker-compose exec frontend npm install para garantir que todas as dependências do Node.js (incluindo Tailwind CSS e PostCSS) estejam instaladas corretamente. Se o problema persistir, tente reconstruir os contêineres com docker-compose down \-v && docker-compose up \--build.  
* **Erro: "Porta em uso" (Port already in use)**  
  * **Solução:** Identifique e encerre o processo que está usando a porta (8000 ou 5173\) ou altere as portas mapeadas no seu docker-compose.yml.  
* **Problemas de Conexão com o Supabase**  
  * **Solução:** Verifique se a DATABASE\_URL, SUPABASE\_URL e SUPABASE\_ANON\_KEY no seu arquivo .env estão 100% corretas. Verifique também as regras de firewall do seu projeto Supabase.  
* **Mudanças de código não aparecem (Hot-reload não funciona)**  
  * **Solução:** Verifique se os volumes no docker-compose.yml (./backend:/app/backend e ./frontend:/app/frontend) estão corretos. Para o frontend, certifique-se de que server.watch.usePolling: true está configurado no vite.config.js.

Este README.md oferece uma visão clara e concisa do seu projeto, facilitando a vida de qualquer desenvolvedor que queira começar a trabalhar com ele.