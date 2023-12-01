# Estágio de construção
FROM node:18 as build

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

ARG CADDY_VERSION
ENV CADDY_VERSION=$CADDY_VERSION


# Instalando o Caddy
RUN curl -fsSLo caddy.tar.gz "https://github.com/caddyserver/caddy/releases/download/v${CADDY_VERSION}/caddy_${CADDY_VERSION}_linux_amd64.tar.gz" \
    && tar -zxvf caddy.tar.gz caddy \
    && chmod +x caddy

# Instalando o Node.js e o npm
RUN apt-get update && apt-get install -y nodejs npm

# Copiando os arquivos do aplicativo React para o contêiner
COPY . .

# Instalando as dependências do projeto
RUN npm ci
RUN npm install

# Construindo a aplicação React
RUN npm run build

# Formatando o Caddyfile
RUN ./caddy fmt --overwrite Caddyfile

# Iniciando o servidor Caddy para servir a aplicação React
CMD ./caddy run --config Caddyfile --adapter caddyfile 2>&1