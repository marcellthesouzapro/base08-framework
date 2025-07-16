FROM python:3.10-slim-buster

# Create a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
ENV HOME=/home/appuser
ENV APP_HOME=/home/appuser/web
RUN mkdir -p $APP_HOME # ATUALIZADO: Usar -p para criar diretórios pai se não existirem
WORKDIR $APP_HOME

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Copy requirements.txt and install dependencies
# Source path is relative to the build context (which is the root 'base08/' directory)
# Destination path is relative to the WORKDIR ($APP_HOME)
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend application code (excluding requirements.txt, which is already copied)
# Source path is relative to the build context (root 'base08/' directory)
# Destination path is relative to the WORKDIR ($APP_HOME)
COPY backend/ .

# Copy entrypoint script (source is relative to build context)
COPY backend/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Collect static files (for production build)
# The manage.py is now at $APP_HOME/manage.py
RUN python manage.py collectstatic --noinput

# Expose the port Gunicorn will use
EXPOSE 8000

# Define the entrypoint command
ENTRYPOINT ["entrypoint.sh"]