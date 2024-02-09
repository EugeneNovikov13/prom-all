# server
FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "index.js"]
