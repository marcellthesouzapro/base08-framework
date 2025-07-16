FROM python:3.10-slim-buster
WORKDIR /app/backend
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN python manage.py collectstatic --noinput
EXPOSE 8000
ENTRYPOINT ["entrypoint.sh"]