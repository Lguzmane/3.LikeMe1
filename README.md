# Like Me - Parte I
Backend con Node.js + Express + PostgreSQL

## Instrucciones de instalación
1. Clonar repositorio:
git clone [URL-DEL-REPOSITORIO]

2. Configurar PostgreSQL (ejecutar en psql):
CREATE DATABASE likeme;
\c likeme
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), description VARCHAR(255), likes INT);

3. Configurar backend:
cd backend
npm install
node index.js

4. Configurar frontend (en otra terminal):
cd frontend
npm install
npm run dev

## Endpoints del API
- GET http://localhost:3000/posts → Devuelve todos los posts
- POST http://localhost:3000/posts → Crea nuevo post
