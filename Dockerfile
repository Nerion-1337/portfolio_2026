FROM node:20-slim
WORKDIR /app

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
RUN git config --global user.email "nerion.1337.dev@gmail.com" && \
    git config --global user.name "Nerion" && \
    git config --global --add safe.directory /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 5175
CMD ["npm", "run", "dev", "--", "--host"]