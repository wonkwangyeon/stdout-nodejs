FROM node:22.11.0-alpine3.19
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
CMD ["node","index.js"]
