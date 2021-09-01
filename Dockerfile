# Base container
FROM node:14-alpine
# Set Working Directory
WORKDIR /app
# Copy pack files
COPY package.json yarn.lock ./
# Run clean install
RUN yarn install
# Copy all rest
COPY . .
# Run build
RUN npm run build
RUN ls -al
# Confirm dir set 
# Start serving
EXPOSE 8080
CMD npm run serve
