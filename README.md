Docker: Utilização prática no cenário de Microsserviços
Denilson Bonatti, Instrutor - Digital Innovation One

Muito se tem falado de containers e consequentemente do Docker no ambiente de desenvolvimento. Mas qual a real função de um container no cenários de microsserviços? Qual a real função e quais exemplos práticos podem ser aplicados no dia a dia? Essas são algumas das questões que serão abordadas de forma prática pelo Expert Instructor Denilson Bonatti nesta Live Coding. IMPORTANTE: Agora nossas Live Codings acontecerão no canal oficial da dio._ no YouTube. Então, já corre lá e ative o lembrete! Pré-requisitos: Conhecimentos básicos em Linux, Docker e AWS.

# Implementação

## Microsserviços de Usuários e Pedidos

Este projeto contém dois microsserviços: **Serviço de Usuários** e **Serviço de Pedidos**, construídos com Node.js e orquestrados usando Docker Compose.

### Tecnologias

- Node.js
- Express
- Docker
- Docker Compose

### Como executar o projeto

1- Clone o repositório

```bash
git clone https://github.com/rodrigo-92-srb/toshiro-shibakita

```
2- Na raiz do projeto, execute:

```bash
docker-compose up --build

```
3- Acesse os microsserviços:

- Serviço de Usuários: http://localhost:3001/usuarios
- Serviço de Pedidos: http://localhost:3002/pedidos

