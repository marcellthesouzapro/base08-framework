#!/bin/bash

# Espera o banco de dados estar pronto (opcional, mas recomendado em produção)
# while ! nc -z db 5432; do
#   echo "Waiting for the database to be ready..."
#   sleep 1
# done

echo "Applying database migrations..."
python manage.py migrate --noinput

echo "Starting Gunicorn server..."
exec gunicorn base08.wsgi:application --bind 0.0.0.0:8000 # ATUALIZADO: Renomeado para base08.wsgi:application