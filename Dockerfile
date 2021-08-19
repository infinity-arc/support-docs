# Base container
FROM node:14-alpine
# Set Working Directory
WORKDIR /app
# Copy pack files
COPY package*.json ./
# Run clean install
RUN npm ci
# Copy all rest
COPY . .
# Run build
RUN npm run build
# Confirm dir set 
WORKDIR /app
# Start serving
CMD npm run serve
