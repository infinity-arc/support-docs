# Base container
FROM node:14-alpine
# Set Working Directory
WORKDIR /app
# Copy pack files
COPY package.json package-lock.json ./
# Run clean install
RUN npm ci
# Copy all rest
COPY . .
# Run build
RUN npm run build
# Confirm dir set 
WORKDIR /app
COPY ./src/vuepress/dist ./docs
# Start serving
EXPOSE 8080
CMD npm run serve
