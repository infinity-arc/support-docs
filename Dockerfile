FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
WORKDIR /app
CMD npm run serve
