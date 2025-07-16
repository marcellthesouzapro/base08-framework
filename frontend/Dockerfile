FROM node:20-slim
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build