# Use the official Node.js image.
FROM node:22-slim

# Create and change to the app directory.
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

COPY . .

RUN npm install


CMD [ "node", "index.js"]
