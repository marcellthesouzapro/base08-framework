FROM node:20-slim

WORKDIR /app/frontend

# Copy package.json and package-lock.json from the build context's frontend/ directory
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend code from the build context's frontend/ directory
COPY frontend/ .

RUN npm run build