# Use node alpine version to reduce the Nodejs layer size
FROM node:16.3.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD ["node", "src/index.js"]
