# Usando a imagem oficial do Node.js
FROM node:16

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o package.json e instalando as dependências
COPY package*.json ./
RUN npm install

# Copiando o restante do código
COPY ./src /app

# Expondo a porta do serviço
EXPOSE 3001

# Rodando o serviço
CMD ["node", "index.js"]