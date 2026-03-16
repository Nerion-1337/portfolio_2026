FROM node:20-slim
WORKDIR /app

# Installation de git (nécessaire pour votre config)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# On installe les dépendances
RUN npm install

# On ne copie pas tout et on ne build pas ici ! 
# C'est le volume dans docker-compose qui s'en chargera.

EXPOSE 5175
CMD ["npm", "run", "dev"]