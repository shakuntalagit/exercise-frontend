#Dockerfile for client app
FROM node:10.16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install --silent

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]
