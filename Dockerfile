FROM node:14-alpine

WORKDIR /app
# RUN npm i docz -g

COPY package*.json ./
RUN npm ci

RUN npm run build

RUN npm run serve
